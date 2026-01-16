import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  description?: string | null;
  venue?: string | null;
  eventDate?: string | null;
  images: { id: string; image_url: string }[];
}

export function EventCard({
  title,
  description,
  venue,
  eventDate,
  images,
}: EventCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
      {/* Image Carousel */}
      <div className="relative aspect-square bg-muted">
        {hasImages ? (
          <>
            <img
              src={images[currentIndex].image_url}
              alt={title}
              className="w-full h-full object-cover"
            />
            {hasMultipleImages && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        idx === currentIndex
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/75"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-1 line-clamp-2">
          {title}
        </h3>
        {venue && (
          <p className="text-sm text-muted-foreground mb-1">{venue}</p>
        )}
        {eventDate && (
          <p className="text-xs text-primary font-medium">
            {new Date(eventDate).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
            })}
          </p>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
