import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Saaz Farmhouse",
  description:
    "Privacy policy for Saaz Farmhouse — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-charcoal text-white">
        <div className="max-w-[900px] mx-auto px-6 py-10 sm:py-16">
          <Link
            href="/"
            className="text-white/50 hover:text-white text-[13px] tracking-[0.15em] uppercase transition-colors"
          >
            &larr; Back to Saaz Farmhouse
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light mt-6">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-[13px] font-light mt-3">
            Last updated: March 31, 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[900px] mx-auto px-6 py-12 sm:py-16 lg:py-20">
        <div className="space-y-10 text-[15px] leading-relaxed text-charcoal-light">
          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Introduction
            </h2>
            <p>
              Saaz Farmhouse (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is a private family farmhouse rental located in
              Moinabad, Hyderabad, Telangana. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              interact with us through our website, WhatsApp, or other
              communication channels.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following personal information when you make a
              booking inquiry or communicate with us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Booking dates and preferences</li>
              <li>Messages sent via WhatsApp or other channels</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              Your personal information is used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and managing your booking inquiries</li>
              <li>
                Communicating with you about your reservation via WhatsApp,
                phone, or email
              </li>
              <li>Sending booking confirmations and relevant updates</li>
              <li>Improving our services and guest experience</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Third-Party Services
            </h2>
            <p className="mb-3">
              We use the following third-party services in the operation of our
              business and website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>WhatsApp / Meta:</strong> For booking communication and
                customer support
              </li>
              <li>
                <strong>Instagram / Facebook (Meta):</strong> For marketing and
                social media presence
              </li>
              <li>
                <strong>Google:</strong> For Maps integration and business
                listing
              </li>
              <li>
                <strong>Booking.com:</strong> For online reservations
              </li>
            </ul>
            <p className="mt-3">
              These services have their own privacy policies governing how they
              handle your data. We encourage you to review their policies
              directly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Data Sharing
            </h2>
            <p>
              We do <strong>not</strong> sell, trade, or rent your personal
              information to third parties. Your data is shared only with the
              third-party services listed above as necessary to fulfill your
              booking and provide our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Data Retention &amp; Deletion
            </h2>
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy. If you would like
              to request the deletion of your personal data, please contact us
              at:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Phone / WhatsApp:{" "}
                <a
                  href="tel:+918639813518"
                  className="text-olive hover:text-olive-dark underline underline-offset-2 transition-colors"
                >
                  +91 86398 13518
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:rasheed3086@gmail.com"
                  className="text-olive hover:text-olive-dark underline underline-offset-2 transition-colors"
                >
                  rasheed3086@gmail.com
                </a>
              </li>
            </ul>
            <p className="mt-3">
              We will process your deletion request within a reasonable
              timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Cookies &amp; Analytics
            </h2>
            <p>
              Our website uses basic analytics to understand visitor behavior
              (pages viewed, sections visited). We do not use third-party
              tracking cookies or advertising trackers. No personally
              identifiable information is collected through our analytics system.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-4 bg-cream/60 p-6 rounded-sm">
              <p className="font-display text-xl text-charcoal mb-3">
                Saaz Farmhouse
              </p>
              <div className="space-y-1 text-[14px]">
                <p>
                  Opp PVR Cricket Arena, Murtuzaguda, Moinabad, Telangana
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+918639813518"
                    className="text-olive hover:text-olive-dark transition-colors"
                  >
                    +91 86398 13518
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:rasheed3086@gmail.com"
                    className="text-olive hover:text-olive-dark transition-colors"
                  >
                    rasheed3086@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white/30 text-[12px] font-light py-6">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>
            &copy; {new Date().getFullYear()} Saaz Farmhouse. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-white/40 hover:text-white/70 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
