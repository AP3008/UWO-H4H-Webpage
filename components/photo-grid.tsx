import { ImagePlaceholder } from "@/components/image-placeholder";
import type { PhotoItem } from "@/types";

export function PhotoGrid({ photos }: { photos: PhotoItem[] }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo) => {
        const isPortrait = photo.height > photo.width;
        return (
          <div key={photo.id} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg">
              <ImagePlaceholder
                label={photo.alt}
                aspectRatio={isPortrait ? "portrait" : "video"}
              />
              {/* Overlay with event name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                {photo.eventName && (
                  <p className="text-sm font-medium text-white">
                    {photo.eventName}
                  </p>
                )}
                {photo.date && (
                  <p className="text-xs text-white/70">
                    {new Date(photo.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
