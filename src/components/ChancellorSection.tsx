import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import chancellorImage from "@/assets/chancellor.jpg";

const ChancellorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chancellor" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl -z-10" />
              <img
                src={chancellorImage}
                alt="Chancellor of ABBBD School"
                className="w-full max-w-md mx-auto rounded-3xl shadow-large object-cover aspect-[3/4]"
              />
            </div>
            {/* Quote Icon */}
            <div className="absolute -top-4 -right-4 md:top-4 md:right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-medium">
              <Quote className="w-8 h-8 text-secondary-foreground" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="gold-accent mb-6" />
            <h2 className="heading-section mb-8">
              Message from the
              <br />
              <span className="text-gradient-gold">Chancellor</span>
            </h2>
            
            <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
              "Education is not merely the acquisition of knowledge but the
              cultivation of character, values, and a lifelong love for learning.
              At ABBBD School, we are committed to nurturing students who will not
              only excel academically but also become responsible citizens and
              compassionate human beings."
            </blockquote>

            <p className="text-body mb-8">
              Our vision is to create an educational ecosystem that blends the
              timeless wisdom of Indian culture with modern pedagogical practices.
              We believe every child has unique potential, and our mission is to
              help them discover and develop it fully.
            </p>

            <div className="border-l-4 border-secondary pl-6">
              <p className="font-display text-xl font-semibold text-foreground">
                Dr. Rajendra Kumar Sharma
              </p>
              <p className="text-muted-foreground">
                Chancellor, ABBBD School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChancellorSection;
