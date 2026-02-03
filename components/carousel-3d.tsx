"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CAROUSEL_IMAGES } from "@/lib/data";

export function Carousel3D() {
  const images = CAROUSEL_IMAGES;
  const total = images.length;

  // Floating position for smooth continuous scrolling
  const [position, setPosition] = useState(0);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartPosRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollSpeed = 0.0004; // Units per ms (~1 image every 7s)

  // Animation loop: continuous scroll + momentum
  useEffect(() => {
    let lastTime = performance.now();
    let animId: number;

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      if (!isDraggingRef.current) {
        // Apply momentum decay
        if (Math.abs(velocityRef.current) > 0.0001) {
          velocityRef.current *= 0.96;
          positionRef.current += velocityRef.current * dt;
        } else {
          // Continuous auto-scroll when no momentum
          velocityRef.current = 0;
          positionRef.current += autoScrollSpeed * dt;
        }

        // Keep position in [0, total) range
        positionRef.current = ((positionRef.current % total) + total) % total;
        setPosition(positionRef.current);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [total]);

  // Manual navigation
  const next = useCallback(() => {
    velocityRef.current = 0.003;
  }, []);

  const prev = useCallback(() => {
    velocityRef.current = -0.003;
  }, []);

  // Mouse/touch drag handlers
  const handleDragStart = useCallback(
    (clientX: number) => {
      isDraggingRef.current = true;
      dragStartXRef.current = clientX;
      dragStartPosRef.current = positionRef.current;
      lastDragXRef.current = clientX;
      lastDragTimeRef.current = performance.now();
      velocityRef.current = 0;
    },
    []
  );

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDraggingRef.current) return;
      const containerWidth = containerRef.current?.offsetWidth ?? 800;
      const dx = clientX - dragStartXRef.current;
      // Map drag pixels to position units
      const dragSensitivity = total / (containerWidth * 1.5);
      const newPos = dragStartPosRef.current - dx * dragSensitivity;
      positionRef.current = ((newPos % total) + total) % total;
      setPosition(positionRef.current);

      // Track velocity from recent movement
      const now = performance.now();
      const timeDelta = now - lastDragTimeRef.current;
      if (timeDelta > 0) {
        const moveDelta = clientX - lastDragXRef.current;
        velocityRef.current = (-moveDelta * dragSensitivity) / timeDelta;
      }
      lastDragXRef.current = clientX;
      lastDragTimeRef.current = now;
    },
    [total]
  );

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
    // Velocity is already set from the last drag move — momentum will carry
  }, []);

  // Mouse events
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    [handleDragStart]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX);
    const onMouseUp = () => handleDragEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [handleDragMove, handleDragEnd]);

  // Touch events
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleDragMove(e.touches[0].clientX);
    },
    [handleDragMove]
  );

  const onTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  return (
    <div className="relative mx-auto w-full max-w-5xl px-4">
      {/* 3D stage */}
      <div
        ref={containerRef}
        className="relative mx-auto h-[280px] sm:h-[340px] md:h-[400px] select-none"
        style={{ perspective: "1200px" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => {
          // Calculate offset from the floating position
          let offset = i - position;
          const half = total / 2;
          if (offset > half) offset -= total;
          if (offset < -half) offset += total;

          const absOffset = Math.abs(offset);

          // Smooth interpolation for position, rotation, scale
          const translateX = offset * 220;
          const translateZ = absOffset < 0.5 ? 80 * (1 - absOffset * 2) : -(absOffset * 120);
          const rotateY = offset * -25;
          const scale = Math.max(0.65, 1.05 - absOffset * 0.15);
          const opacity = absOffset > 3 ? 0 : Math.max(0.3, 1 - absOffset * 0.25);
          const zIndex = Math.round(total - absOffset);

          return (
            <div
              key={img.id}
              className="absolute left-1/2 top-1/2 w-[260px] sm:w-[320px] md:w-[380px]"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                transformStyle: "preserve-3d",
                pointerEvents: "none",
              }}
            >
              <div
                className={`overflow-hidden rounded-xl shadow-lg ${
                  absOffset < 0.5 ? "shadow-2xl ring-2 ring-h4h-cyan/30" : ""
                }`}
              >
                <ImagePlaceholder
                  label={img.alt}
                  aspectRatio="video"
                  className="rounded-xl"
                />
              </div>
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
        {images.map((_, i) => {
          // Highlight dot closest to current position
          let diff = Math.abs(i - position);
          if (diff > total / 2) diff = total - diff;
          const isActive = diff < 0.5;

          return (
            <button
              key={i}
              onClick={() => {
                velocityRef.current = 0;
                positionRef.current = i;
                setPosition(i);
              }}
              className={`h-2 rounded-full transition-all ${
                isActive
                  ? "w-6 bg-h4h-cyan"
                  : "w-2 bg-h4h-gray-200 hover:bg-h4h-gray-600"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
