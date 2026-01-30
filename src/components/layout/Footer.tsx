import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/mymn-logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const locations = ["Manchester", "Liverpool", "Lancaster", "Leeds"];

export function Footer() {
  return (
    <footer className="gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Meet Your Muslim Neighbours" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Bridging communities and fostering understanding through dialogue, education, and cultural exchange since 2004.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Locations Served</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:info.mymn@gmail.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                info.mymn@gmail.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.instagram.com/meetyourmuslimneighbours/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/maboromymn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Meet Your Muslim Neighbours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
