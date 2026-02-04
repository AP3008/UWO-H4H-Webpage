import { Button } from "@/components/ui/button";
import {
  StarDoodle,
  SquiggleDoodle,
  SketchyDivider,
} from "@/components/sketchy-elements";

interface CTABannerProps {
  heading: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="relative bg-h4h-navy px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      {/* Wavy top edge */}
      <SketchyDivider
        className="absolute -top-1 left-0 right-0"
        color="#1B2A4A"
        flip
      />

      {/* Decorative stars */}
      <StarDoodle className="absolute top-8 left-[8%] w-5 h-5 text-white/15" />
      <StarDoodle className="absolute top-16 right-[12%] w-4 h-4 text-white/10" />
      <StarDoodle className="absolute bottom-12 left-[15%] w-3 h-3 text-white/10" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-h4h-cyan text-white hover:bg-h4h-cyan-dark font-semibold rounded-xl px-8"
          >
            <a href={primaryHref} target="_blank" rel="noopener noreferrer">
              {primaryLabel}
            </a>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-h4h-cyan text-h4h-cyan hover:bg-h4h-cyan hover:text-white rounded-xl px-8"
            >
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                {secondaryLabel}
              </a>
            </Button>
          )}
        </div>

        {/* Squiggle below buttons */}
        <SquiggleDoodle className="mx-auto mt-6 text-white/20" />
      </div>
    </section>
  );
}
