"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative bg-charcoal">
      <AnimateOnScroll className="relative aspect-[9/16] sm:aspect-[4/3] lg:aspect-[16/7] min-h-[400px] max-h-[85vh] overflow-hidden">
        {!playing && (
          <>
            <Image
              src="/photos/garden_night_lawn2.jpeg"
              alt="Garden at night"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <button
                onClick={handlePlay}
                className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all duration-300 group"
                aria-label="Play video"
              >
                <Play
                  size={32}
                  className="text-white ml-1 group-hover:scale-110 transition-transform"
                  fill="white"
                  strokeWidth={0}
                />
              </button>
              <p className="text-white/70 text-[13px] tracking-[0.2em] uppercase mt-6 font-light">
                Take a Virtual Tour
              </p>
            </div>
          </>
        )}
        <video
          ref={videoRef}
          src="/videos/video2.mp4"
          className={`absolute inset-0 w-full h-full object-cover ${
            playing ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
          controls={playing}
          playsInline
          preload="none"
        />
      </AnimateOnScroll>
    </section>
  );
}
