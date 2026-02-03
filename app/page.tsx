import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { StatCard } from "@/components/stat-card";
import { NewsCard } from "@/components/news-card";
import { CTABanner } from "@/components/cta-banner";
import { STATS, NEWS_ITEMS, EXTERNAL_LINKS } from "@/lib/data";

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

      {/* Impact at a Glance */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Impact at a Glance"
            subtitle="Our chapter's contributions to the community"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Latest News"
            subtitle="Stay up to date with our chapter's activities"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
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
