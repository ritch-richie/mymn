import { useCountUp } from "@/hooks/useCountUp";
import { MapPin, Calendar, Users, Award } from "lucide-react";

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
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1">
        {displayValue}
      </div>
      <div className="text-white/80 text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              We're on a mission to change that.
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We believe that sustainable change comes from open dialogue. Our local 
              partnerships help facilitate meaningful connections across communities.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            <StatItem end={100} suffix="+" label="Locations visited" icon={MapPin} />
            <StatItem end={328} label="Events hosted" icon={Calendar} />
            <StatItem end={152} suffix="K+" label="People reached" icon={Users} />
            <StatItem end={20} suffix="+" label="Years active" icon={Award} />
          </div>

          {/* Learn More Button */}
          <div className="text-center">
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
