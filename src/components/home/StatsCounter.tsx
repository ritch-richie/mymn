export function StatsCounter() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              We're on a mission to change that.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that sustainable change comes from open dialogue. Our local 
              partnerships help facilitate meaningful connections across communities.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
