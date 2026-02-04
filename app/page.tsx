import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { EventCard } from "@/components/event-card";
import { Carousel3D } from "@/components/carousel-3d";
import { HeroSection } from "@/components/hero-section";
import { CTABanner } from "@/components/cta-banner";
import { UPCOMING_EVENTS, EXTERNAL_LINKS } from "@/lib/data";
import { SketchyDivider, StarDoodle } from "@/components/sketchy-elements";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 3D Photo Carousel */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Decorative stars */}
        <StarDoodle className="absolute top-12 left-[5%] w-4 h-4 text-h4h-cyan/20" />
        <StarDoodle className="absolute bottom-20 right-[8%] w-5 h-5 text-h4h-cyan/15" />

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

      {/* Wavy divider between sections */}
      <SketchyDivider color="#F8FAFC" flip className="-mb-1" />

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
