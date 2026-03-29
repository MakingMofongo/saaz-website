"use client";

import { ShieldCheck, Ban, Users, Wine, Cigarette, AlertTriangle } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const RULES = [
  {
    icon: Users,
    title: "Families Only",
    desc: "Exclusively for families. No bachelor groups, no office parties, no corporate events.",
    accent: true,
  },
  {
    icon: Ban,
    title: "No Alcohol",
    desc: "Drinks, beer, and all forms of alcohol are strictly prohibited on the premises.",
  },
  {
    icon: Cigarette,
    title: "No Smoking / Hookah",
    desc: "Cigarettes, hookah, vaping, and any form of smoking are not permitted.",
  },
  {
    icon: AlertTriangle,
    title: "No Loud Parties After 10 PM",
    desc: "Music must be turned down by 10 PM. We respect the neighbourhood.",
  },
];

export default function HouseRules() {
  return (
    <section className="bg-charcoal text-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-12">
        <AnimateOnScroll className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <ShieldCheck size={18} strokeWidth={1.5} className="text-gold" />
            <p className="text-gold text-[12px] tracking-[0.3em] uppercase">
              House Rules
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-light mb-4">
            A Safe Space for <span className="italic">Families</span>
          </h2>
          <p className="text-white/40 text-[14px] sm:text-[15px] font-light max-w-lg mx-auto">
            We maintain a strict family-friendly environment. Please review our
            policies before booking.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {RULES.map((rule, i) => (
            <AnimateOnScroll
              key={rule.title}
              className={`p-6 sm:p-7 border ${
                rule.accent
                  ? "border-gold/30 bg-gold/[0.05]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
              animation="animate-fade-up"
              delay={`delay-${(i + 1) * 100}`}
            >
              <rule.icon
                size={22}
                strokeWidth={1.5}
                className={rule.accent ? "text-gold mb-3" : "text-white/50 mb-3"}
              />
              <h3 className="text-[15px] sm:text-base font-medium tracking-wide mb-1.5">
                {rule.title}
              </h3>
              <p className="text-white/40 text-[13px] font-light leading-relaxed">
                {rule.desc}
              </p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-8 sm:mt-10 text-center" delay="delay-500">
          <p className="text-white/25 text-[12px] sm:text-[13px] font-light tracking-wide">
            Bookings that violate these rules will be cancelled without refund.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
