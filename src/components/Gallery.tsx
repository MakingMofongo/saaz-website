"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const ALL_PHOTOS = [
  { src: "/photos/exterior_twilight.jpeg", alt: "Farmhouse exterior at twilight" },
  { src: "/photos/pool_4.jpeg", alt: "Swimming pool with farmhouse" },
  { src: "/photos/garden_night_wide2.jpeg", alt: "Sprawling garden at night" },
  { src: "/photos/event_fairy_lights_exterior.jpeg", alt: "Fairy lights celebration" },
  { src: "/photos/pool_3.jpeg", alt: "Pool during the day" },
  { src: "/photos/palm_tree_lights.jpeg", alt: "Palm trees with spiral lighting" },
  { src: "/photos/outdoor_projector_screen.jpeg", alt: "Outdoor cinema on the lawn" },
  { src: "/photos/pool_2.jpeg", alt: "Pool at night with underwater lights" },
  { src: "/photos/balcony_scenic_view.jpeg", alt: "Scenic countryside from balcony" },
  { src: "/photos/kids_playground.jpeg", alt: "Kids playground" },
  { src: "/photos/driveway_night.jpeg", alt: "Illuminated driveway at night" },
  { src: "/photos/exterior_sunset.jpeg", alt: "Farmhouse at sunset" },
  { src: "/photos/garden_night_lawn2.jpeg", alt: "Garden lawn at night" },
  { src: "/photos/ground_floor_hall_view1.jpeg", alt: "Grand hall" },
  { src: "/photos/bedroom_master_pink.jpg", alt: "Master bedroom" },
  { src: "/photos/main_entrance.jpeg", alt: "Main entrance" },
  { src: "/photos/outdoor_bbq_night1.jpeg", alt: "Poolside BBQ area" },
  { src: "/photos/exterior_front_closeup.jpeg", alt: "Farmhouse front view" },
  { src: "/photos/garden_night_arch.jpeg", alt: "Garden archway at night" },
  { src: "/photos/garden_night_trees.jpeg", alt: "Garden trees lit up" },
  { src: "/photos/exterior_night_front.jpeg", alt: "Farmhouse front at night" },
  { src: "/photos/exterior_night_side.jpeg", alt: "Farmhouse side at night" },
  { src: "/photos/ground_floor_hall_view2.jpeg", alt: "Ground floor hall view" },
  { src: "/photos/ground_floor_hall_view3.jpeg", alt: "Hall with kitchen view" },
  { src: "/photos/first_floor_hall_view1.jpeg", alt: "First floor hall" },
  { src: "/photos/first_floor_hall_view2.jpeg", alt: "First floor lounge" },
  { src: "/photos/bedroom_carved_wood.jpg", alt: "Bedroom with carved headboard" },
  { src: "/photos/bedroom_spacious_cooler.jpg", alt: "Spacious bedroom" },
  { src: "/photos/bedroom_kids_room.jpg", alt: "Kids room" },
  { src: "/photos/bedroom_lamp_windows.jpg", alt: "Bedroom with natural light" },
  { src: "/photos/bedroom_carpet_painting.jpg", alt: "Bedroom with carpet" },
  { src: "/photos/bedroom_doorway_view.jpg", alt: "Bedroom doorway" },
  { src: "/photos/indoor_projector.jpeg", alt: "Indoor projector setup" },
  { src: "/photos/games_room_overview.jpeg", alt: "Games room" },
  { src: "/photos/first_floor_games_room.jpeg", alt: "First floor games area" },
  { src: "/photos/table_tennis.jpeg", alt: "Table tennis" },
  { src: "/photos/carrom_board.jpeg", alt: "Carrom board" },
  { src: "/photos/dartboard.jpeg", alt: "Dartboard" },
  { src: "/photos/sony_party_speaker.jpeg", alt: "Party speaker" },
  { src: "/photos/firestick_remotes.jpeg", alt: "Smart TV setup" },
  { src: "/photos/outdoor_cooking_area.jpeg", alt: "Outdoor cooking area" },
  { src: "/photos/trampoline.jpeg", alt: "Trampoline" },
  { src: "/photos/driveway_night_playground.jpeg", alt: "Playground at night" },
  { src: "/photos/garden_night_lawn.jpeg", alt: "Night garden lawn" },
  { src: "/photos/garden_night_wide.jpeg", alt: "Wide garden view at night" },
  { src: "/photos/event_balloon_arch.jpeg", alt: "Balloon arch decoration" },
  { src: "/photos/event_nikkah_exterior.jpeg", alt: "Event decoration" },
  { src: "/photos/ground_floor_hall_view4.jpeg", alt: "Living area" },
  { src: "/photos/ground_floor_hall_view5.jpeg", alt: "Hall corner view" },
  { src: "/photos/ground_floor_hall_view6.jpeg", alt: "Hall with furnishing" },
  { src: "/photos/ground_floor_hall_view7.jpeg", alt: "Kitchen area" },
  { src: "/photos/bathroom.jpeg", alt: "Bathroom" },
  { src: "/photos/dartboard_closeup.jpeg", alt: "Dartboard closeup" },
];

