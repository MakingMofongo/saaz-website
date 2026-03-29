"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="bg-warm-white py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <AnimateOnScroll className="mb-10 sm:mb-16 lg:mb-24">
          <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
            The Estate
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-charcoal font-light leading-tight">
            Your Private Retreat,
            <br />
            <span className="italic">Away from the City</span>
          </h2>
        </AnimateOnScroll>

        {/* Asymmetric grid layout like the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large image - left */}
          <AnimateOnScroll
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden"
            animation="animate-scale-in"
          >
            <Image
              src="/photos/exterior_sunset.jpeg"
              alt="Saaz Farmhouse at sunset with palm trees"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </AnimateOnScroll>

          {/* Right column - text + smaller image */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <AnimateOnScroll
              className="bg-cream p-8 lg:p-10 flex flex-col justify-center"
              delay="delay-200"
            >
              <p className="text-charcoal-light text-[15px] leading-relaxed font-light">
                Nestled on 2000 sq yards of scenic gardens and tree cover in
                Moinabad, Saaz Farmhouse is a modern 3BHK bungalow designed for
                families seeking a private escape. With spacious halls, a brand-new
                swimming pool, outdoor cinema, and endless greenery — it&apos;s where
                your family stories unfold.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-display text-3xl lg:text-4xl text-olive font-light">
                    3
                  </span>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Bedrooms
                  </p>
                </div>
                <div>
                  <span className="font-display text-3xl lg:text-4xl text-olive font-light">
                    20
                  </span>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Guests
                  </p>
                </div>
                <div>
                  <span className="font-display text-3xl lg:text-4xl text-olive font-light">
                    2000
                  </span>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    Sq Yards
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              className="relative flex-1 min-h-[250px] overflow-hidden"
              animation="animate-scale-in"
              delay="delay-300"
            >
              <Image
                src="/photos/exterior_front_closeup.jpeg"
                alt="Farmhouse front view at dusk"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
