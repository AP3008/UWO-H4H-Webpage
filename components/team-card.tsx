import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/image-placeholder";
import type { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  const isVP = member.level === "vp";

  return (
    <Card
      className={`overflow-hidden rounded-xl border-0 shadow-md transition-shadow hover:shadow-lg ${
        isVP ? "border-t-4 border-t-h4h-cyan" : ""
      }`}
    >
      <CardContent className={`flex flex-col items-center ${isVP ? "p-6" : "p-4"}`}>
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
