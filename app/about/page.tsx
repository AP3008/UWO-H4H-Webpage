import type { Metadata } from "next";
import {
  Heart,
  HandHelping,
  Scale,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { CTABanner } from "@/components/cta-banner";
import { VALUES, TIMELINE, EXTERNAL_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Western University's chapter of Habitat for Humanity — our mission, vision, values, and history.",
};

const iconMap: Record<string, LucideIcon> = {
  Heart,
  HandHelping,
  Scale,
  Leaf,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="About Us"
            subtitle="Building homes and hope in our community since 2021"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="rounded-xl border-0 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-h4h-cyan">
                Our Mission
              </h3>
              <h2 className="mt-2 text-2xl font-bold text-h4h-navy">
                Why We Build
              </h2>
              <p className="mt-4 leading-relaxed text-h4h-gray-600">
                The Western University Chapter of Habitat for Humanity mobilizes
                students to advocate for and contribute to affordable housing
                solutions. Through hands-on build days, fundraising, and
                community education, we work alongside Habitat for Humanity
                Heartland Ontario to help families achieve the strength,
                stability, and self-reliance they need to build a better life.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-0 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-h4h-cyan">
                Our Vision
              </h3>
              <h2 className="mt-2 text-2xl font-bold text-h4h-navy">
                A World Where Everyone Has a Home
              </h2>
              <p className="mt-4 leading-relaxed text-h4h-gray-600">
                We envision a campus community where every student understands
                the importance of affordable housing and is empowered to take
                action. By fostering a culture of service and advocacy, we aim
                to create lasting change — one home, one family, one community
                at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in our chapter's history"
          />
          <div className="relative mt-12">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-h4h-gray-200 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="relative flex items-start gap-6 sm:gap-0"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-h4h-cyan bg-white sm:left-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 0
                        ? "sm:pr-10 sm:text-right"
                        : "sm:ml-auto sm:pl-10"
                    }`}
                  >
                    <span className="text-sm font-bold text-h4h-cyan">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-h4h-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-h4h-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = iconMap[value.icon] ?? Heart;
              return (
                <Card
                  key={value.title}
                  className="rounded-xl border-0 shadow-md transition-shadow hover:shadow-lg"
                >
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-h4h-cyan-light">
                      <Icon className="h-6 w-6 text-h4h-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-h4h-navy">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-h4h-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Join Our Mission"
        description="Be part of a community that's building a better future, one home at a time."
        primaryLabel="Become a Member"
        primaryHref={EXTERNAL_LINKS.membership}
        secondaryLabel="Follow Us"
        secondaryHref={EXTERNAL_LINKS.instagram}
      />
    </>
  );
}
