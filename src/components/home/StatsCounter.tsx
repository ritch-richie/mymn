import { useCountUp } from "@/hooks/useCountUp";
import { Award } from "lucide-react";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: React.ElementType;
}

function StatItem({ end, suffix = "", prefix = "", label, icon: Icon }: StatItemProps) {
  const { ref, displayValue } = useCountUp({ end, suffix, prefix });

  return (
    <div 
      ref={ref} 
      className="bg-card rounded-2xl p-6 md:p-8 text-center border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
        {displayValue}
      </div>
      <div className="text-muted-foreground text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              We're on a mission to change that.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that sustainable change comes from open dialogue. Our local 
              partnerships help facilitate meaningful connections across communities.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center mb-10">
            <StatItem end={20} suffix="+" label="Years active" icon={Award} />
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
