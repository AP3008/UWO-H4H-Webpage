import { MapPin, Clock as ClockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/image-placeholder";
import type { Event } from "@/types";

export function EventCard({ event }: { event: Event }) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString("en-CA", { month: "short" });
  const day = date.getDate();

  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-md transition-shadow hover:shadow-lg">
      <div className="flex flex-col sm:flex-row">
        {/* Date Badge */}
        <div className="flex items-center justify-center bg-h4h-cyan px-6 py-4 sm:min-w-[100px] sm:flex-col">
          <span className="text-sm font-semibold uppercase text-white/80 sm:text-xs">
            {month}
          </span>
          <span className="ml-2 text-3xl font-bold text-white sm:ml-0 sm:text-4xl">
            {day}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold text-h4h-navy">
                {event.title}
              </h3>
              {!event.isPast && (
                <Badge className="shrink-0 bg-h4h-cyan-light text-h4h-cyan-dark border-0">
                  Upcoming
                </Badge>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-h4h-gray-600">
              {event.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-h4h-gray-600">
              <span className="flex items-center gap-1">
                <ClockIcon className="h-3.5 w-3.5" />
                {event.time}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {event.location}
              </span>
            </div>
          </div>
          {event.registrationUrl && (
            <div className="mt-4">
              <Button
                asChild
                size="sm"
                className="bg-h4h-navy text-white hover:bg-h4h-navy/90 rounded-lg"
              >
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Image placeholder - visible on larger screens */}
        <div className="hidden w-48 shrink-0 lg:block">
          <ImagePlaceholder
            label={event.title}
            aspectRatio="square"
            className="h-full rounded-none"
          />
        </div>
      </div>
    </Card>
  );
}
