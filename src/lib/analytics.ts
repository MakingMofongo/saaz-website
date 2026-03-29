let sessionId: string | null = null;

function getSessionId() {
  if (sessionId) return sessionId;
  if (typeof window === "undefined") return "ssr";
  sessionId = sessionStorage.getItem("_sid");
  if (!sessionId) {
    sessionId = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("_sid", sessionId);
  }
  return sessionId;
}

function getDevice() {
  if (typeof window === "undefined") return "unknown";
  return window.innerWidth < 768 ? "mobile" : "desktop";
}

export function track(
  action: string,
  data: Record<string, string> = {}
) {
  if (typeof window === "undefined") return;

  const payload = {
    action,
    ...data,
    sid: getSessionId(),
    device: getDevice(),
    path: window.location.pathname,
    screen: `${window.innerWidth}x${window.innerHeight}`,
  };

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", JSON.stringify(payload));
  } else {
    fetch("/api/analytics", {
      method: "POST",
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {});
  }
}

export function trackClick(label: string, section: string, href?: string) {
  track("click", { label, section, ...(href ? { href } : {}) });
}

export function trackView(section: string) {
  track("view", { section });
}

export function trackPageView() {
  track("pageview", { section: "page" });
}
