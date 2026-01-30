import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";

const inviteOptions = [
  {
    icon: GraduationCap,
    title: "School Visit",
    description: "Book an educational visit for your students with interactive sessions on Islam, culture, and community.",
  },
  {
    icon: Building2,
    title: "Exhibition Hosting",
    description: "Host our immersive Islamic Exhibition at your venue - museums, community centres, or public spaces.",
  },
];

export function InviteUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Invite Meet Your Muslim Neighbour
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to bring our programmes to your school, organisation, or community.
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {inviteOptions.map((option) => (
              <div 
                key={option.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <option.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="gradient-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Invite Us to Your Organisation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
