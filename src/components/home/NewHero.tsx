import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";

export function NewHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse animation-delay-200" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-white/25 rounded-full animate-pulse animation-delay-400" />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse animation-delay-600" />
        <div className="absolute top-1/3 left-1/2 w-28 h-28 border-2 border-white/20 rounded-full animate-pulse" />
        {/* Geometric shapes inspired by Islamic patterns */}
        <svg className="absolute top-10 right-10 w-48 h-48 text-white/10" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-40 h-40 text-white/10" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo mark */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="Meet Your Muslim Neighbours" 
              className="h-20 md:h-24 w-auto mx-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            Bridging Communities.
            <br />
            Fostering Understanding.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Meet Your Muslim Neighbour is a Muslim outreach organisation operating since 2004, 
            helping communities across the North West understand who Muslims are and what we do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/contact">Invite Us</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/contact">Donate</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
