import { MapPin } from "lucide-react";

const cities = [
  { name: "Manchester", x: 55, y: 65, description: "Our headquarters and largest community hub" },
  { name: "Liverpool", x: 35, y: 60, description: "Active school visits and mosque tours" },
  { name: "Lancaster", x: 45, y: 25, description: "University programs and community events" },
  { name: "Leeds", x: 75, y: 55, description: "Exhibitions and interfaith dialogue" },
];

export function LocationsMap() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving Communities Across the North West
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're active in four major cities, bringing our exhibitions, school visits, 
            and community events to communities throughout the region.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Map */}
            <div className="relative perspective-1000">
              <div 
                className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform hover:scale-[1.02] transition-transform duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(5deg) rotateY(-5deg)',
                }}
              >
                {/* Map background - stylized UK North West */}
                <div className="relative aspect-square">
                  {/* Background gradient representing land */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Stylized North West England shape */}
                    <defs>
                      <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(175, 100%, 33%)" stopOpacity="0.15" />
                        <stop offset="50%" stopColor="hsl(175, 100%, 25%)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="hsl(175, 100%, 18%)" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Stylized region outline */}
                    <path 
                      d="M20,10 Q30,5 45,8 L60,5 Q80,10 85,25 L90,45 Q88,60 80,75 L70,85 Q55,92 40,88 L25,85 Q12,75 10,55 L8,35 Q10,18 20,10 Z"
                      fill="url(#landGradient)"
                      stroke="hsl(175, 100%, 33%)"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                    
                    {/* Grid lines for 3D effect */}
                    {[20, 40, 60, 80].map((pos) => (
                      <g key={pos}>
                        <line x1={pos} y1="0" x2={pos} y2="100" stroke="hsl(175, 100%, 33%)" strokeWidth="0.2" strokeOpacity="0.2" />
                        <line x1="0" y1={pos} x2="100" y2={pos} stroke="hsl(175, 100%, 33%)" strokeWidth="0.2" strokeOpacity="0.2" />
                      </g>
                    ))}
                    
                    {/* Connection lines between cities */}
                    <g stroke="hsl(175, 100%, 33%)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2,2">
                      <line x1="55" y1="65" x2="35" y2="60" />
                      <line x1="55" y1="65" x2="75" y2="55" />
                      <line x1="55" y1="65" x2="45" y2="25" />
                      <line x1="35" y1="60" x2="45" y2="25" />
                    </g>
                  </svg>
                  
                  {/* City pins */}
                  {cities.map((city, index) => (
                    <div
                      key={city.name}
                      className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer"
                      style={{ 
                        left: `${city.x}%`, 
                        top: `${city.y}%`,
                        animation: `bounce 2s ease-in-out ${index * 0.2}s infinite`,
                      }}
                    >
                      {/* Pin shadow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
                      
                      {/* Pin */}
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shadow-[0_4px_15px_rgba(0,167,157,0.5)] group-hover:scale-125 transition-transform">
                          <MapPin className="h-4 w-4 text-white" fill="white" />
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                      </div>
                      
                      {/* City label */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 whitespace-nowrap">
                        <span className="text-xs font-semibold text-foreground bg-background/90 px-2 py-1 rounded-full shadow-md">
                          {city.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 3D effect shadow layer */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                  style={{ transform: 'translateZ(20px)' }}
                />
              </div>
            </div>

            {/* City list */}
            <div className="space-y-6">
              {cities.map((city, index) => (
                <div 
                  key={city.name}
                  className="group bg-card rounded-2xl p-6 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-[0_8px_25px_rgba(0,167,157,0.4)] group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {city.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {city.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, -100%) translateY(0); }
          50% { transform: translate(-50%, -100%) translateY(-5px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
