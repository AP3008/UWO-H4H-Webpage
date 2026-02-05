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

// Ripped paper right edge for sidebar - extends INTO the video area
function RippedPaperEdge() {
  return (
    <div
      className="absolute top-0 right-0 h-full w-8 z-20 hidden md:block pointer-events-none"
      style={{ transform: "translateX(100%)" }}
    >
      {/* Drop shadow for depth */}
      <div
        className="absolute inset-0"
        style={{
          filter: "drop-shadow(3px 0 6px rgba(0, 0, 0, 0.2))"
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 32 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Torn edge extending into video - jagged right side, straight left side */}
          <path
            d="M0 0 L0 800 L4 800 L8 785 L5 770 L10 755 L6 740 L12 725 L7 710 L11 695 L5 680 L9 665 L13 650 L6 635 L10 620 L4 605 L11 590 L7 575 L13 560 L5 545 L9 530 L14 515 L6 500 L10 485 L4 470 L12 455 L7 440 L11 425 L5 410 L13 395 L8 380 L12 365 L4 350 L10 335 L6 320 L14 305 L8 290 L11 275 L5 260 L9 245 L13 230 L6 215 L10 200 L4 185 L12 170 L7 155 L11 140 L5 125 L13 110 L8 95 L12 80 L6 65 L10 50 L4 35 L8 20 L5 0 Z"
            fill="#E0F5FA"
            transform="scale(1, 1)"
          />
        </svg>
      </div>
      {/* Subtle texture line on torn edge */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 32 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 800 L8 785 L5 770 L10 755 L6 740 L12 725 L7 710 L11 695 L5 680 L9 665 L13 650 L6 635 L10 620 L4 605 L11 590 L7 575 L13 560 L5 545 L9 530 L14 515 L6 500 L10 485 L4 470 L12 455 L7 440 L11 425 L5 410 L13 395 L8 380 L12 365 L4 350 L10 335 L6 320 L14 305 L8 290 L11 275 L5 260 L9 245 L13 230 L6 215 L10 200 L4 185 L12 170 L7 155 L11 140 L5 125 L13 110 L8 95 L12 80 L6 65 L10 50 L4 35 L8 20 L5 0"
          stroke="#B8E6F2"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
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
