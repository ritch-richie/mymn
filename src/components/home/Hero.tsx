import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center justify-center">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Community members connecting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Typography */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                <span className="block">Meet Your</span>
                <span className="block text-primary">Muslim Neighbour</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
