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
    <div ref={ref} className="text-center px-6 py-4 md:px-8 md:py-6">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
        {displayValue}
      </div>
      <div className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[hsl(var(--cream))] rounded-full py-4 md:py-6 px-4 md:px-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              <StatItem end={100} suffix="+" label="Locations" />
              <StatItem end={328} label="Events" />
              <StatItem end={152} suffix="K+" label="Visitors" />
              <StatItem end={20} suffix="+" label="Years" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
