import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import classroom from "@/assets/classroom.jpg";
import sports from "@/assets/sports.jpg";
import annualDay from "@/assets/annual-day.jpg";
import library from "@/assets/library.jpg";

const studentLifeImages = [
  { src: classroom, title: "Classroom Learning" },
  { src: sports, title: "Sports & Athletics" },
  { src: annualDay, title: "Cultural Celebrations" },
  { src: library, title: "Library & Reading" },
];

const StudentLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="gold-accent mx-auto mb-6" />
          <h2 className="heading-section mb-6">
            Student Life at ABBBD
          </h2>
          <p className="text-body-large">
            Beyond academics, our students engage in sports, arts, cultural programs,
            and community service that shape well-rounded individuals.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {studentLifeImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-display text-lg font-semibold">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
