"use client";

import { useEffect } from "react";
import { trackClick } from "@/lib/analytics";

export default function ClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (!el) return;

      const href = el.getAttribute("href") || "";
      const text = el.textContent?.trim().slice(0, 60) || "";
      const section =
        el.closest("section")?.id ||
        el.closest("footer")?.tagName.toLowerCase() ||
        el.closest("nav")?.tagName.toLowerCase() ||
        "unknown";

      if (href.includes("wa.me")) {
        trackClick("WhatsApp CTA", section, href);
      } else if (href.includes("booking.com")) {
        trackClick("Booking.com CTA", section, href);
      } else if (href.includes("instagram.com")) {
        trackClick("Instagram", section, href);
      } else if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) {
        trackClick("Google Maps", section, href);
      } else if (href.startsWith("tel:")) {
        trackClick("Phone Call", section, href);
      } else if (href.startsWith("#")) {
        trackClick(`Nav: ${text}`, "nav", href);
      } else if (el.tagName === "BUTTON") {
        if (text.toLowerCase().includes("play")) {
          trackClick("Play Video", section);
        } else if (text.toLowerCase().includes("photo") || text.toLowerCase().includes("view")) {
          trackClick("Gallery Open", section);
        } else if (text.toLowerCase().includes("menu")) {
          trackClick("Mobile Menu", "nav");
        }
      }
    };

    document.addEventListener("click", handler, { capture: true });
    return () => document.removeEventListener("click", handler, { capture: true });
  }, []);

  return null;
}
