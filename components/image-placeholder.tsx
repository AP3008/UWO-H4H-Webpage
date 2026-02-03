import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function ImagePlaceholder({
  label = "Photo placeholder",
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-h4h-cyan-light ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-2 text-h4h-cyan-dark/60">
        <ImageIcon className="h-8 w-8" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
