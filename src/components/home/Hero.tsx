import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";
import { useEffect } from "react";

export function Hero() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process embeds when script loads
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(175,100%,8%)]">
      {/* Dark teal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(175,100%,6%)] via-[hsl(175,100%,8%)] to-[hsl(175,100%,10%)]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Video */}
            <div className="flex justify-center animate-fade-in-up">
              <div className="w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/reel/DJxqYaHoG8l/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href="https://www.instagram.com/reel/DJxqYaHoG8l/?utm_source=ig_embed&amp;utm_campaign=loading"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View this post on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-left text-white">
              {/* Logo */}
              <div className="mb-8 animate-fade-in-up">
                <img
                  src={logo}
                  alt="Meet Your Muslim Neighbours"
                  className="h-24 md:h-32 w-auto mx-auto lg:mx-0"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up animation-delay-200">
                Meet Your Muslim
                <span className="block">Neighbours</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl font-light mb-6 text-white/90 animate-fade-in-up animation-delay-400">
                Building Bridges. Fostering Understanding.
              </p>

              {/* Description */}
              <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                We are a community-based project dedicated to promoting dialogue and understanding 
                between Muslim and non-Muslim communities across the UK.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
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
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20 text-white text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/70">Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">328</div>
              <div className="text-white/70">Events</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold mb-2">152K+</div>
              <div className="text-white/70">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
