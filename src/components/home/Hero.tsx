import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(175,100%,8%)]">
      {/* Dark teal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(175,100%,6%)] via-[hsl(175,100%,8%)] to-[hsl(175,100%,10%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <img
              src={logo}
              alt="Meet Your Muslim Neighbours"
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Meet Your Muslim
            <span className="block">Neighbours</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light mb-8 text-white/90 animate-fade-in-up animation-delay-400">
            Building Bridges. Fostering Understanding.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600">
            We are a community-based project dedicated to promoting dialogue and understanding 
            between Muslim and non-Muslim communities across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
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
              className="border-white text-black bg-white hover:bg-white/90 font-semibold px-8"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/70">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">328</div>
              <div className="text-white/70">Events</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold mb-2">152K+</div>
              <div className="text-white/70">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
