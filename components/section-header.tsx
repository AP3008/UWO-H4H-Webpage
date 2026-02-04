"use client";

import { useRef, useState, useEffect } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

// Inline sketchy underline to avoid import issues with client component
function SketchyUnderlineAnimated({
  visible,
  align,
}: {
  visible: boolean;
  align: "center" | "left";
}) {
  const pathLength = 210;
  return (
    <svg
      className={`mt-3 h-3 w-36 text-h4h-cyan ${align === "center" ? "mx-auto" : ""}`}
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 2 8 Q 30 3 60 7 Q 90 11 120 5 Q 150 2 180 8 Q 190 10 198 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: visible ? 0 : pathLength,
          transition: visible
            ? "stroke-dashoffset 0.8s ease-out 1.5s"
            : "none",
        }}
      />
    </svg>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2
        className="text-3xl font-bold text-h4h-navy sm:text-4xl"
        style={{
          clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          animation: visible ? "write-in 1.5s ease-out forwards" : "none",
        }}
      >
        {title}
      </h2>
      <SketchyUnderlineAnimated visible={visible} align={align} />
      {subtitle && (
        <p
          className="mt-4 text-lg text-h4h-gray-600"
          style={{
            opacity: 0,
            animation: visible ? "fade-in 0.8s ease forwards 1.8s" : "none",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
