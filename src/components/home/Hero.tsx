export function Hero() {
  return (
    <section className="pt-24 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            <span className="block">Meet Your</span>
            <span className="block text-primary">Muslim Neighbour</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export function HeroVideo() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="w-48 md:w-56 lg:w-64 mx-auto rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
