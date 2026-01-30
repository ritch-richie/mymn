import { Instagram, Facebook, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@meetyourmuslimneighbours",
    url: "https://www.instagram.com/meetyourmuslimneighbours/",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Facebook,
    name: "Facebook",
    handle: "Meet Your Muslim Neighbour",
    url: "https://www.facebook.com/maboromymn/",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Mail,
    name: "Email",
    handle: "info.mymn@gmail.com",
    url: "mailto:info.mymn@gmail.com",
    color: "from-teal-500 to-teal-400",
  },
];

export function SocialFollow() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Follow Us
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Stay up to date with our latest events and community initiatives
          </p>

          {/* Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl p-6 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <social.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {social.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
