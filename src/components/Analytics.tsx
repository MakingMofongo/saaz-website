"use client";

import { useEffect } from "react";
import { trackPageView, trackView } from "@/lib/analytics";

const SECTIONS = [
  "about",
  "amenities",
  "gallery",
  "interiors",
  "pricing",
  "location",
];

export default function Analytics() {
  useEffect(() => {
    trackPageView();

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            trackView(id);
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