const GRID_PHOTOS = ALL_PHOTOS.slice(0, 8);
const REMAINING = ALL_PHOTOS.length - GRID_PHOTOS.length;

const GRID_SPANS = [
  "col-span-2 row-span-1 lg:col-span-2 lg:row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 lg:row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

function LightboxOverlay({
  photos,
  initialIndex,
  onClose,
}: {
  photos: typeof ALL_PHOTOS;
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);
  const [loaded, setLoaded] = useState(false);

  const goNext = useCallback(() => {
    setLoaded(false);
    setCurrent((c) => (c + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setLoaded(false);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, goNext, goPrev]);

  let touchStartX = 0;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-8 py-4">
        <span className="text-white/50 text-[13px] tracking-[0.15em] uppercase font-light">
          {current + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          aria-label="Close gallery"
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Image */}
      <div
        className="absolute inset-0 flex items-center justify-center px-4 sm:px-16 py-16 sm:py-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX;
          if (Math.abs(dx) > 50) {
            if (dx < 0) goNext();
            else goPrev();
          }
        }}
      >
        <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
          <Image
            key={photos[current].src}
            src={photos[current].src}
            alt={photos[current].alt}
            fill
            className={`object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-center pb-5 sm:pb-8">
        <p className="text-white/40 text-[13px] font-light">
          {photos[current].alt}
        </p>
      </div>

      {/* Nav arrows — hidden on mobile, swipe works instead */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/40 hover:text-white transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/40 hover:text-white transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Thumbnail strip */}
      <div
        className="absolute bottom-10 sm:bottom-16 left-0 right-0 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-1.5 justify-center px-4 overflow-x-auto no-scrollbar">
          {photos.map((p, i) => (
            <button
              key={p.src}
              onClick={() => {
                setLoaded(false);
                setCurrent(i);
              }}
              className={`relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-white opacity-100 scale-105"
                  : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`View ${p.alt}`}
            >
              <Image
                src={p.src}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="bg-warm-white py-16 sm:py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimateOnScroll className="mb-10 sm:mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-olive text-[12px] tracking-[0.3em] uppercase mb-3">
                Gallery
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-charcoal font-light">
                Capture the <span className="italic">Essence</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/saaz_farmhouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.15em] uppercase text-olive hover:text-olive-dark transition-colors flex items-center gap-2"
            >
              Follow on Instagram
              <span className="text-lg">&rarr;</span>
            </a>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[240px] gap-2 sm:gap-3">
            {GRID_PHOTOS.map((photo, i) => (
              <AnimateOnScroll
                key={photo.src}
                className={`relative overflow-hidden group cursor-pointer ${GRID_SPANS[i]}`}
                animation="animate-scale-in"
                delay={`delay-${Math.min(i * 100, 700)}`}
              >
                <button
                  onClick={() => setLightbox(i)}
                  className="absolute inset-0 w-full h-full"
                  aria-label={`View ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </button>
              </AnimateOnScroll>
            ))}

            {/* "+N More" tile */}
            <AnimateOnScroll
              className="relative overflow-hidden group cursor-pointer col-span-2 lg:col-span-2"
              animation="animate-scale-in"
              delay="delay-500"
            >
              <button
                onClick={() => setLightbox(GRID_PHOTOS.length)}
                className="absolute inset-0 w-full h-full"
                aria-label={`View all ${ALL_PHOTOS.length} photos`}
              >
                <Image
                  src={ALL_PHOTOS[GRID_PHOTOS.length].src}
                  alt="More photos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center gap-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
                    <Plus size={24} strokeWidth={1.5} className="text-white" />
                  </div>
                  <span className="text-white text-[13px] sm:text-[14px] tracking-[0.15em] uppercase font-light">
                    +{REMAINING} Photos
                  </span>
                </div>
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <LightboxOverlay
          photos={ALL_PHOTOS}
          initialIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
