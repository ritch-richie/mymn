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
      <div className="flex-1 flex items-center bg-gradient-to-b from-[hsl(var(--cream))] to-background pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Typography */}
              <div className="text-left">
                {/* Tag */}
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Building Bridges Since 2004
                  </span>
                </div>

                {/* Large Typography */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-8">
                  <span className="block">Meet Your</span>
                  <span className="block text-primary">Muslim Neighbour</span>
                </h1>

                {/* CTA Link */}
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                >
                  <span className="uppercase tracking-wider">Learn More</span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </div>

              {/* Right: Rectangular Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Community members connecting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
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
