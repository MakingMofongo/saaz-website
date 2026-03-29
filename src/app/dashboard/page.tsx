"use client";

import { useEffect, useState, useCallback } from "react";

interface Analytics {
  total_events: number;
  period: string;
  by_action: Record<string, number>;
  by_section: Record<string, number>;
  by_device: { mobile: number; desktop: number };
  by_hour: Record<string, number>;
  unique_visitors: number;
  clicks_timeline: Record<string, number>;
  top_ctas: { action: string; label: string; count: number }[];
  recent_events: {
    action: string;
    label?: string;
    section?: string;
    device?: string;
    ts: string;
    href?: string;
    screen?: string;
    path?: string;
  }[];
}

const KEY = "saaz2026";

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="bg-[#1a1a2e] border border-white/5 rounded-xl p-5 sm:p-6">
      <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">{label}</p>
      <p className="text-3xl sm:text-4xl font-light text-white font-mono">{value}</p>
      {sub && <p className="text-[12px] text-white/20 mt-1">{sub}</p>}
    </div>
  );
}

function Bar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-[12px] text-white/40 w-28 sm:w-36 truncate shrink-0 text-right">{label}</span>
      <div className="flex-1 h-7 bg-white/5 rounded-sm overflow-hidden relative">
        <div className={`h-full ${color} rounded-sm transition-all duration-700`} style={{ width: `${pct}%` }} />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-white/50 font-mono">{value}</span>
      </div>
    </div>
  );
}

