"use client";

const ITEMS = [
  "Private Pool",
  "3BHK Bungalow",
  "Outdoor Cinema",
  "BBQ by the Pool",
  "2000 Sq Yards",
  "Strictly Families Only",
  "No Alcohol / No Hookah",
  "40 Min from Hyderabad",
  "Kids Playground",
  "Scenic Gardens",
];

export default function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-olive overflow-hidden py-4 select-none">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-white/90 text-[13px] tracking-[0.2em] uppercase font-light mx-8 shrink-0"
          >
            {item}
            <span className="mx-8 text-white/30">&middot;</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
