import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/mymn-logo.png";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/events", label: "News" },
  { href: "/contact", label: "Donate" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
              style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(30%) saturate(500%) hue-rotate(130deg) brightness(95%) contrast(90%)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              size="sm"
              className="rounded-lg px-6 text-sm bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/get-involved">Work With Us</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="mt-4 rounded-lg gradient-primary text-white"
                  onClick={() => setOpen(false)}
                >
                  <Link to="/get-involved">Work With Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
