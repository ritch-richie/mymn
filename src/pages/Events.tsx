import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, GraduationCap, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { EventFilters } from "@/components/events/EventFilters";
import { EventCategorySection } from "@/components/events/EventCategorySection";
import {
  useEvents,
  getUniqueLocations,
  getYears,
  EventCategory,
} from "@/hooks/useEvents";

const bookingOptions = [
  {
    icon: CalendarCheck,
    title: "Book an Exhibition",
    description:
      "Host an interactive exhibition in your community space, library, or venue.",
    link: "/contact?subject=exhibition",
  },
  {
    icon: GraduationCap,
    title: "Book a School Visit",
    description:
      "Arrange an educational visit or assembly for your students.",
    link: "/contact?subject=school",
  },
  {
    icon: Users,
    title: "Book an Outreach Event",
    description:
      "Invite us to participate in your community event or open day.",
    link: "/contact?subject=outreach",
  },
];

const Events = () => {
  const { data: events = [], isLoading } = useEvents();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const locations = useMemo(() => getUniqueLocations(events), [events]);
  const years = useMemo(() => getYears(events), [events]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesLocation =
        selectedLocation === "all" || event.location === selectedLocation;
      const matchesYear =
        selectedYear === "all" ||
        (event.event_date &&
          new Date(event.event_date).getFullYear().toString() === selectedYear);
      return matchesLocation && matchesYear;
    });
  }, [events, selectedLocation, selectedYear]);

  const eventsByCategory = useMemo(() => {
    const categories: EventCategory[] = ["exhibitions", "school_visits", "outreach"];
    return categories.map((category) => ({
      category,
      events: filteredEvents.filter((e) => e.category === category),
    }));
  }, [filteredEvents]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explore our community events across the UK – from exhibitions and
              school visits to mosque open days.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <EventFilters
            locations={locations}
            years={years}
            selectedLocation={selectedLocation}
            selectedYear={selectedYear}
            onLocationChange={setSelectedLocation}
            onYearChange={setSelectedYear}
          />
        </div>
      </section>

      {/* Events by Category */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading events...</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No events found matching your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedLocation("all");
                  setSelectedYear("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            eventsByCategory.map(({ category, events }) => (
              <EventCategorySection
                key={category}
                category={category}
                events={events}
              />
            ))
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book an Event
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in hosting or booking one of our programs? Get in touch
              and we'll work with you to create a meaningful experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bookingOptions.map((option) => (
              <Link
                key={option.title}
                to={option.link}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <option.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Book Now
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            We're always creating new events and programs. Contact us to discuss
            your specific needs or to suggest a new initiative.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
