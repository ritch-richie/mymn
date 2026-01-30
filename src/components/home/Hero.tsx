import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          {/* Add your video source here */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Small label */}
          <p className="text-primary font-medium mb-6 text-sm md:text-base uppercase tracking-widest animate-fade-in-up">
            Building Bridges Since 2004
          </p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
            Meet Your{" "}
            <span className="text-primary">Muslim</span>{" "}
            Neighbours
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in-up animation-delay-400">
            Fostering Understanding. Building Community.
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-600">
            A community-based project dedicated to promoting dialogue and understanding 
            between Muslim and non-Muslim communities across the UK.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity"
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
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              <Link to="/events">
                <Play className="mr-2 h-5 w-5" />
                Our Events
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
