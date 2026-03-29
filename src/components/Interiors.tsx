"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const ROOMS = [
  {
    src: "/photos/ground_floor_hall_view1.jpeg",
    title: "Grand Hall",
    desc: "Spacious ground-floor hall with marble flooring, connecting to the open kitchen — perfect for family gatherings.",
  },
  {
    src: "/photos/bedroom_master_pink.jpg",
    title: "Master Bedroom",
    desc: "Carved wood headboard, plush bedding, and air conditioning create a serene retreat for restful nights.",
  },
  {
    src: "/photos/main_entrance.jpeg",
    title: "Welcome Foyer",
    desc: "Step through the solid teak door into a bright, airy space with hand-woven rugs and natural light.",
  },
];

export default function Interiors() {
  return (
    <section id="interiors" className="bg-cream py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimateOnScroll className="mb-10 sm:mb-16 lg:mb-24">
          <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
            Interiors
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-charcoal font-light leading-tight">
            The Rooms &
            <br />
            <span className="italic">Living Spaces</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-14 sm:space-y-20 lg:space-y-32">
          {ROOMS.map((room, i) => (
            <div
              key={room.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <AnimateOnScroll
                className={`relative aspect-[4/3] overflow-hidden ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
                animation="animate-scale-in"
              >
                <Image
                  src={room.src}
                  alt={room.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </AnimateOnScroll>

              <AnimateOnScroll
                className={`flex flex-col justify-center ${
                  i % 2 === 1 ? "lg:order-1 lg:text-right lg:items-end" : ""
                }`}
                delay="delay-200"
              >
                <span className="text-olive text-[12px] tracking-[0.3em] uppercase mb-2">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl lg:text-5xl text-charcoal font-light mb-4">
                  {room.title}
                </h3>
                <p className="text-charcoal-light text-[15px] leading-relaxed font-light max-w-md">
                  {room.desc}
                </p>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
