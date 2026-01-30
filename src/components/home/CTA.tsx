import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, School, Users } from "lucide-react";

const bookingOptions = [
  {
    icon: Calendar,
    title: "Book an Exhibition",
    description: "Host our interactive exhibition at your venue",
    link: "/contact",
  },
  {
    icon: School,
    title: "Book a School Visit",
    description: "Educational visits for students of all ages",
    link: "/contact",
  },
  {
    icon: Users,
    title: "Book Outreach Event",
    description: "Community engagement and dialogue sessions",
    link: "/contact",
  },
];

export function CTA() {
  return (
    <section className="py-24 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Want to <span className="text-primary">Book an Event</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a school looking to book a visit, a community group wanting 
            to arrange a mosque tour, or simply curious to learn more—we'd love to hear from you.
          </p>
        </div>

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bookingOptions.map((option) => (
            <Link
              key={option.title}
              to={option.link}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <option.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-between">
                {option.title}
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-muted-foreground">
                {option.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
