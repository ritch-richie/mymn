import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Teal gradient background */}
      <div className="absolute inset-0 gradient-hero" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Video */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                title="Meet Your Muslim Neighbours"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Meet Your Muslim
            <span className="block">Neighbours</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up animation-delay-400">
            Building Bridges. Fostering Understanding.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600">
            We are a community-based project dedicated to promoting dialogue and understanding 
            between Muslim and non-Muslim communities across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
            >
              <Link to="/about">
                Learn About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90 font-semibold px-8"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="opacity-70">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">328</div>
              <div className="opacity-70">Events</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold mb-2">152K+</div>
              <div className="opacity-70">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
