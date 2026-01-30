import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import logo from "@/assets/mymn-logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Our Events" },
  { href: "/about", label: "About Us" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isScrolled } = useScrollPosition();

  const isActive = (path: string) => location.pathname === path;
  
  // Check if we're on a page with dark hero (home page)
  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !isOpen;

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main nav */}
      <nav 
        className={`transition-all duration-300 ${
          isTransparent 
            ? "bg-transparent" 
            : "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Meet Your Muslim Neighbours" 
                className={`h-12 w-auto transition-all duration-300 ${
                  isTransparent ? "brightness-0 invert" : ""
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive(link.href)
                      ? isTransparent 
                        ? "text-white bg-white/10" 
                        : "text-primary bg-secondary"
                      : isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side: Email + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a 
                href="mailto:info@mymn.org.uk" 
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isTransparent 
                    ? "text-white/70 hover:text-white" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Mail className="h-4 w-4" />
                <span>info@mymn.org.uk</span>
              </a>
              <Button 
                asChild 
                className={`rounded-full px-6 transition-all duration-300 ${
                  isTransparent 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : "gradient-primary text-white"
                }`}
              >
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isTransparent ? "text-white" : "text-foreground"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md -mx-4 px-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 text-base font-medium transition-colors rounded-lg ${
                      isActive(link.href) 
                        ? "text-primary bg-secondary" 
                        : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a 
                  href="mailto:info@mymn.org.uk" 
                  className="flex items-center gap-2 px-4 py-3 text-base text-muted-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@mymn.org.uk</span>
                </a>
                <Button asChild className="gradient-primary text-white mt-2 rounded-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
