import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "News" },
  { href: "/contact", label: "Donate" },
];

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <img 
              src={logo} 
              alt="Meet Your Muslim Neighbours" 
              className="h-8 md:h-10 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(459%) hue-rotate(127deg) brightness(93%) contrast(101%)' }}
            />
          </Link>

          {/* Navigation - Always visible */}
          <div className="flex items-center gap-3 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs md:text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              size="sm"
              className="rounded-lg px-3 md:px-6 text-xs md:text-sm bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/get-involved">Work With Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
