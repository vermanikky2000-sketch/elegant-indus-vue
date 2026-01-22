import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Aarav, Class VIII",
    content:
      "ABBBD School has been transformative for my son. The teachers go above and beyond, and the emphasis on values alongside academics is exactly what we were looking for. The regular parent-teacher interactions keep us involved in our child's progress.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    role: "Alumni, Batch of 2018",
    content:
      "The foundation I received at ABBBD helped me crack IIT JEE and excel in college. The discipline, study habits, and problem-solving skills I developed here have been invaluable. Forever grateful to my teachers.",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "Parent of Diya, Class III",
    content:
      "The pre-primary and primary sections are exceptional. My daughter loves going to school every day. The activity-based learning approach makes education fun, and I've seen tremendous growth in her confidence and communication skills.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Parent of Arjun, Class X",
    content:
      "What sets ABBBD apart is their holistic approach. My son excels not just in academics but also in sports and cultural activities. The school truly nurtures all-round development, and the infrastructure is world-class.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
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
            What Parents & Students Say
          </h2>
          <p className="text-body-large">
            Hear from our community about their experience at ABBBD School.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="card-premium p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-secondary/20" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>

            {/* Content */}
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-display italic"
            >
              "{testimonials[currentIndex].content}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="font-display text-xl font-semibold text-secondary">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              className="w-12 h-12 rounded-full bg-card hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-secondary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              className="w-12 h-12 rounded-full bg-card hover:bg-muted"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
