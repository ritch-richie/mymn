import { MapPin } from "lucide-react";

const cities = [
  { name: "Manchester", description: "Our headquarters and largest community hub" },
  { name: "Liverpool", description: "Active school visits and mosque tours" },
  { name: "Lancaster", description: "University programs and community events" },
  { name: "Leeds", description: "Exhibitions and interfaith dialogue" },
];

export function LocationsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving the North West
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're active across four major cities in the North West of England
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {cities.map((city) => (
            <div 
              key={city.name}
              className="group bg-card rounded-2xl p-6 border border-border text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-[0_8px_25px_rgba(0,167,157,0.4)] group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {city.name}
              </h3>
              <p className="text-sm text-muted-foreground hidden md:block">
                {city.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
