import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Give Support",
    description:
      "Fostering genuine connections between people of all backgrounds and beliefs through community events.",
    tags: ["Community", "Events"],
    link: "/events",
  },
  {
    icon: Users,
    title: "Build Understanding",
    description:
      "Promoting dialogue and education to break down barriers and misconceptions about Islam.",
    tags: ["Dialogue", "Education"],
    link: "/about",
  },
  {
    icon: BookOpen,
    title: "Share Knowledge",
    description:
      "Providing accurate information about Islam through interactive exhibitions and experiences.",
    tags: ["Exhibitions", "Learning"],
    link: "/events",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-6">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Providing Hope And Help
            <br />
            During Challenging Times
          </h2>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span>Learn More</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </Link>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <value.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {value.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-2">
                  {value.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={value.link}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
