import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type EventCategory = "exhibitions" | "school_visits" | "outreach";

export interface Event {
  id: string;
  title: string;
  description: string | null;
  category: EventCategory;
  location: string;
  venue: string | null;
  event_date: string | null;
  display_order: number | null;
  is_visible: boolean | null;
  images: EventImage[];
}

export interface EventImage {
  id: string;
  image_url: string;
  display_order: number | null;
}

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async (): Promise<Event[]> => {
      const { data: events, error: eventsError } = await supabase
        .from("events")
        .select("*")
        .order("display_order", { ascending: true });

      if (eventsError) throw eventsError;

      const { data: images, error: imagesError } = await supabase
        .from("event_images")
        .select("*")
        .order("display_order", { ascending: true });

      if (imagesError) throw imagesError;

      // Map images to events
      return (events || []).map((event) => ({
        ...event,
        category: event.category as EventCategory,
        images: (images || []).filter((img) => img.event_id === event.id),
      }));
    },
  });
}

export function getUniqueLocations(events: Event[]): string[] {
  const locations = new Set(events.map((e) => e.location));
  return Array.from(locations).sort();
}

export function getYears(events: Event[]): number[] {
  const years = new Set(
    events
      .filter((e) => e.event_date)
      .map((e) => new Date(e.event_date!).getFullYear())
  );
  return Array.from(years).sort((a, b) => b - a);
}

export const categoryLabels: Record<EventCategory, string> = {
  exhibitions: "Exhibitions",
  school_visits: "School Visits",
  outreach: "Outreach Events",
};
