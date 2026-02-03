import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import type { NewsItem } from "@/types";

export function NewsCard({ item }: { item: NewsItem }) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-md transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <ImagePlaceholder
          label={item.title}
          aspectRatio="video"
          className="rounded-none"
        />
      </CardHeader>
      <CardContent className="p-5">
        <time className="text-xs font-medium text-h4h-gray-600">
          {formattedDate}
        </time>
        <h3 className="mt-2 text-lg font-semibold text-h4h-navy">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-h4h-gray-600">
          {item.excerpt}
        </p>
      </CardContent>
    </Card>
  );
}
