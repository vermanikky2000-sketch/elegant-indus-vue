import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";
import annualDay from "@/assets/annual-day.jpg";

const galleryImages = [
  {
    src: heroCampus,
    alt: "Aerial View of Campus",
    title: "Campus Overview",
    size: "large",
  },
  {
    src: classroom,
    alt: "Modern Classroom",
    title: "Smart Classrooms",
    size: "small",
  },
  {
    src: scienceLab,
    alt: "Science Laboratory",
    title: "Science Labs",
    size: "small",
  },
  {
    src: sports,
    alt: "Sports Ground",
    title: "Sports Facilities",
    size: "medium",
  },
  {
    src: library,
    alt: "School Library",
    title: "Library",
    size: "medium",
  },
  {
    src: annualDay,
    alt: "Annual Day Celebration",
    title: "Cultural Events",
    size: "large",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
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
            Campus & Infrastructure
          </h2>
          <p className="text-body-large">
            State-of-the-art facilities designed to inspire learning, creativity,
            and all-round development.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                image.size === "large"
                  ? "col-span-2 row-span-2 aspect-[16/10]"
                  : image.size === "medium"
                  ? "col-span-1 row-span-1 aspect-square md:aspect-[4/3]"
                  : "col-span-1 row-span-1 aspect-square"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary-foreground font-display text-lg md:text-xl font-semibold">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-large"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground font-display text-xl">
              {selectedImage.title}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
