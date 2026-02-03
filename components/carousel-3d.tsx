"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CAROUSEL_IMAGES } from "@/lib/data";

export function Carousel3D() {
  const images = CAROUSEL_IMAGES;
  const total = images.length;
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total]
  );

  // Auto-rotate every 4s
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative mx-auto w-full max-w-5xl px-4">
      {/* 3D stage */}
      <div
        className="relative mx-auto h-[280px] sm:h-[340px] md:h-[400px]"
        style={{ perspective: "1200px" }}
      >
        {images.map((img, i) => {
          const offset = i - active;
          // Wrap around so items stay in [-half, +half] range
          const half = Math.floor(total / 2);
          let adjusted = offset;
          if (adjusted > half) adjusted -= total;
          if (adjusted < -half) adjusted += total;

          const isCenter = adjusted === 0;
          const absOffset = Math.abs(adjusted);

          // Position, rotation, scale based on distance from center
          const translateX = adjusted * 220;
          const translateZ = isCenter ? 80 : -(absOffset * 120);
          const rotateY = adjusted * -25;
          const scale = isCenter ? 1.05 : Math.max(0.65, 1 - absOffset * 0.15);
          const opacity = absOffset > 3 ? 0 : Math.max(0.3, 1 - absOffset * 0.25);
          const zIndex = total - absOffset;

          return (
            <div
              key={img.id}
              className="absolute left-1/2 top-1/2 w-[260px] sm:w-[320px] md:w-[380px] cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transformStyle: "preserve-3d",
              }}
              onClick={() => setActive(i)}
            >
              <div
                className={`overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 ${
                  isCenter ? "shadow-2xl ring-2 ring-h4h-cyan/30" : ""
                }`}
              >
                <ImagePlaceholder
                  label={img.alt}
                  aspectRatio="video"
                  className="rounded-xl"
                />
              </div>
              {isCenter && img.caption && (
                <p className="mt-3 text-center text-sm font-medium text-h4h-gray-600">
                  {img.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white sm:left-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 text-h4h-navy" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white sm:right-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 text-h4h-navy" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? "w-6 bg-h4h-cyan"
                : "w-2 bg-h4h-gray-200 hover:bg-h4h-gray-600"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
