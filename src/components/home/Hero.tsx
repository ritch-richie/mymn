import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
        {/* Dark teal overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(175,100%,10%,0.92)] via-[hsl(175,100%,12%,0.88)] to-[hsl(175,100%,15%,0.85)]" />
      </div>

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
              className="border-white text-white hover:bg-white/10 font-semibold px-8"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
