import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { EventCard } from "@/components/event-card";
import { Carousel3D } from "@/components/carousel-3d";
import { CTABanner } from "@/components/cta-banner";
import { UPCOMING_EVENTS, EXTERNAL_LINKS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-h4h-cyan to-h4h-cyan-dark px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Homes.
              <br />
              Building Hope.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
              Western University&apos;s chapter of Habitat for Humanity is
              dedicated to building affordable housing and empowering
              communities in London, Ontario. Join us in making a difference.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-h4h-navy px-8 font-semibold text-white hover:bg-h4h-navy/90"
              >
                <a
                  href={EXTERNAL_LINKS.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-white/40 px-8 text-white hover:bg-white/10"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
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
