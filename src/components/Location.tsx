"use client";

import { MapPin, Clock, Car } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Location() {
  return (
    <section id="location" className="bg-cream py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <AnimateOnScroll
            className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden bg-cream-dark"
            animation="animate-scale-in"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.5!2d78.288399!3d17.3053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE4JzE5LjEiTiA3OMKwMTcnMTguMiJF!5e0!3m2!1sen!2sin!4v1709000000000"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saaz Farmhouse location"
            />
          </AnimateOnScroll>

          {/* Info */}
          <AnimateOnScroll className="flex flex-col justify-center" delay="delay-200">
            <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
              Getting Here
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light leading-tight mb-8">
              Just 40 Minutes
              <br />
              <span className="italic">from Hyderabad</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.2}
                  className="text-olive mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-charcoal text-[15px] font-medium mb-0.5">
                    Address
                  </p>
                  <p className="text-charcoal-light text-[14px] font-light leading-relaxed">
                    Opp PVR Cricket Arena, Murtuzaguda,
                    <br />
                    Moinabad, Telangana
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  size={20}
                  strokeWidth={1.2}
                  className="text-olive mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-charcoal text-[15px] font-medium mb-0.5">
                    Travel Time
                  </p>
                  <p className="text-charcoal-light text-[14px] font-light">
                    ~40 minutes from HITEC City / Gachibowli
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Car
                  size={20}
                  strokeWidth={1.2}
                  className="text-olive mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-charcoal text-[15px] font-medium mb-0.5">
                    Easy Access
                  </p>
                  <p className="text-charcoal-light text-[14px] font-light">
                    Well-connected via ORR &middot; Free parking on premises
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Xc1e4s5MC7M2qpdn7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-olive hover:text-olive-dark transition-colors border-b border-olive/30 pb-1 self-start"
            >
              Open in Google Maps
              <span>&rarr;</span>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
