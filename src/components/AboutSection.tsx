import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, Heart } from "lucide-react";
import schoolGate from "@/assets/school-gate.jpg";

const stats = [
  { icon: Award, value: "30+", label: "Years of Excellence" },
  { icon: BookOpen, value: "5000+", label: "Students Enrolled" },
  { icon: Users, value: "200+", label: "Expert Faculty" },
  { icon: Heart, value: "100%", label: "Parent Satisfaction" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img
                src={schoolGate}
                alt="ABBBD School Main Gate"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl shadow-large">
              <p className="font-display text-3xl font-bold">Est. 1995</p>
              <p className="text-sm opacity-80">Legacy of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gold-accent mb-6" />
            <h2 className="heading-section mb-6">
              Our Story of
              <br />
              <span className="text-gradient-gold">Excellence & Values</span>
            </h2>
            <p className="text-body-large mb-6">
              Founded with a vision to blend the richness of Indian culture with
              world-class education, ABBBD School has been nurturing young minds
              for over three decades.
            </p>
            <p className="text-body mb-8">
              Our commitment to academic excellence, character building, and
              holistic development has made us one of the most trusted
              institutions in Noida. We believe in creating future leaders who
              are not only academically accomplished but also carry forward the
              values of respect, discipline, and service.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {["Academic Excellence", "Cultural Values", "Discipline", "Innovation"].map(
                (value, index) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card-premium p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