function HourChart({ data }: { data: Record<string, number> }) {
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const max = Math.max(...hours.map((h) => data[h] || 0), 1);

  return (
    <div className="flex items-end gap-[3px] h-32 sm:h-40">
      {hours.map((h) => {
        const v = data[h] || 0;
        const pct = (v / max) * 100;
        return (
          <div key={h} className="flex-1 flex flex-col items-center gap-1 group relative">
            <div
              className="w-full bg-emerald-500/60 hover:bg-emerald-400/80 rounded-t-sm transition-colors min-h-[2px]"
              style={{ height: `${Math.max(pct, 2)}%` }}
            />
            <span className="text-[8px] sm:text-[9px] text-white/20 font-mono">{h}</span>
            {v > 0 && (
              <div className="absolute -top-6 bg-white/10 text-white/70 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                {v}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TimelineChart({ data }: { data: Record<string, number> }) {
  const entries = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));
  if (entries.length === 0) return <p className="text-white/20 text-sm">No data yet</p>;
  const max = Math.max(...entries.map(([, v]) => v), 1);

  return (
    <div className="flex items-end gap-2 h-28 sm:h-36">
      {entries.map(([date, v]) => {
        const pct = (v / max) * 100;
        const day = date.slice(5);
        return (
          <div key={date} className="flex-1 flex flex-col items-center gap-1 group relative min-w-[24px]">
            <div
              className="w-full bg-blue-500/60 hover:bg-blue-400/80 rounded-t-sm transition-colors min-h-[2px]"
              style={{ height: `${Math.max(pct, 3)}%` }}
            />
            <span className="text-[9px] text-white/20 font-mono">{day}</span>
            <div className="absolute -top-6 bg-white/10 text-white/70 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono">
              {v}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Dashboard() {
  const [data, setData] = useState<Analytics | null>(null);
  const [days, setDays] = useState(7);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"overview" | "events">("overview");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/analytics?key=${KEY}&days=${days}`);
      const json = await res.json();
      setData(json);
    } catch {
      setData(null);
    }
    setLoading(false);
  }, [days]);

  useEffect(() => { load(); }, [load]);

  const deviceTotal = (data?.by_device.mobile || 0) + (data?.by_device.desktop || 0);
  const mobilePct = deviceTotal > 0 ? Math.round(((data?.by_device.mobile || 0) / deviceTotal) * 100) : 0;

  const sortedSections = Object.entries(data?.by_section || {})
    .sort(([, a], [, b]) => b - a);
  const maxSection = sortedSections[0]?.[1] || 1;

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0f0f1a]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-lg sm:text-xl font-light tracking-wide">
              Saaz Farmhouse <span className="text-white/30">Analytics</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-white/5 rounded-lg overflow-hidden text-[11px] tracking-wider uppercase">
              {[1, 7, 14, 30].map((d) => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`px-3 py-1.5 transition-colors ${
                    days === d ? "bg-white/10 text-white" : "text-white/30 hover:text-white/50"
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
            <button
              onClick={load}
              className="text-[11px] tracking-wider uppercase bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg text-white/40 hover:text-white/70 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {loading && !data ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
          </div>
        ) : !data || data.total_events === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-white/20">
            <p className="text-lg">No analytics data yet</p>
            <p className="text-sm mt-2">Events will appear here once visitors interact with the site</p>
          </div>
        ) : (
          <>
            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-white/5 rounded-lg w-fit overflow-hidden text-[12px] tracking-wider uppercase">
              <button
                onClick={() => setTab("overview")}
                className={`px-4 py-2 transition-colors ${tab === "overview" ? "bg-white/10 text-white" : "text-white/30"}`}
              >
                Overview
              </button>
              <button
                onClick={() => setTab("events")}
                className={`px-4 py-2 transition-colors ${tab === "events" ? "bg-white/10 text-white" : "text-white/30"}`}
              >
                Live Events
              </button>
            </div>

            {tab === "overview" ? (
              <div className="space-y-6 sm:space-y-8">
                {/* Top stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <StatCard label="Total Events" value={data.total_events} sub={data.period} />
                  <StatCard label="Unique Visitors" value={data.unique_visitors} />
                  <StatCard
                    label="Mobile"
                    value={`${mobilePct}%`}
                    sub={`${data.by_device.mobile} mobile · ${data.by_device.desktop} desktop`}
                  />
                  <StatCard
                    label="CTA Clicks"
                    value={data.top_ctas.reduce((s, c) => s + c.count, 0)}
                    sub={`${data.top_ctas.length} distinct CTAs`}
                  />
                </div>

                {/* Timeline */}
                <div className="bg-[#1a1a2e] border border-white/5 rounded-xl p-5 sm:p-6">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4">Daily Activity</p>
                  <TimelineChart data={data.clicks_timeline} />
                </div>

                {/* Two columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Top CTAs */}
                  <div className="bg-[#1a1a2e] border border-white/5 rounded-xl p-5 sm:p-6">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4">Top CTA Clicks</p>
                    <div className="space-y-2.5">
                      {data.top_ctas.length === 0 && (
                        <p className="text-white/20 text-sm">No CTA clicks yet</p>
                      )}
                      {data.top_ctas.slice(0, 10).map((cta, i) => (
                        <Bar
                          key={i}
                          label={cta.label}
                          value={cta.count}
                          max={data.top_ctas[0]?.count || 1}
                          color={
                            cta.label.includes("WhatsApp") ? "bg-green-500/70" :
                            cta.label.includes("Booking") ? "bg-blue-500/70" :
                            cta.label.includes("Instagram") ? "bg-pink-500/70" :
                            cta.label.includes("Phone") ? "bg-amber-500/70" :
                            cta.label.includes("Maps") ? "bg-red-500/70" :
                            "bg-white/20"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {/* Section Views */}
                  <div className="bg-[#1a1a2e] border border-white/5 rounded-xl p-5 sm:p-6">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4">Section Views</p>
                    <div className="space-y-2.5">
                      {sortedSections.length === 0 && (
                        <p className="text-white/20 text-sm">No section views yet</p>
                      )}
                      {sortedSections.map(([section, count]) => (
                        <Bar
                          key={section}
                          label={section}
                          value={count}
                          max={maxSection}
                          color="bg-violet-500/50"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hourly */}
                <div className="bg-[#1a1a2e] border border-white/5 rounded-xl p-5 sm:p-6">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-4">Activity by Hour (UTC)</p>
                  <HourChart data={data.by_hour} />
                </div>
              </div>
            ) : (
              /* Events tab */
              <div className="bg-[#1a1a2e] border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] sm:text-[13px]">
                    <thead>
                      <tr className="border-b border-white/5 text-white/30 text-left text-[10px] tracking-[0.15em] uppercase">
                        <th className="px-4 py-3">Time</th>
                        <th className="px-4 py-3">Action</th>
                        <th className="px-4 py-3">Label</th>
                        <th className="px-4 py-3">Section</th>
                        <th className="px-4 py-3">Device</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.recent_events.map((ev, i) => {
                        const time = new Date(ev.ts).toLocaleString("en-IN", {
                          day: "2-digit", month: "short",
                          hour: "2-digit", minute: "2-digit",
                          hour12: true,
                        });
                        return (
                          <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                            <td className="px-4 py-2.5 text-white/25 font-mono whitespace-nowrap">{time}</td>
                            <td className="px-4 py-2.5">
                              <span className={`px-2 py-0.5 rounded text-[10px] tracking-wider uppercase ${
                                ev.action === "click" ? "bg-green-500/10 text-green-400" :
                                ev.action === "view" ? "bg-violet-500/10 text-violet-400" :
                                ev.action === "pageview" ? "bg-blue-500/10 text-blue-400" :
                                "bg-white/5 text-white/40"
                              }`}>
                                {ev.action}
                              </span>
                            </td>
                            <td className="px-4 py-2.5 text-white/60 max-w-[200px] truncate">{ev.label || "—"}</td>
                            <td className="px-4 py-2.5 text-white/30">{ev.section || "—"}</td>
                            <td className="px-4 py-2.5 text-white/25">{ev.device || "—"}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
