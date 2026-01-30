export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-center justify-center">
            {/* Video - Widescreen */}
            <div className="w-full max-w-4xl">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="text-center mt-8">
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
