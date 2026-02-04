"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // Autoplay may be blocked; muted videos should be fine in most browsers
    });
  }, []);

  return (
    <video
      ref={videoRef}
      src="/h4h-hero-vid.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
    />
  );
}
