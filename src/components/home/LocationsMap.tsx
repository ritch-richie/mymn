import { MapPin } from "lucide-react";

// Positions are approximate percentages on the UK map SVG
const cities = [
  { name: "Manchester", x: 48, y: 58, description: "Our headquarters and largest community hub" },
  { name: "Liverpool", x: 44, y: 59, description: "Active school visits and mosque tours" },
  { name: "Lancaster", x: 46, y: 52, description: "University programs and community events" },
  { name: "Leeds", x: 52, y: 57, description: "Exhibitions and interfaith dialogue" },
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
                className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform hover:scale-[1.02] transition-transform duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(5deg) rotateY(-5deg)',
                }}
              >
                {/* UK Map */}
                <div className="relative aspect-[3/4]">
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    <defs>
                      <linearGradient id="ukGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(175, 100%, 33%)" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="hsl(175, 100%, 25%)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(175, 100%, 18%)" stopOpacity="0.25" />
                      </linearGradient>
                      <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(175, 100%, 45%)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(175, 100%, 33%)" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    
                    {/* Simplified UK outline */}
                    <path 
                      d="M45,5 L50,3 L55,5 L58,8 L60,12 L58,15 L62,18 L65,22 L63,28 L60,25 L58,28 L60,32 L58,35 L62,38 L65,42 L68,48 L70,55 L72,62 L70,68 L68,72 L65,78 L62,82 L58,88 L55,92 L52,98 L50,102 L48,106 L45,110 L42,115 L38,118 L35,115 L32,110 L30,105 L28,100 L25,95 L22,90 L20,85 L18,80 L20,75 L22,70 L25,65 L28,60 L30,55 L28,50 L25,45 L22,40 L20,35 L22,30 L25,25 L28,20 L32,15 L35,10 L40,7 L45,5 Z"
                      fill="url(#ukGradient)"
                      stroke="hsl(175, 100%, 33%)"
                      strokeWidth="0.8"
                      strokeOpacity="0.5"
                    />
                    
                    {/* Scotland */}
                    <path 
                      d="M35,5 L40,2 L48,3 L52,5 L55,8 L52,12 L48,15 L45,18 L42,22 L38,25 L35,22 L32,18 L30,12 L32,8 L35,5 Z"
                      fill="url(#ukGradient)"
                      stroke="hsl(175, 100%, 33%)"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                    
                    {/* Wales bulge */}
                    <path 
                      d="M28,78 L25,82 L22,85 L20,82 L22,78 L25,75 L28,78 Z"
                      fill="url(#ukGradient)"
                      stroke="hsl(175, 100%, 33%)"
                      strokeWidth="0.5"
                      strokeOpacity="0.3"
                    />
                    
                    {/* North West England highlight region */}
                    <ellipse 
                      cx="47" 
                      cy="73" 
                      rx="12" 
                      ry="10"
                      fill="url(#highlightGradient)"
                      stroke="hsl(175, 100%, 45%)"
                      strokeWidth="1"
                      strokeDasharray="3,2"
                      className="animate-pulse"
                    />
                    
                    {/* "North West" label */}
                    <text x="47" y="85" textAnchor="middle" fontSize="4" fill="hsl(175, 100%, 33%)" fontWeight="600">
                      North West
                    </text>
                  </svg>
                  
                  {/* City pins */}
                  {cities.map((city, index) => (
                    <div
                      key={city.name}
                      className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer z-10"
                      style={{ 
                        left: `${city.x}%`, 
                        top: `${city.y}%`,
                        animation: `bounce 2s ease-in-out ${index * 0.2}s infinite`,
                      }}
                    >
                      {/* Pin shadow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-black/20 rounded-full blur-sm" />
                      
                      {/* Pin */}
                      <div className="relative">
                        <div className="w-6 h-6 md:w-7 md:h-7 rounded-full gradient-primary flex items-center justify-center shadow-[0_4px_15px_rgba(0,167,157,0.5)] group-hover:scale-125 transition-transform">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white" fill="white" />
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                      </div>
                      
                      {/* City label on hover */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] md:text-xs font-semibold text-foreground bg-background/95 px-2 py-1 rounded-full shadow-lg border border-border">
                          {city.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* 3D effect overlay */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-4 py-2 rounded-full shadow-lg border border-border">
                <span className="text-sm font-medium text-primary">United Kingdom</span>
              </div>
            </div>

            {/* City list */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Locations</h3>
              {cities.map((city, index) => (
                <div 
                  key={city.name}
                  className="group bg-card rounded-2xl p-5 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:border-primary/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-[0_8px_25px_rgba(0,167,157,0.4)] group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {city.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
          50% { transform: translate(-50%, -100%) translateY(-4px); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
