import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import PoolSection from "@/components/PoolSection";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Interiors from "@/components/Interiors";
import Pricing from "@/components/Pricing";
import HouseRules from "@/components/HouseRules";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Analytics from "@/components/Analytics";
import ClickTracker from "@/components/ClickTracker";

export default function Home() {
  return (
    <>
      <Analytics />
      <ClickTracker />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <PoolSection />
      <Amenities />
      <Gallery />
      <VideoSection />
      <Interiors />
      <Pricing />
      <HouseRules />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
