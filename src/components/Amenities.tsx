"use client";

import {
  Waves,
  TreePine,
  Tv,
  ChefHat,
  Gamepad2,
  Music,
  Wifi,
  Shield,
  Wind,
  Baby,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const AMENITIES = [
  {
    icon: Waves,
    title: "Private Pool",
    desc: "36×16 ft pool with underwater lighting",
  },
  {
    icon: ChefHat,
    title: "Self-Cook Kitchen",
    desc: "Modular kitchen with outdoor cooking area",
  },
  {
    icon: Tv,
    title: "Outdoor Cinema",
    desc: "Indoor + outdoor projector theater system",
  },
  {
    icon: Gamepad2,
    title: "Games & Sports",
    desc: "Cricket, badminton, volleyball, table tennis, carrom",
  },
  {
    icon: TreePine,
    title: "Lush Gardens",
    desc: "2000 sq yards of scenic gardens and tree cover",
  },
  {
    icon: Music,
    title: "Party Speaker",
    desc: "Large Sony party speaker for celebrations",
  },
  {
    icon: Wind,
    title: "Full AC",
    desc: "AC in every room, air coolers in halls",
  },
  {
    icon: Baby,
    title: "Kids Area",
    desc: "Playground with swings, slide, trampoline",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    desc: "High-speed internet available 24/7",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "On-site watchmen and helper staff",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-cream py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimateOnScroll className="text-center mb-10 sm:mb-16 lg:mb-24">
          <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
            What Awaits You
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-charcoal font-light">
            Amenities & <span className="italic">Experiences</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-cream-dark">
          {AMENITIES.map((a, i) => (
            <AnimateOnScroll
              key={a.title}
              className="bg-cream hover:bg-warm-white p-5 sm:p-6 lg:p-8 flex flex-col items-center text-center transition-colors duration-300 group"
              animation="animate-fade-up"
              delay={`delay-${(i % 5) * 100 + 100}`}
            >
              <a.icon
                size={28}
                strokeWidth={1.2}
                className="text-olive mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-sm font-medium tracking-wide text-charcoal mb-1">
                {a.title}
              </h3>
              <p className="text-[12px] text-warm-gray font-light leading-relaxed">
                {a.desc}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
