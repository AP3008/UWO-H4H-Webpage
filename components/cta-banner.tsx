import { Button } from "@/components/ui/button";

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
    <section className="bg-h4h-navy px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
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
              className="border-white/30 text-white hover:bg-white/10 rounded-xl px-8"
            >
              <a href={secondaryHref} target="_blank" rel="noopener noreferrer">
                {secondaryLabel}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
