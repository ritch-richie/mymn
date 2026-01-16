import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/mymn-logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const projects = [
  { href: "/projects#open-days", label: "Open Days & Exhibitions" },
  { href: "/projects#schools", label: "School Visits" },
  { href: "/projects#mosque-tours", label: "Mosque Tours" },
  { href: "/projects#universities", label: "University Programs" },
];

export function Footer() {
  return (
    <footer className="gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Meet Your Muslim Neighbours" className="h-12 w-auto" />
              <div>
                <span className="text-lg font-bold">Meet Your Muslim</span>
                <span className="block text-sm font-semibold">Neighbours</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Building bridges and fostering understanding through community engagement and education since 2004.
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

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Projects</h4>
            <ul className="space-y-2">
              {projects.map((link) => (
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
