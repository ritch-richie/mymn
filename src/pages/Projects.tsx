import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, GraduationCap, Building, University, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "open-days",
    icon: Calendar,
    title: "Open Days & Exhibitions",
    subtitle: "Community Events in Public Venues",
    description:
      "Our Open Days and Exhibitions bring the Muslim community directly to the public. We set up interactive displays in community centres, libraries, shopping centres, and other public venues, creating spaces where people can learn about Islam in a relaxed, welcoming environment.",
    features: [
      "Interactive displays about Islamic art and culture",
      "Q&A sessions with community members",
      "Calligraphy demonstrations and workshops",
      "Information about Muslim daily life",
      "Free literature and educational materials",
    ],
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "School Visits",
    subtitle: "Educational Programs for Young Minds",
    description:
      "We provide comprehensive Religious Education (RE) lessons and assemblies for primary and secondary schools. Our sessions are designed to complement the national curriculum while providing students with authentic insights into Islam and Muslim life in Britain.",
    features: [
      "Curriculum-aligned RE lessons",
      "Interactive assemblies for all year groups",
      "Artefact handling sessions",
      "Q&A opportunities with Muslim speakers",
      "Support materials for teachers",
    ],
  },
  {
    id: "mosque-tours",
    icon: Building,
    title: "Mosque Tours",
    subtitle: "Explore Places of Worship",
    description:
      "Our mosque tours offer visitors the opportunity to experience a mosque first-hand. We participate in the national Visit My Mosque initiative and also arrange custom tours for schools, community groups, and organisations throughout the year.",
    features: [
      "Guided tours of local mosques",
      "Explanation of mosque architecture and features",
      "Understanding of Muslim prayer and worship",
      "Opportunity to meet the local Muslim community",
      "Suitable for all ages and group sizes",
    ],
  },
  {
    id: "universities",
    icon: University,
    title: "University Programs",
    subtitle: "Interfaith Dialogue in Higher Education",
    description:
      "We engage with university students through interfaith discussions, Discover Islam week events, and educational programs. These initiatives create spaces for intellectual exchange and meaningful dialogue among young adults.",
    features: [
      "Discover Islam week events",
      "Interfaith panel discussions",
      "Information stalls and exhibitions",
      "Engagement with Islamic societies",
      "Academic partnerships and collaborations",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Discover the diverse range of programs we offer to foster 
              understanding and build bridges in communities across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-primary font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Button asChild className="gradient-primary text-white">
                    <Link to="/contact">
                      Book This Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div
                  className={`bg-card rounded-2xl p-8 border border-border ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book a Program?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Whether you're a school, community group, or organisation, 
            we'd love to work with you. Get in touch to discuss your needs.
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

export default Projects;
