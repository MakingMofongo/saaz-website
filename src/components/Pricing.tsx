"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const WHATSAPP_URL =
  "https://wa.me/918639813518?text=Hi%2C%20I%27d%20like%20to%20book%20Saaz%20Farmhouse";
const BOOKING_URL = "https://www.booking.com/Share-6MZgDyU";

const PRICES = [
  {
    duration: "12 Hours",
    weekday: "10,000",
    weekend: "12,000",
    note: "Perfect for day events",
  },
  {
    duration: "24 Hours",
    weekday: "13,000",
    weekend: "15,000",
    note: "Overnight family getaway",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-warm-white py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <AnimateOnScroll className="text-center mb-16 lg:mb-20">
          <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
            Special Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-charcoal font-light mb-4">
            Pricing
          </h2>
          <p className="text-charcoal-light text-[15px] font-light max-w-md mx-auto">
            Transparent pricing with no hidden costs. Strictly for families &mdash;
            no bachelor groups, no office parties.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRICES.map((plan) => (
            <AnimateOnScroll
              key={plan.duration}
              className={`relative p-8 lg:p-10 border transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-olive bg-olive/[0.03]"
                  : "border-cream-dark bg-warm-white"
              }`}
              animation="animate-fade-up"
            >
              {plan.popular && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-olive text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl text-charcoal mb-1">
                {plan.duration}
              </h3>
              <p className="text-[12px] text-warm-gray font-light mb-8">
                {plan.note}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-baseline border-b border-cream-dark pb-3">
                  <span className="text-[13px] tracking-[0.1em] uppercase text-charcoal-light">
                    Weekdays
                  </span>
                  <span className="font-display text-2xl text-charcoal">
                    ₹{plan.weekday}
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[13px] tracking-[0.1em] uppercase text-charcoal-light">
                    Weekends
                  </span>
                  <span className="font-display text-2xl text-charcoal">
                    ₹{plan.weekend}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase py-3.5 transition-all duration-300 ${
                    plan.popular
                      ? "bg-olive text-white hover:bg-olive-dark"
                      : "border border-charcoal text-charcoal hover:bg-olive hover:text-white hover:border-olive"
                  }`}
                >
                  Book on WhatsApp
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[13px] tracking-[0.15em] uppercase py-3.5 bg-[#003580] text-white hover:bg-[#00264d] transition-all duration-300"
                >
                  <img src="/icons/booking.svg" alt="" className="w-3.5 h-3.5 brightness-0 invert" />
                  Book on Booking.com
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <p className="text-warm-gray text-[13px] font-light">
            Gas cylinder usage: ₹500 additional
          </p>
          <p className="text-charcoal-light/60 text-[12px] font-light mt-2">
            No alcohol &middot; No smoking/hookah &middot; Families only &mdash; no exceptions
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
