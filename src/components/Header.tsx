import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Courses", href: "#courses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Chancellor's Desk", href: "#chancellor" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-nav shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tight">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-xl font-semibold text-foreground tracking-tight">
                ABBBD School
              </p>
              <p className="text-xs text-muted-foreground tracking-wide">Noida</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("#admissions")}
              className="hidden sm:flex btn-secondary text-sm px-6 py-2 h-auto rounded-full font-medium"
            >
              Apply for Admission
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("#admissions")}
                className="btn-secondary mt-2 text-sm px-6 py-3 h-auto rounded-full font-medium"
              >
                Apply for Admission
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
