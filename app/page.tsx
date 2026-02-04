import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { EventCard } from "@/components/event-card";
import { Carousel3D } from "@/components/carousel-3d";
import { HeroVideo } from "@/components/hero-video";
import { CTABanner } from "@/components/cta-banner";
import { UPCOMING_EVENTS, EXTERNAL_LINKS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-h4h-gray-900">
        <div className="flex min-h-[300px] flex-col md:min-h-[500px] md:flex-row lg:min-h-[600px]">
          {/* Left panel — cyan arrow shape */}
          <div className="relative flex w-full flex-col items-center justify-center bg-gradient-to-br from-h4h-cyan to-h4h-cyan-dark px-8 py-16 md:w-[35%] md:py-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            {/* Desktop: arrow-shaped right edge */}
            <style>{`
              @media (min-width: 768px) {
                .hero-left-panel {
                  clip-path: polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%) !important;
                }
              }
            `}</style>
            <div className="hero-left-panel absolute inset-0 bg-gradient-to-br from-h4h-cyan to-h4h-cyan-dark" />

            <div className="relative z-10 flex flex-col items-center">
              <Image
                src="/images/h4h-blue-no-text.png"
                alt="Habitat for Humanity Western University"
                width={120}
                height={120}
                className="h-24 w-24 rounded-2xl md:h-28 md:w-28 lg:h-32 lg:w-32"
                priority
              />
              <h1 className="mt-6 text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
                Western Habitat for Humanity
              </h1>
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-xl bg-h4h-navy px-8 font-semibold text-white hover:bg-h4h-navy/90"
              >
                <a
                  href={EXTERNAL_LINKS.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right panel — video (hidden on mobile) */}
          <div className="hidden md:flex md:w-[65%] items-center justify-center bg-h4h-gray-900">
            <HeroVideo />
          </div>
        </div>
      </section>

      {/* 3D Photo Carousel */}
      <section className="overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Community in Action"
            subtitle="Moments from our builds, events, and volunteer experiences"
          />
          <div className="mt-12">
            <Carousel3D />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Get involved with our next build days, socials, and fundraisers"
          />

          {UPCOMING_EVENTS.length > 0 ? (
            <div className="mt-12 space-y-6">
              {UPCOMING_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-xl border border-h4h-gray-200 bg-white p-10 text-center shadow-sm">
              <p className="text-lg font-medium text-h4h-navy">
                No upcoming events at the moment
              </p>
              <p className="mt-2 text-sm text-h4h-gray-600">
                Follow us on Instagram to stay in the loop for future events and
                build days.
              </p>
              <Button
                asChild
                className="mt-6 rounded-lg bg-h4h-cyan text-white hover:bg-h4h-cyan-dark"
              >
                <a
                  href={EXTERNAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @h4hwesternuniversity
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to make a difference?"
        description="Join our chapter and help build affordable homes for families in need."
        primaryLabel="Join Our Chapter"
        primaryHref={EXTERNAL_LINKS.membership}
        secondaryLabel="Follow Us on Instagram"
        secondaryHref={EXTERNAL_LINKS.instagram}
      />
    </>
  );
}
