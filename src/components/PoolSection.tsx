"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function PoolSection() {
  return (
    <section className="relative bg-charcoal text-white py-16 sm:py-24 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <AnimateOnScroll animation="animate-slide-left">
            <p className="text-olive-light text-[12px] tracking-[0.3em] uppercase mb-3">
              Private Pool
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-light leading-tight mb-6">
              Dive Into
              <br />
              <span className="italic">Tranquility</span>
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed font-light max-w-md">
              Our brand-new 36×16 ft swimming pool, nestled in the private
              backyard surrounded by trees, is the heart of the estate. At 5.5
              feet deep with underwater lighting, it transforms from a daytime
              splash zone to a mesmerizing night-time oasis.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <span className="font-display text-2xl text-gold">36×16</span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mt-1">
                  Feet
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-gold">5.5 ft</span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mt-1">
                  Depth
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-gold">BBQ</span>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mt-1">
                  Poolside
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Images stacked */}
          <div className="grid grid-cols-2 gap-4">
            <AnimateOnScroll
              className="relative aspect-[3/4] overflow-hidden col-span-2"
              animation="animate-scale-in"
            >
              <Image
                src="/photos/pool_3.jpeg"
                alt="Swimming pool during the day"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              className="relative aspect-square overflow-hidden"
              animation="animate-scale-in"
              delay="delay-200"
            >
              <Image
                src="/photos/pool_2.jpeg"
                alt="Pool at night with underwater lights"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              className="relative aspect-square overflow-hidden"
              animation="animate-scale-in"
              delay="delay-300"
            >
              <Image
                src="/photos/outdoor_bbq_night1.jpeg"
                alt="Poolside BBQ area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 22vw"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
