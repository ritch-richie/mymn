import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/mymn-logo.png";

const getToKnowUs = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/events", label: "Events" },
];

const connect = [
  { href: "/contact", label: "Contact us" },
  { href: "/contact", label: "Request a visit" },
  { href: "/gallery", label: "Gallery" },
];

const getInvolved = [
  { href: "/contact", label: "Host an Exhibition" },
  { href: "/contact", label: "Book a School Visit" },
  { href: "/contact", label: "Volunteer" },
];

const donate = [
  { href: "/contact", label: "Make a donation" },
  { href: "/contact", label: "Become a sponsor" },
  { href: "/contact", label: "Support a project" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description - Hidden on mobile, shown on lg */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Meet Your Muslim Neighbours" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Bridging communities and fostering understanding since 2004.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/meetyourmuslimneighbours/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/maboromymn/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:info.mymn@gmail.com"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Get to Know Us */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Get to Know us</h4>
            <ul className="space-y-2">
              {getToKnowUs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              {connect.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Donate</h4>
            <ul className="space-y-2">
              {donate.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Meet Your Muslim Neighbours. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/50">
              <span>Serving Manchester, Liverpool, Lancaster & Leeds</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
