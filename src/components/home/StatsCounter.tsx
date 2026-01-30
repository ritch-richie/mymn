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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {displayValue}
      </div>
      <div className="text-white/70 text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={100} suffix="+" label="Locations" />
          <StatItem end={328} label="Events" />
          <StatItem end={152} suffix="K+" label="Visitors" />
          <StatItem end={20} suffix="+" label="Years" />
        </div>
      </div>
    </section>
  );
}
