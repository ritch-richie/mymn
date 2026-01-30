import { Link } from "react-router-dom";
import { Building2, GraduationCap, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Islamic Exhibition",
    subtitle: "Flagship Event",
    description: "Our immersive, museum-style Islamic Exhibition allows visitors to explore Islamic beliefs, history, culture, and everyday Muslim life through open conversation and interactive displays.",
    link: "/projects#exhibitions",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: GraduationCap,
    title: "School Visits",
    subtitle: "Education",
    description: "We visit primary schools, secondary schools, colleges, and universities to support RE, citizenship, and diversity education in a safe, engaging way.",
    link: "/projects#schools",
    color: "from-teal-600 to-teal-700",
  },
  {
    icon: Users,
    title: "Community Events",
    subtitle: "Outreach",
    description: "We work with mosques, museums, councils, and community centres to host exhibitions and dialogue-focused events for the wider public.",
    link: "/projects#community",
    color: "from-teal-700 to-teal-800",
  },
];

export function WhatWeDo() {
  return (
    <section className="py-24 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We engage with communities through three main programmes, each designed to 
              foster understanding and build lasting connections.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Subtitle badge */}
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-3">
                    {service.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
