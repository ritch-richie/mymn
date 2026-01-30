export function IntroVideo() {
  return (
    <section className="py-16 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto">
          {/* Video container - portrait aspect ratio */}
          <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <video
              src="/videos/mymn-intro.mp4"
              controls
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Caption */}
          <p className="text-center text-muted-foreground mt-6 text-sm">
            See what Meet Your Muslim Neighbour is all about
          </p>
        </div>
      </div>
    </section>
  );
}
