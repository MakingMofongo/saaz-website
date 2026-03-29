"use client";

import { Phone, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/918639813518?text=Hi%2C%20I%27d%20like%20to%20book%20Saaz%20Farmhouse";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 text-center">
          <p className="text-gold text-[12px] tracking-[0.3em] uppercase mb-4">
            Ready to Escape?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-light mb-6">
            Book Your Family Retreat <span className="italic">Today</span>
          </h2>
          <p className="text-white/50 text-[15px] font-light max-w-lg mx-auto mb-8">
            Message us on WhatsApp to check availability, ask questions, or
            reserve your dates. We typically respond within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-olive hover:bg-olive-dark text-white text-[13px] tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="https://www.booking.com/Share-6MZgDyU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#003580] hover:bg-[#00264d] text-white text-[13px] tracking-[0.15em] uppercase px-10 py-4 transition-all duration-300"
            >
              <img src="/icons/booking.svg" alt="" className="w-5 h-5 brightness-0 invert" />
              Book on Booking.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          <div>
            <h3 className="font-display text-2xl font-light mb-3">
              Saaz <span className="font-medium">Farmhouse</span>
            </h3>
            <p className="text-white/40 text-[13px] font-light leading-relaxed">
              A private family retreat in Moinabad, offering modern comforts
              amidst nature — just 40 minutes from Hyderabad.
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href="tel:+918639813518"
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                +91 86398 13518
                <span className="text-[11px] text-white/40 tracking-wider uppercase ml-1">
                  (WhatsApp)
                </span>
              </a>
              <a
                href="tel:+919985346729"
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                +91 99853 46729
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
              Find Us On
            </p>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/saaz_farmhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
                @saaz_farmhouse
              </a>
              <a
                href="https://www.booking.com/Share-6MZgDyU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white text-[14px] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                  <path d="M2.27 0C1.02 0 0 1.02 0 2.27v19.46C0 22.98 1.02 24 2.27 24h19.46C22.98 24 24 22.98 24 21.73V2.27C24 1.02 22.98 0 21.73 0H2.27zm8.05 5.09h3.49c2.58 0 4.33 1.2 4.33 3.49 0 1.44-.78 2.54-2.04 3.1v.06c1.56.42 2.58 1.68 2.58 3.34 0 2.64-2.1 3.94-4.75 3.94h-3.6V5.09zm2.52 5.69h.96c1.2 0 1.86-.54 1.86-1.56 0-.96-.66-1.5-1.86-1.5h-.96v3.06zm0 5.93h1.08c1.38 0 2.1-.6 2.1-1.68s-.72-1.62-2.1-1.62h-1.08v3.3z" />
                </svg>
                Booking.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[12px] font-light">
            &copy; {new Date().getFullYear()} Saaz Farmhouse. Strictly families only &mdash; no
            bachelors, no alcohol, no smoking.
          </p>
          <p className="text-white/20 text-[11px] font-light">
            Moinabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
}
