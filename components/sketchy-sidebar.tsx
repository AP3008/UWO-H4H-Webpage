"use client";

import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/lib/data";

interface SketchySidebarProps {
  textAnimate: boolean;
  buttonVisible: boolean;
  isMobile: boolean;
}

function StarDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.5 L13.8 8.2 L19.8 9.1 L15.2 13.2 L16.7 19.5 L12 16.2 L7.3 19.5 L8.8 13.2 L4.2 9.1 L10.2 8.2 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SketchyUnderline({
  className,
  animate,
  isMobile,
}: {
  className?: string;
  animate: boolean;
  isMobile: boolean;
}) {
  const pathLength = 210;
  return (
    <svg
      className={`w-44 h-3 ${className ?? ""}`}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 2 8 Q 30 3 60 7 Q 90 11 120 5 Q 150 2 180 8 Q 190 10 198 6"
        stroke="#00AFD7"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        style={
          isMobile
            ? {}
            : {
                strokeDasharray: pathLength,
                strokeDashoffset: animate ? 0 : pathLength,
                transition: animate
                  ? "stroke-dashoffset 1.2s ease-out"
                  : "none",
              }
        }
      />
    </svg>
  );
}

function SquiggleDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={`w-8 h-4 ${className ?? ""}`}
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 2 8 Q 6 2 10 8 Q 14 14 18 8 Q 22 2 26 8 Q 28 11 30 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SketchyBorder() {
  return (
    <svg
      className="absolute top-0 -right-6 h-full w-12 z-20 hidden md:block pointer-events-none"
      viewBox="0 0 48 800"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 48 0 L 22 0 Q 18 20 24 40 Q 28 60 20 80 Q 16 100 22 120 Q 26 140 18 160 Q 14 180 23 200 Q 28 220 19 240 Q 15 260 24 280 Q 27 300 17 320 Q 13 340 22 360 Q 26 380 18 400 Q 14 420 25 440 Q 29 460 20 480 Q 16 500 23 520 Q 27 540 17 560 Q 13 580 24 600 Q 28 620 19 640 Q 15 660 22 680 Q 26 700 18 720 Q 14 740 23 760 Q 27 780 20 800 L 48 800 Z"
        fill="#0F172A"
      />
    </svg>
  );
}

export function SketchySidebar({
  textAnimate,
  buttonVisible,
  isMobile,
}: SketchySidebarProps) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
      {/* Decorative stars */}
      <StarDoodle className="absolute top-12 right-10 w-5 h-5 text-h4h-cyan opacity-50" />
      <StarDoodle className="absolute bottom-16 left-6 w-4 h-4 text-h4h-navy opacity-30" />
      <StarDoodle className="absolute top-1/4 left-4 w-6 h-6 text-h4h-cyan-dark opacity-40" />

      {/* Heading */}
      <h1
        className="text-center text-xl font-bold text-h4h-navy md:text-2xl lg:text-3xl"
        style={
          isMobile
            ? {}
            : {
                clipPath: textAnimate
                  ? "inset(0 0% 0 0)"
                  : "inset(0 100% 0 0)",
                animation: textAnimate
                  ? "write-in 1.5s ease-out forwards"
                  : "none",
              }
        }
      >
        Western Habitat
        <br />
        for Humanity
      </h1>

      {/* Sketchy underline */}
      <SketchyUnderline
        className="mt-2"
        animate={textAnimate}
        isMobile={isMobile}
      />

      {/* Tagline */}
      <p
        className="mt-4 text-center text-base text-h4h-gray-600 md:text-lg"
        style={
          isMobile
            ? {}
            : {
                opacity: 0,
                animation: textAnimate
                  ? "fade-in 0.8s ease forwards 0.5s"
                  : "none",
              }
        }
      >
        Building Homes. Building Hope.
      </p>

      {/* Join button */}
      <Button
        asChild
        size="lg"
        className="mt-6 rounded-xl bg-h4h-navy px-8 font-semibold text-white hover:bg-h4h-navy/90"
        style={
          isMobile
            ? {}
            : {
                opacity: 0,
                animation: buttonVisible
                  ? "fade-in 0.6s ease forwards"
                  : "none",
              }
        }
      >
        <a
          href={EXTERNAL_LINKS.membership}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </a>
      </Button>

      {/* Small squiggle */}
      <SquiggleDoodle className="mx-auto mt-3 text-h4h-navy opacity-40" />

      {/* Sketchy right border (desktop only) */}
      <SketchyBorder />
    </div>
  );
}
