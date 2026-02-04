"use client";

import { useRef, useState, useEffect } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
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
          fontFamily: "var(--font-shadows), cursive",
          clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          animation: visible ? "write-in 1.5s ease-out forwards" : "none",
        }}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-h4h-cyan ${
          align === "center" ? "mx-auto" : ""
        }`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: align === "center" ? "center" : "left",
          transition: visible
            ? "opacity 0.4s ease 1.5s, transform 0.6s ease 1.5s"
            : "none",
        }}
      />
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
