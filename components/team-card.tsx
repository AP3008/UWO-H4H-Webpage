import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/image-placeholder";
import {
  StarDoodle,
  SketchyTopBorder,
  SketchyCardBorder,
} from "@/components/sketchy-elements";
import type { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  const isVP = member.level === "vp";

  return (
    <Card
      className={`relative overflow-hidden rounded-xl border-0 shadow-md transition-shadow hover:shadow-lg`}
    >
      {/* Sketchy top border for VPs */}
      {isVP && (
        <>
          <SketchyTopBorder className="absolute top-0 left-0 right-0 text-h4h-cyan" />
          <StarDoodle className="absolute top-2 right-2 w-4 h-4 text-h4h-cyan/40" />
        </>
      )}

      {/* Subtle sketchy border for all cards */}
      <SketchyCardBorder className="opacity-20 text-h4h-gray-200" />

      <CardContent
        className={`flex flex-col items-center ${isVP ? "p-6 pt-4" : "p-4"}`}
      >
        {/* Headshot placeholder */}
        <div
          className={`overflow-hidden rounded-full ${
            isVP ? "h-28 w-28" : "h-20 w-20"
          }`}
        >
          <ImagePlaceholder
            label={member.name}
            aspectRatio="square"
            className="h-full w-full rounded-full"
          />
        </div>

        <h3
          className={`mt-3 font-semibold text-h4h-navy ${
            isVP ? "text-lg" : "text-base"
          }`}
        >
          {member.name}
        </h3>

        <Badge
          className={`mt-1.5 border-0 ${
            isVP
              ? "bg-h4h-cyan text-white"
              : "bg-h4h-cyan-light text-h4h-cyan-dark"
          }`}
        >
          {member.role}
        </Badge>

        {isVP && member.bio && (
          <p className="mt-3 text-center text-sm leading-relaxed text-h4h-gray-600">
            {member.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
