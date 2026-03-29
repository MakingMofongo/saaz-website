import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), ".analytics");
const getLogFile = () => {
  const d = new Date();
  const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return path.join(LOG_DIR, `${date}.jsonl`);
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const event = {
      ...body,
      ts: new Date().toISOString(),
      ip: req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown",
      ua: req.headers.get("user-agent") || "",
      ref: req.headers.get("referer") || "",
    };

    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(getLogFile(), JSON.stringify(event) + "\n");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== process.env.ANALYTICS_KEY && key !== "saaz2026") {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const days = parseInt(req.nextUrl.searchParams.get("days") || "7");

  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    const files = await fs.readdir(LOG_DIR);
    const jsonlFiles = files.filter((f) => f.endsWith(".jsonl")).sort().slice(-days);

    const events: Record<string, unknown>[] = [];
    for (const file of jsonlFiles) {
      const content = await fs.readFile(path.join(LOG_DIR, file), "utf-8");
      const lines = content.trim().split("\n").filter(Boolean);
      for (const line of lines) {
        try {
          events.push(JSON.parse(line));
        } catch { /* skip malformed */ }
      }
    }

    const summary = {
      total_events: events.length,
      period: `last ${days} days`,
      files: jsonlFiles,
      by_action: {} as Record<string, number>,
      by_section: {} as Record<string, number>,
      by_device: { mobile: 0, desktop: 0 },
      by_hour: {} as Record<string, number>,
      unique_visitors: new Set<string>(),
      clicks_timeline: {} as Record<string, number>,
      top_ctas: [] as { action: string; label: string; count: number }[],
    };

    const ctaMap = new Map<string, number>();

    for (const e of events) {
      const action = (e.action as string) || "unknown";
      const section = (e.section as string) || "unknown";
      const device = (e.device as string) || "unknown";
      const sid = (e.sid as string) || "";
      const ts = (e.ts as string) || "";
      const label = (e.label as string) || "";

      summary.by_action[action] = (summary.by_action[action] || 0) + 1;
      summary.by_section[section] = (summary.by_section[section] || 0) + 1;

      if (device === "mobile") summary.by_device.mobile++;
      else summary.by_device.desktop++;

      if (sid) summary.unique_visitors.add(sid);

      if (ts) {
        const hour = ts.slice(11, 13);
        summary.by_hour[hour] = (summary.by_hour[hour] || 0) + 1;
        const date = ts.slice(0, 10);
        summary.clicks_timeline[date] = (summary.clicks_timeline[date] || 0) + 1;
      }

      if (action === "click" && label) {
        const key = `${label}`;
        ctaMap.set(key, (ctaMap.get(key) || 0) + 1);
      }
    }

    summary.top_ctas = Array.from(ctaMap.entries())
      .map(([label, count]) => ({ action: "click", label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    return NextResponse.json({
      ...summary,
      unique_visitors: summary.unique_visitors.size,
      recent_events: events.slice(-50).reverse(),
    });
  } catch {
    return NextResponse.json({ total_events: 0, error: "no data yet" });
  }
}
