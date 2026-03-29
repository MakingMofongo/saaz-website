"use client";

import { useEffect, useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";

const NAV_LINKS = [
  { label: "The Estate", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Interiors", href: "#interiors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

const WHATSAPP_URL =
  "https://wa.me/918639813518?text=Hi%2C%20I%27d%20like%20to%20book%20Saaz%20Farmhouse";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
        {/* Policy strip — always visible once scrolled */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            scrolled ? "max-h-10" : "max-h-0"
          }`}
        >
          <div className="bg-[#1a1a1a] border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2 sm:gap-3">
              <ShieldAlert size={13} strokeWidth={2} className="text-red-400 shrink-0" />
              <p className="text-white/90 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-medium text-center">
                <span className="text-red-400">Families Only</span>
                <span className="mx-1.5 sm:mx-2 text-white/20">|</span>
                No Bachelors / Office Groups
                <span className="mx-1.5 sm:mx-2 text-white/20">|</span>
                No Alcohol
                <span className="mx-1.5 sm:mx-2 text-white/20">|</span>
                <span className="hidden sm:inline">No Smoking / Hookah</span>
                <span className="sm:hidden">No Smoking</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-warm-white/95 backdrop-blur-md shadow-sm py-3"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
            <a
              href="#"
              className={`font-display text-2xl lg:text-3xl font-light tracking-wide transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Saaz <span className="font-medium">Farmhouse</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] tracking-[0.15em] uppercase font-light transition-colors duration-300 hover:opacity-70 ${
                    scrolled ? "text-charcoal" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[13px] tracking-[0.15em] uppercase font-light px-5 py-2.5 border transition-all duration-300 hover:bg-olive hover:text-white hover:border-olive ${
                  scrolled
                    ? "border-charcoal text-charcoal"
                    : "border-white/60 text-white"
                }`}
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-[320px] bg-warm-white shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-cream-dark">
            <span className="font-display text-xl text-charcoal">
              Saaz Farmhouse
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} strokeWidth={1.5} className="text-charcoal" />
            </button>
          </div>
          <div className="flex flex-col p-8 gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-charcoal-light hover:text-olive transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center text-sm tracking-[0.15em] uppercase px-6 py-3 bg-olive text-white hover:bg-olive-dark transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
          {/* Policy reminder in mobile menu */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] px-6 py-4">
            <p className="text-white/70 text-[10px] tracking-[0.15em] uppercase text-center leading-relaxed">
              <span className="text-red-400 font-medium">Strictly Families Only</span>
              <br />
              No Bachelors · No Alcohol · No Smoking · No Hookah
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
