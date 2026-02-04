"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroVideo } from "@/components/hero-video";
import { EXTERNAL_LINKS } from "@/lib/data";

export function HeroSection() {
  const [panelVisible, setPanelVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPanelVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-h4h-gray-900">
      {/* Animated CSS driven by panelVisible state */}
      <style>{`
        @media (min-width: 768px) {
          .hero-left-wrapper {
            width: ${panelVisible ? "35%" : "0%"};
            min-width: ${panelVisible ? "35%" : "0%"};
            opacity: ${panelVisible ? "1" : "0"};
            overflow: hidden;
            transition: width 1s cubic-bezier(0.4, 0, 0.2, 1),
                        min-width 1s cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 0.6s ease 0.3s;
          }
          .hero-left-panel {
            clip-path: polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%);
          }
          .hero-right-wrapper {
            width: ${panelVisible ? "65%" : "100%"};
            transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>

      <div className="flex min-h-[300px] flex-col md:min-h-[500px] md:flex-row lg:min-h-[600px]">
        {/* Left panel — slides in from left after 5s on desktop, always visible on mobile */}
        <div className="hero-left-wrapper relative flex w-full flex-col items-center justify-center bg-gradient-to-br from-h4h-cyan to-h4h-cyan-dark px-8 py-16 md:py-0">
          <div className="hero-left-panel absolute inset-0 bg-gradient-to-br from-h4h-cyan to-h4h-cyan-dark" />

          <div className="relative z-10 flex flex-col items-center whitespace-nowrap">
            <Image
              src="/images/h4h-blue-no-text.png"
              alt="Habitat for Humanity Western University"
              width={120}
              height={120}
              className="h-24 w-24 rounded-2xl md:h-28 md:w-28 lg:h-32 lg:w-32"
              priority
            />
            <h1 className="mt-6 text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
              Western Habitat
              <br />
              for Humanity
            </h1>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-xl bg-h4h-navy px-8 font-semibold text-white hover:bg-h4h-navy/90"
            >
              <a
                href={EXTERNAL_LINKS.membership}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </div>
        </div>

        {/* Right panel — video (hidden on mobile) */}
        <div className="hero-right-wrapper hidden md:flex items-center justify-center bg-h4h-gray-900">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
