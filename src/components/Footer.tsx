import { GraduationCap, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const admissionLinks = [
  { label: "Apply Now", href: "#admissions" },
  { label: "Fee Structure", href: "#" },
  { label: "Scholarships", href: "#" },
  { label: "Campus Tour", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-tight py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">ABBBD School</p>
                <p className="text-xs text-primary-foreground/60">Noida</p>
              </div>
            </a>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Nurturing excellence and building future leaders since 1995. 
              Where education meets values.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-secondary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Admissions</h4>
            <ul className="space-y-3">
              {admissionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Contact Us</h4>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/70">
              <p>Sector 50, Noida,<br />Uttar Pradesh - 201301</p>
              <p>
                <a href="tel:+911204567890" className="hover:text-secondary transition-colors">
                  +91 120 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:info@abbbdschool.edu.in" className="hover:text-secondary transition-colors">
                  info@abbbdschool.edu.in
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} ABBBD School, Noida. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
