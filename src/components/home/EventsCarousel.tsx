import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  location: string;
  venue: string | null;
  event_date: string | null;
  description: string | null;
  event_images: { image_url: string; display_order: number }[];
}

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: events, isLoading } = useQuery({
    queryKey: ["homepage-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          id,
          title,
          location,
          venue,
          event_date,
          description,
          event_images (
            image_url,
            display_order
          )
        `)
        .eq("is_visible", true)
        .order("event_date", { ascending: false })
        .limit(10);

      if (error) throw error;
      return data as Event[];
    },
  });

  // Auto-scroll
  useEffect(() => {
    if (!events?.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events?.length]);

  const goToPrevious = () => {
    if (!events?.length) return;
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    if (!events?.length) return;
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary rounded w-48 mx-auto mb-4" />
            <div className="h-64 bg-secondary rounded-2xl" />
          </div>
        </div>
      </section>
    );
  }

  if (!events?.length) {
    return null;
  }

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Latest Events
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            2025 Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent exhibitions, school visits, and community events across the North West.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {events.map((event) => {
                const firstImage = event.event_images?.sort((a, b) => 
                  (a.display_order || 0) - (b.display_order || 0)
                )[0];

                return (
                  <div 
                    key={event.id}
                    className="w-full flex-shrink-0"
                  >
                    <div className="relative aspect-[16/9] bg-secondary rounded-3xl overflow-hidden group">
                      {firstImage ? (
                        <img 
                          src={firstImage.image_url}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full gradient-primary flex items-center justify-center">
                          <span className="text-white/50 text-lg">No image</span>
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                            {event.venue && ` • ${event.venue}`}
                          </span>
                          {event.event_date && (
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(event.event_date), "MMMM yyyy")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <Link to="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
