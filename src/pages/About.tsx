import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Eye, Award, Calendar, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: MapPin, value: "100+", label: "Locations Reached" },
  { icon: Calendar, value: "328", label: "Events Organised" },
  { icon: Users, value: "152K+", label: "Visitors Engaged" },
  { icon: Award, value: "20+", label: "Years of Service" },
];

const teamHighlights = [
  "Medical professionals",
  "Educators & teachers",
  "Engineers & IT specialists",
  "Business entrepreneurs",
  "Community leaders",
  "Volunteers from all walks of life",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Building bridges between communities through dialogue, 
              education, and genuine human connection since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Meet Your Muslim Neighbours was established in 2004 with a simple 
                    yet powerful mission: to create opportunities for meaningful dialogue 
                    between Muslim and non-Muslim communities.
                  </p>
                  <p>
                    What started as a small community initiative has grown into a 
                    comprehensive outreach program that has touched the lives of over 
                    152,000 visitors across more than 100 locations in the UK.
                  </p>
                  <p>
                    Our team comprises diverse professionals from all walks of life—
                    doctors, teachers, engineers, and entrepreneurs—all united by a 
                    shared commitment to fostering understanding and breaking down barriers.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-card border border-border text-center"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-10 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where all communities live together in mutual respect and 
                understanding, where differences are celebrated, and where meaningful 
                connections transcend cultural and religious boundaries.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-10 border border-border">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To promote dialogue and understanding between Muslim and non-Muslim 
                communities through educational programs, community events, and 
                personal engagement that showcases the true spirit of Islam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-8">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              We are a diverse group of dedicated volunteers who come together 
              to serve our communities. Our team includes:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teamHighlights.map((role) => (
                <div
                  key={role}
                  className="p-4 rounded-xl bg-secondary/50 text-foreground font-medium"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Want to be part of our mission? Get in touch to learn how you can 
            contribute to building bridges in your community.
          </p>
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
        </div>
      </section>
    </Layout>
  );
};

export default About;
