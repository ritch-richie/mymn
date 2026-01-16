import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <MessageCircle className="h-16 w-16 mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Get Involved?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Whether you're a school looking to book a visit, a community group wanting 
            to arrange a mosque tour, or simply curious to learn more—we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
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
              className="border-white text-white hover:bg-white/10 font-semibold px-8"
            >
              <Link to="/projects">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
