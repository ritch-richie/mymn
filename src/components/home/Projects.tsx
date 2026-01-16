import { Link } from "react-router-dom";
import { Calendar, GraduationCap, Building, University, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "open-days",
    icon: Calendar,
    title: "Open Days & Exhibitions",
    description:
      "Interactive community events held in public venues, showcasing Islamic art, culture, and providing Q&A opportunities.",
    link: "/projects#open-days",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "School Visits",
    description:
      "Educational RE lessons and assemblies for primary and secondary schools, enriching students' understanding of Islam.",
    link: "/projects#schools",
  },
  {
    id: "mosque-tours",
    icon: Building,
    title: "Mosque Tours",
    description:
      "Guided educational visits to local mosques, participating in Visit My Mosque national events and custom tours.",
    link: "/projects#mosque-tours",
  },
  {
    id: "universities",
    icon: University,
    title: "University Programs",
    description:
      "Engaging interfaith discussions and Discover Islam week events at universities across the region.",
    link: "/projects#universities",
  },
];

export function Projects() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We run a variety of programs designed to bring communities together 
            and foster meaningful dialogue about Islam and Muslim life in Britain.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <project.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gradient-primary text-white">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
