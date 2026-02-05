"use client";

import { useState, useEffect } from "react";
import { HeroVideo } from "@/components/hero-video";
import { SketchySidebar } from "@/components/sketchy-sidebar";

type HeroPhase = "fullscreen" | "sidebar-sliding" | "text-writing" | "complete";

export function HeroSection() {
  const [phase, setPhase] = useState<HeroPhase>("fullscreen");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setIsMobile(mobile);

    if (mobile) {
      setPhase("complete");
      return;
    }

    const t1 = setTimeout(() => setPhase("sidebar-sliding"), 5000);
    const t2 = setTimeout(() => setPhase("text-writing"), 6000);
    const t3 = setTimeout(() => setPhase("complete"), 7500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const sidebarOpen = phase !== "fullscreen";
  const textAnimate = phase === "text-writing" || phase === "complete";
  const buttonVisible = phase === "complete";

  return (
    <section className="relative w-full overflow-hidden bg-h4h-gray-900 h-auto md:h-screen">
      {/* Dynamic CSS transitions for panel widths */}
      <style>{`
        @media (min-width: 768px) {
          .hero-sidebar-wrapper {
            width: ${sidebarOpen ? "25%" : "0%"};
            min-width: ${sidebarOpen ? "25%" : "0px"};
            opacity: ${sidebarOpen ? "1" : "0"};
            overflow: visible;
            transition: width 1s cubic-bezier(0.4, 0, 0.2, 1),
                        min-width 1s cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 0.5s ease 0.2s;
          }
          .hero-video-wrapper {
            width: ${sidebarOpen ? "75%" : "100%"};
            transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>

      <div className="flex h-full flex-col md:flex-row">
        {/* Left: Sketchy sidebar - z-10 to appear above video */}
        <div className="hero-sidebar-wrapper relative z-10 flex w-full flex-col items-center justify-center bg-h4h-cyan-light px-6 py-12 md:py-0">
          <SketchySidebar
            textAnimate={textAnimate}
            buttonVisible={buttonVisible}
            isMobile={isMobile}
          />
        </div>

        {/* Right: Video (hidden on mobile) - z-0 so torn edge overlaps */}
        <div className="hero-video-wrapper relative z-0 hidden h-full md:block">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
