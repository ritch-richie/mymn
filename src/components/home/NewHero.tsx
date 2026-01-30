import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export function NewHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden gradient-hero pt-32 md:pt-28 pb-24">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Help every person to understand and connect.
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Building bridges between communities since 2004. By inviting us to your school, 
              mosque, or community space, you're helping foster understanding across the North West.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 py-6 text-base rounded-full transition-all"
              >
                <Link to="/contact">Start Donating</Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-base rounded-full transition-all"
              >
                <Link to="/about">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Right - Video/Image */}
          <div className="relative flex items-center justify-center lg:justify-end mb-16 lg:mb-0">
            {/* Decorative background shapes */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-white/10 rounded-3xl rotate-12 hidden lg:block" />
            
            {/* Main video container */}
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                {!isVideoPlaying ? (
                  <>
                    <video
                      src="/videos/mymn-intro.mp4"
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    {/* Play button overlay */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                      aria-label="Play video"
                    >
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                      </div>
                    </button>
                  </>
                ) : (
                  <video
                    src="/videos/mymn-intro.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                  />
                )}
              </div>
              
              {/* Small floating image decoration */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] border-4 border-white/30 hidden md:block">
                <img 
                  src="/events/liverpool-world-museum-1.png" 
                  alt="Community event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - extended for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[hsl(var(--cream))] via-[hsl(var(--teal-light)/0.3)] to-transparent" />
    </section>
  );
}
