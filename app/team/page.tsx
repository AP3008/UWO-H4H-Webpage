import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { TeamCard } from "@/components/team-card";
import { CTABanner } from "@/components/cta-banner";
import { TEAM_MEMBERS, EXTERNAL_LINKS } from "@/lib/data";
import {
  SketchyDivider,
  SketchyUnderline,
  StarDoodle,
} from "@/components/sketchy-elements";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the executive team and directors behind H4H Western University.",
};

export default function TeamPage() {
  const president = TEAM_MEMBERS.find((m) => m.role === "President");
  const vps = TEAM_MEMBERS.filter(
    (m) => m.level === "vp" && m.role !== "President"
  );
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
      <section className="relative bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <StarDoodle className="absolute top-8 right-[10%] w-5 h-5 text-h4h-cyan/20" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            title="Our Team"
            subtitle="Meet the people who make it all happen"
          />
        </div>
      </section>

      {/* President Section */}
      {president && (
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader title="President" />
            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-sm">
                <TeamCard member={president} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Wavy divider */}
      <SketchyDivider color="#F8FAFC" flip className="-mb-1" />

      {/* Vice Presidents Section */}
      <section className="bg-h4h-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Vice Presidents" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vps.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section — grouped by department */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <StarDoodle className="absolute top-16 left-[5%] w-4 h-4 text-h4h-cyan/15" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Directors" />

          {Object.entries(departments).map(([dept, members]) => (
            <div key={dept} className="mt-10">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-h4h-gray-600">
                  {dept}
                </h3>
              </div>
              <SketchyUnderline className="mt-1 text-h4h-gray-300" width="w-20" />
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
