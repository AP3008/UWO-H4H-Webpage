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
                  ? "stroke-dashoffset 0.8s ease-out 0.7s"
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

// Ripped paper right edge for sidebar
function RippedPaperEdge() {
  return (
    <svg
      className="absolute top-0 -right-4 h-full w-6 z-20 hidden md:block pointer-events-none"
      viewBox="0 0 24 800"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main torn edge - irregular jagged vertical pattern */}
      <path
        d="M0 0 L4 0 L6 15 L3 25 L7 40 L4 52 L8 68 L5 85 L9 95 L6 110 L10 125 L5 140 L8 155 L4 172 L9 190 L6 205 L11 220 L7 238 L10 255 L5 270 L8 288 L12 305 L7 320 L9 338 L5 355 L10 372 L6 390 L11 408 L8 425 L13 440 L9 458 L12 475 L7 492 L10 510 L14 528 L9 545 L11 562 L6 580 L10 598 L13 615 L8 632 L11 650 L7 668 L12 685 L9 702 L14 720 L10 738 L13 755 L8 772 L11 790 L15 808 L10 825 L12 842 L7 860 L11 878 L14 895 L9 912 L12 930 L8 948 L13 965 L10 982 L15 1000 L0 1000 Z"
        fill="white"
        transform="scale(1, 0.8)"
      />
      {/* Subtle shadow/texture line */}
      <path
        d="M4 0 L6 15 L3 25 L7 40 L4 52 L8 68 L5 85 L9 95 L6 110 L10 125 L5 140 L8 155 L4 172 L9 190 L6 205 L11 220 L7 238 L10 255 L5 270 L8 288 L12 305 L7 320 L9 338 L5 355 L10 372 L6 390 L11 408 L8 425 L13 440 L9 458 L12 475 L7 492 L10 510 L14 528 L9 545 L11 562 L6 580 L10 598 L13 615 L8 632 L11 650 L7 668 L12 685 L9 702 L14 720 L10 738 L13 755 L8 772 L11 790 L15 808"
        stroke="#E2E8F0"
        strokeWidth="0.5"
        fill="none"
        transform="scale(1, 0.8)"
      />
    </svg>
  );
}

// Animated word component - each word reveals sequentially
function AnimatedWord({
  word,
  delay,
  animate,
  isMobile,
}: {
  word: string;
  delay: number;
  animate: boolean;
  isMobile: boolean;
}) {
  return (
    <span
      className="inline-block"
      style={
        isMobile
          ? {}
          : {
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(8px)",
              transition: animate
                ? `opacity 0.4s ease ${delay}s, transform 0.4s ease ${delay}s`
                : "none",
            }
      }
    >
      {word}
    </span>
  );
}

export function SketchySidebar({
  textAnimate,
  buttonVisible,
  isMobile,
}: SketchySidebarProps) {
  // Words to animate in sequence with their delays
  const headingWords = [
    { word: "Western", delay: 0 },
    { word: "Habitat", delay: 0.15 },
    { word: "for", delay: 0.3 },
    { word: "Humanity", delay: 0.45 },
  ];

  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
      {/* Decorative stars */}
      <StarDoodle className="absolute top-12 right-10 w-5 h-5 text-h4h-cyan opacity-50" />
      <StarDoodle className="absolute bottom-16 left-6 w-4 h-4 text-h4h-navy opacity-30" />
      <StarDoodle className="absolute top-1/4 left-4 w-6 h-6 text-h4h-cyan-dark opacity-40" />

      {/* Heading - words animate in sequence */}
      <h1 className="text-center text-xl font-bold text-h4h-navy md:text-2xl lg:text-3xl">
        <AnimatedWord word="Western" delay={0} animate={textAnimate} isMobile={isMobile} />
        {" "}
        <AnimatedWord word="Habitat" delay={0.15} animate={textAnimate} isMobile={isMobile} />
        <br />
        <AnimatedWord word="for" delay={0.3} animate={textAnimate} isMobile={isMobile} />
        {" "}
        <AnimatedWord word="Humanity" delay={0.45} animate={textAnimate} isMobile={isMobile} />
      </h1>

      {/* Sketchy underline - starts after last word (0.45s + 0.4s = 0.85s) */}
      <SketchyUnderline
        className="mt-2"
        animate={textAnimate}
        isMobile={isMobile}
      />

      {/* Tagline - fades in after underline */}
      <p
        className="mt-4 text-center text-base text-h4h-gray-600 md:text-lg"
        style={
          isMobile
            ? {}
            : {
                opacity: 0,
                animation: textAnimate
                  ? "fade-in 0.8s ease forwards 1s"
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

      {/* Ripped paper right border (desktop only) */}
      <RippedPaperEdge />
    </div>
  );
}
