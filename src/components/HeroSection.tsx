import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="ABBBD School Campus Aerial View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-tight text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Admissions Open for 2025-26
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight tracking-tight mb-6"
          >
            Nurturing Excellence,
            <br />
            <span className="text-gradient-gold">Building Future Leaders</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ABBBD School, Noida — Where Education Meets Values. A legacy of
            academic excellence, cultural richness, and holistic development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection("#admissions")}
              className="btn-secondary px-8 py-4 h-auto text-base font-medium rounded-full"
            >
              Apply Now
            </Button>
            <Button
              onClick={() => scrollToSection("#gallery")}
              variant="ghost"
              className="group px-8 py-4 h-auto text-base font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-full border border-primary-foreground/20"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Campus
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              Discover More
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
