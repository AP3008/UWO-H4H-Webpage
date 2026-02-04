// Shared sketchy/hand-drawn SVG elements for consistent aesthetic across the site
// All paths are deterministic (no Math.random) to avoid hydration mismatches

interface DoodleProps {
  className?: string;
}

export function StarDoodle({ className }: DoodleProps) {
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

export function SquiggleDoodle({ className }: DoodleProps) {
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

export function CircleDoodle({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3 Q20 4 21 12 Q20 20 12 21 Q4 20 3 12 Q4 4 12 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

interface SketchyUnderlineProps {
  className?: string;
  width?: string;
  animate?: boolean;
}

export function SketchyUnderline({
  className,
  width = "w-32",
  animate = false,
}: SketchyUnderlineProps) {
  const pathLength = 210;
  return (
    <svg
      className={`h-3 ${width} ${className ?? ""}`}
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
        style={
          animate
            ? {
                strokeDasharray: pathLength,
                strokeDashoffset: 0,
                transition: "stroke-dashoffset 1.2s ease-out",
              }
            : {}
        }
      />
    </svg>
  );
}

interface SketchyDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

export function SketchyDivider({
  className,
  flip = false,
  color = "currentColor",
}: SketchyDividerProps) {
  return (
    <svg
      className={`w-full h-4 ${className ?? ""}`}
      viewBox="0 0 1200 16"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: "scaleY(-1)" } : {}}
    >
      <path
        d="M0 16 L0 8 Q50 2 100 7 Q150 12 200 6 Q250 2 300 8 Q350 13 400 6 Q450 1 500 7 Q550 12 600 5 Q650 1 700 8 Q750 14 800 6 Q850 1 900 7 Q950 12 1000 5 Q1050 1 1100 8 Q1150 13 1200 6 L1200 16 Z"
        fill={color}
      />
    </svg>
  );
}

interface SketchyCardBorderProps {
  className?: string;
}

export function SketchyCardBorder({ className }: SketchyCardBorderProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ""}`}
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top edge */}
      <path
        d="M0 2 Q25 0 50 3 Q75 5 100 2 Q125 0 150 3 Q175 5 200 2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Right edge */}
      <path
        d="M198 0 Q200 25 197 50 Q195 75 198 100 Q200 125 197 150 Q195 175 198 200"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Bottom edge */}
      <path
        d="M200 198 Q175 200 150 197 Q125 195 100 198 Q75 200 50 197 Q25 195 0 198"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left edge */}
      <path
        d="M2 200 Q0 175 3 150 Q5 125 2 100 Q0 75 3 50 Q5 25 2 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

interface SketchyTopBorderProps {
  className?: string;
}

export function SketchyTopBorder({ className }: SketchyTopBorderProps) {
  return (
    <svg
      className={`w-full h-1 ${className ?? ""}`}
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2 Q25 0 50 3 Q75 5 100 2 Q125 0 150 3 Q175 5 200 2"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

interface ArrowDoodleProps {
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export function ArrowDoodle({
  className,
  direction = "right",
}: ArrowDoodleProps) {
  const rotations = {
    right: "rotate(0)",
    down: "rotate(90)",
    left: "rotate(180)",
    up: "rotate(270)",
  };

  return (
    <svg
      className={className}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: rotations[direction] }}
    >
      <path
        d="M2 12 Q10 11 18 12 Q22 12 26 12 M20 6 Q24 10 26 12 Q24 14 20 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Sketchy dot for timelines
export function SketchyDot({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2 Q13 3 14 8 Q13 13 8 14 Q3 13 2 8 Q3 3 8 2"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
    </svg>
  );
}

// Wavy vertical line for timelines
interface SketchyVerticalLineProps {
  className?: string;
  height?: string;
}

export function SketchyVerticalLine({
  className,
  height = "h-full",
}: SketchyVerticalLineProps) {
  return (
    <svg
      className={`w-1 ${height} ${className ?? ""}`}
      viewBox="0 0 4 200"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0 Q0 25 3 50 Q5 75 2 100 Q0 125 3 150 Q5 175 2 200"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
