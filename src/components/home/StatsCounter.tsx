import { useCountUp } from "@/hooks/useCountUp";

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function StatItem({ end, suffix = "", prefix = "", label }: StatItemProps) {
  const { ref, displayValue } = useCountUp({ end, suffix, prefix });

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
        {displayValue}
      </div>
      <div className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem end={100} suffix="+" label="Locations" />
          <StatItem end={328} label="Events" />
          <StatItem end={152} suffix="K+" label="Visitors" />
          <StatItem end={20} suffix="+" label="Years" />
        </div>
      </div>
    </section>
  );
}
