import { Heart, Users, BookOpen, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community",
    description:
      "Fostering genuine connections between people of all backgrounds and beliefs.",
  },
  {
    icon: Users,
    title: "Understanding",
    description:
      "Promoting dialogue and education to break down barriers and misconceptions.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "Providing accurate information about Islam through interactive experiences.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Working together with schools, universities, and community organizations.",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2004, Meet Your Muslim Neighbours has been committed to building bridges 
            between communities. We bring together diverse professionals—doctors, teachers, 
            engineers, and entrepreneurs—united by a common goal: fostering understanding 
            and meaningful connections.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
