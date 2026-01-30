import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Bus, Users, Sparkles } from "lucide-react";

const impactItems = [
  {
    icon: BookOpen,
    text: "Deliver free and low-cost exhibitions",
  },
  {
    icon: Bus,
    text: "Visit schools and universities",
  },
  {
    icon: Sparkles,
    text: "Create educational resources",
  },
  {
    icon: Users,
    text: "Cover travel, materials, and volunteer training",
  },
];

export function DonateSection() {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/25 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm">
            <Heart className="h-10 w-10 text-white drop-shadow-lg" />
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Support Our Work
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Your donations help us continue building bridges and fostering understanding 
            in communities across the North West.
          </p>

          {/* Impact items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {impactItems.map((item) => (
              <div 
                key={item.text}
                className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-white/15 transition-all hover:-translate-y-1"
              >
                <item.icon className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90 text-left">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            asChild 
            size="lg"
            className="bg-amber-500 text-white hover:bg-amber-600 font-semibold px-10 py-6 text-lg rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all"
          >
            <Link to="/contact">
              Donate Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
