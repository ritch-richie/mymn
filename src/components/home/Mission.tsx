import { Heart, Users, BookOpen, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Give Support",
    description:
      "Fostering genuine connections between people of all backgrounds and beliefs through community events.",
  },
  {
    icon: Users,
    title: "Build Understanding",
    description:
      "Promoting dialogue and education to break down barriers and misconceptions about Islam.",
  },
  {
    icon: BookOpen,
    title: "Share Knowledge",
    description:
      "Providing accurate information about Islam through interactive exhibitions and experiences.",
  },
  {
    icon: Handshake,
    title: "Join Together",
    description:
      "Working with schools, universities, and community organizations across the UK.",
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm uppercase tracking-wider">
            How We Make a Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How can <span className="text-primary">you</span> make a difference?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every act of support—whether attending an event, sharing knowledge, or simply opening a dialogue—brings 
            communities closer together. You're not just helping. You're changing perspectives.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="h-8 w-8 text-white" />
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
