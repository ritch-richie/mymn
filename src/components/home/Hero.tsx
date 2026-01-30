import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-[hsl(var(--cream))] to-background pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Large Typography with Image */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight">
                <span className="block">Meet Your</span>
                <span className="flex items-center justify-center gap-4 md:gap-8 my-4">
                  <span className="text-primary">Muslim</span>
                  {/* Circular Image */}
                  <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
                    <img
                      src={heroImage}
                      alt="Community members"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Neighbours</span>
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white font-semibold px-8 py-6 text-base rounded-full hover:opacity-90 transition-opacity min-w-[160px]"
              >
                <Link to="/events">Our Events</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-8 py-6 text-base rounded-full group"
              >
                <Link to="/about" className="flex items-center gap-2">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[hsl(var(--cream-dark))] border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            {/* Left - Quick Stats */}
            <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <span className="font-medium">Since 2004</span>
              <span className="w-px h-4 bg-border" />
              <span>Building Understanding Across the UK</span>
            </div>

            {/* Center - Partner mentions */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="font-medium">Schools</span>
              <span className="w-px h-4 bg-border hidden sm:block" />
              <span className="hidden sm:block">Universities</span>
              <span className="w-px h-4 bg-border hidden md:block" />
              <span className="hidden md:block">Community Groups</span>
            </div>

            {/* Right - Scroll Down */}
            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="hidden sm:inline">Scroll Down</span>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
