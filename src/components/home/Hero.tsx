import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          {/* Content Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-border">
            {/* Small label */}
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">
              Building Bridges Since 2004
            </p>

            {/* Title with highlighted words */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Meet Your{" "}
              <span className="text-primary">Muslim</span>{" "}
              Neighbours. Foster{" "}
              <span className="text-primary">Understanding</span>.
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are a community-based project dedicated to promoting dialogue and understanding 
              between Muslim and non-Muslim communities across the UK.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white font-semibold px-8 rounded-full"
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
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 rounded-full"
              >
                <Link to="/events">
                  <Play className="mr-2 h-4 w-4" />
                  Our Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 py-6 text-white text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-white/80 text-sm">Locations</div>
            </div>
            <div className="border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold">328</div>
              <div className="text-white/80 text-sm">Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">152K+</div>
              <div className="text-white/80 text-sm">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
