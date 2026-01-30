import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mymn-logo.png";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "News" },
  { href: "/contact", label: "Donate" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Site Name */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Meet Your Muslim Neighbours" 
              className="h-10 w-auto" 
            />
            <span className="font-semibold text-foreground text-lg hidden sm:inline">
              Meet Your Muslim Neighbour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
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
              className="rounded-lg px-6 bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/get-involved">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                    isActive(link.href) 
                      ? "text-foreground bg-secondary" 
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild 
                className="mt-2 rounded-lg bg-foreground text-background hover:bg-foreground/90"
              >
                <Link to="/get-involved" onClick={() => setIsOpen(false)}>
                  Work With Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
