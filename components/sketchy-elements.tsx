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

interface RippedPaperDividerProps {
  className?: string;
  flip?: boolean;
  topColor?: string;
  bottomColor?: string;
}

// Ripped paper divider - creates a dramatic torn paper edge between sections
// The torn edge uses a contrasting paperColor so it stands out against both sections
export function RippedPaperDivider({
  className,
  flip = false,
  topColor = "white",
  bottomColor = "#F8FAFC",
}: RippedPaperDividerProps) {
  // Choose a paper color that contrasts with both sections
  // For light→light transitions: use cyan-light (brand accent)
  // For light→navy transitions: use a warm off-white/cream
  const isNavyBottom = bottomColor === "#1B2A4A";
  const paperColor = isNavyBottom ? "#E0F5FA" : "#E0F5FA";
  const edgeStroke = isNavyBottom ? "#008FB3" : "#00AFD7";
  const fiberStroke = isNavyBottom ? "#008FB3" : "#008FB3";

  return (
    <div className={`relative w-full h-12 ${className ?? ""}`} style={flip ? { transform: "scaleY(-1)" } : {}}>
      {/* Top section fill extends down */}
      <div className="absolute top-0 left-0 right-0 h-4" style={{ backgroundColor: topColor }} />

      {/* Shadow layer for depth - offset down and slightly blurred */}
      <svg
        className="absolute top-1 left-0 w-full h-12 opacity-25"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "blur(3px)" }}
      >
        <path
          d="M0 0 L0 18 L20 24 L35 14 L55 28 L75 16 L95 30 L115 18 L140 32 L160 20 L180 34 L200 22 L225 36 L250 24 L270 38 L295 26 L320 40 L345 28 L365 42 L390 30 L415 44 L440 32 L460 46 L485 34 L510 48 L535 36 L555 44 L580 32 L605 46 L630 34 L650 48 L675 36 L700 44 L725 32 L745 46 L770 34 L795 48 L820 36 L840 44 L865 32 L890 46 L915 34 L935 48 L960 36 L985 44 L1010 32 L1030 46 L1055 34 L1080 48 L1105 36 L1125 44 L1150 32 L1175 40 L1200 34 L1200 0 Z"
          fill="#64748B"
        />
      </svg>

      {/* Main torn edge SVG — uses paperColor so it contrasts with both sections */}
      <svg
        className="absolute top-0 left-0 w-full h-12"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main torn edge shape filled with contrasting paper color */}
        <path
          d="M0 0 L0 18 L20 24 L35 14 L55 28 L75 16 L95 30 L115 18 L140 32 L160 20 L180 34 L200 22 L225 36 L250 24 L270 38 L295 26 L320 40 L345 28 L365 42 L390 30 L415 44 L440 32 L460 46 L485 34 L510 48 L535 36 L555 44 L580 32 L605 46 L630 34 L650 48 L675 36 L700 44 L725 32 L745 46 L770 34 L795 48 L820 36 L840 44 L865 32 L890 46 L915 34 L935 48 L960 36 L985 44 L1010 32 L1030 46 L1055 34 L1080 48 L1105 36 L1125 44 L1150 32 L1175 40 L1200 34 L1200 0 Z"
          fill={paperColor}
        />
        {/* Visible texture/fiber line on the torn edge */}
        <path
          d="M0 18 L20 24 L35 14 L55 28 L75 16 L95 30 L115 18 L140 32 L160 20 L180 34 L200 22 L225 36 L250 24 L270 38 L295 26 L320 40 L345 28 L365 42 L390 30 L415 44 L440 32 L460 46 L485 34 L510 48 L535 36 L555 44 L580 32 L605 46 L630 34 L650 48 L675 36 L700 44 L725 32 L745 46 L770 34 L795 48 L820 36 L840 44 L865 32 L890 46 L915 34 L935 48 L960 36 L985 44 L1010 32 L1030 46 L1055 34 L1080 48 L1105 36 L1125 44 L1150 32 L1175 40 L1200 34"
          stroke={edgeStroke}
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        {/* Small fiber details */}
        <g stroke={fiberStroke} strokeWidth="0.75" opacity="0.3">
          <line x1="55" y1="28" x2="60" y2="34" />
          <line x1="140" y1="32" x2="145" y2="38" />
          <line x1="270" y1="38" x2="275" y2="44" />
          <line x1="415" y1="44" x2="420" y2="48" />
          <line x1="510" y1="48" x2="515" y2="52" />
          <line x1="650" y1="48" x2="655" y2="52" />
          <line x1="795" y1="48" x2="800" y2="52" />
          <line x1="935" y1="48" x2="940" y2="52" />
          <line x1="1080" y1="48" x2="1085" y2="52" />
        </g>
      </svg>

      {/* Bottom section fill */}
      <div className="absolute bottom-0 left-0 right-0 h-4" style={{ backgroundColor: bottomColor }} />
    </div>
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
