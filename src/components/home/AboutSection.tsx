import { MapPin, Calendar, Users, Heart } from "lucide-react";

const locations = [
  "Manchester",
  "Liverpool", 
  "Lancaster",
  "Leeds"
];

const stats = [
  { icon: Calendar, value: "20+", label: "Years Active" },
  { icon: MapPin, value: "4", label: "Cities Served" },
  { icon: Users, value: "150K+", label: "People Reached" },
  { icon: Heart, value: "300+", label: "Events Held" },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left card - Mission */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Meet Your Muslim Neighbour is a Muslim outreach organisation operating since 2004.
                We work across the North West of England, bringing communities together through 
                meaningful dialogue and cultural exchange.
              </p>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span 
                    key={location}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary rounded-full text-sm text-secondary-foreground"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {location}
                  </span>
                ))}
              </div>
            </div>

            {/* Right card - Aim */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Aim
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our aim is simple: to build understanding, challenge misconceptions, and create 
                meaningful conversations between Muslims and the wider community.
              </p>
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-primary font-medium italic">
                  "Building bridges, one conversation at a time."
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-all shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
