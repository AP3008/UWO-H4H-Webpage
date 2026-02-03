import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { EventCard } from "@/components/event-card";
import { PhotoGrid } from "@/components/photo-grid";
import { CTABanner } from "@/components/cta-banner";
import { UPCOMING_EVENTS, PHOTO_GALLERY, EXTERNAL_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming build days, fundraisers, and volunteer events from H4H Western. Plus a photo gallery of our past events.",
};

export default function EventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Events"
            subtitle="Join us at our upcoming events and build days"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-h4h-navy">Upcoming Events</h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-h4h-cyan" />

          {UPCOMING_EVENTS.length > 0 ? (
            <div className="mt-8 space-y-6">
              {UPCOMING_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl bg-h4h-gray-50 p-8 text-center">
              <p className="text-h4h-gray-600">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Legacy */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Photo Legacy"
            subtitle="Memories from our past events and build days"
          />
          <div className="mt-12">
            <PhotoGrid photos={PHOTO_GALLERY} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Want to get involved?"
        description="Sign up for our next event and make a difference in your community."
        primaryLabel="Join Our Chapter"
        primaryHref={EXTERNAL_LINKS.membership}
        secondaryLabel="Follow Us for Updates"
        secondaryHref={EXTERNAL_LINKS.instagram}
      />
    </>
  );
}
