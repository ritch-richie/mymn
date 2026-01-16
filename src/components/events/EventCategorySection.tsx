import { Event, categoryLabels, EventCategory } from "@/hooks/useEvents";
import { EventCard } from "./EventCard";
import { GalleryHorizontal, GraduationCap, Users } from "lucide-react";

interface EventCategorySectionProps {
  category: EventCategory;
  events: Event[];
}

const categoryIcons: Record<EventCategory, typeof GalleryHorizontal> = {
  exhibitions: GalleryHorizontal,
  school_visits: GraduationCap,
  outreach: Users,
};

export function EventCategorySection({
  category,
  events,
}: EventCategorySectionProps) {
  const Icon = categoryIcons[category];

  if (events.length === 0) return null;

  return (
    <div className="mb-16">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {categoryLabels[category]}
          </h2>
          <p className="text-muted-foreground">
            {events.length} event{events.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            venue={event.venue}
            eventDate={event.event_date}
            images={event.images}
          />
        ))}
      </div>
    </div>
  );
}
