import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { TeamCard } from "@/components/team-card";
import { CTABanner } from "@/components/cta-banner";
import { TEAM_MEMBERS, EXTERNAL_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the executive team and directors behind H4H Western University.",
};

export default function TeamPage() {
  const vps = TEAM_MEMBERS.filter((m) => m.level === "vp");
  const directors = TEAM_MEMBERS.filter((m) => m.level === "director");

  // Group directors by department
  const departments = directors.reduce<Record<string, typeof directors>>(
    (acc, member) => {
      const dept = member.department ?? "General";
      if (!acc[dept]) acc[dept] = [];
      acc[dept].push(member);
      return acc;
    },
    {}
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the people who make it all happen"
          />
        </div>
      </section>

      {/* VPs Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-h4h-navy">
            Executive Team
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-h4h-cyan" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vps.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section — grouped by department */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-h4h-navy">Directors</h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-h4h-cyan" />

          {Object.entries(departments).map(([dept, members]) => (
            <div key={dept} className="mt-10">
              <h3 className="text-lg font-semibold text-h4h-gray-600">
                {dept}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {members.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Want to join our team?"
        description="We're always looking for passionate students to help build homes and hope."
        primaryLabel="Become a Member"
        primaryHref={EXTERNAL_LINKS.membership}
      />
    </>
  );
}
