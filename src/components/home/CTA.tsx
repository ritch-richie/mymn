import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
            <Heart className="h-8 w-8" />
          </div>
          <p className="text-white/80 font-medium mb-3 text-sm uppercase tracking-wider">
            Be Part of the Change
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to <span className="underline decoration-4 underline-offset-4">Get Involved</span>?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Whether you're a school looking to book a visit, a community group wanting 
            to arrange a mosque tour, or simply curious to learn more—we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-full"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold px-8 rounded-full"
            >
              <Link to="/events">Explore Our Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
