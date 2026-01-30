import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "An eye-opening experience that encouraged respectful and honest dialogue. The exhibition really helped our students understand Islamic culture better.",
    author: "Sarah Thompson",
    role: "Head of RE, Manchester Academy",
  },
  {
    quote: "Exactly the kind of engagement our students needed. The volunteers were incredibly knowledgeable and patient with all our questions.",
    author: "James Wilson",
    role: "Deputy Head, Liverpool College",
  },
  {
    quote: "Warm, informative, and incredibly well presented. I learned so much about my Muslim neighbours that I never knew before.",
    author: "Margaret Chen",
    role: "Community Visitor, Leeds",
  },
  {
    quote: "A truly professional exhibition that rivals any major museum display. The attention to detail and educational content was exceptional.",
    author: "Dr. Robert Hughes",
    role: "Museum Director, Lancaster",
  },
  {
    quote: "Our council has worked with MYMN multiple times. They consistently deliver high-quality, sensitive, and engaging events.",
    author: "Councillor Amira Patel",
    role: "Community Cohesion Lead",
  },
  {
    quote: "The school visit was the highlight of our RE curriculum this year. Students are still talking about what they learned weeks later.",
    author: "Emma Richards",
    role: "RE Teacher, Salford",
  },
  {
    quote: "Breaking down barriers one conversation at a time. This is exactly what our divided society needs more of.",
    author: "Rev. David Clarke",
    role: "Interfaith Dialogue Coordinator",
  },
  {
    quote: "I came with many misconceptions and left with genuine understanding. Thank you for your patience and openness.",
    author: "Linda Morrison",
    role: "Exhibition Visitor",
  },
  {
    quote: "The volunteers made complex theological topics accessible and interesting. A model for community education.",
    author: "Prof. Michael Brown",
    role: "University of Manchester",
  },
  {
    quote: "An invaluable resource for promoting community cohesion. We recommend MYMN to every school in our network.",
    author: "Karen Smith",
    role: "Education Consultant",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What People Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from teachers, community leaders, and visitors who have experienced our events.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              
              {/* Quote text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary row - smaller cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {testimonials.slice(6).map((testimonial, index) => (
            <div 
              key={index + 6}
              className="bg-card/50 rounded-xl px-5 py-4 border border-border/50 max-w-sm"
            >
              <p className="text-sm text-muted-foreground italic mb-2">
                "{testimonial.quote.substring(0, 80)}..."
              </p>
              <p className="text-xs font-medium text-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
