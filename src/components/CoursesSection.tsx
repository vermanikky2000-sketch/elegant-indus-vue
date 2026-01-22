import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Baby, BookOpen, GraduationCap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Baby,
    title: "Pre-Primary",
    grades: "Nursery - KG",
    description:
      "A nurturing environment where young minds begin their journey of discovery through play-based learning.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Primary",
    grades: "Class I - V",
    description:
      "Building strong foundations in literacy, numeracy, and essential life skills through engaging curriculum.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Middle School",
    grades: "Class VI - VIII",
    description:
      "Developing critical thinking and leadership skills while exploring diverse academic subjects.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Award,
    title: "Senior Secondary",
    grades: "Class IX - XII",
    description:
      "Preparing students for higher education and careers with specialized streams and competitive exam coaching.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding bg-muted/30">
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
            Academic Programs
          </h2>
          <p className="text-body-large">
            Comprehensive education from early childhood to senior secondary,
            designed to nurture every child's unique potential.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-premium p-6 flex flex-col"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <course.icon className={`w-7 h-7 ${course.iconColor}`} />
              </div>
              <h3 className="heading-subsection mb-2">{course.title}</h3>
              <p className="text-sm text-secondary font-medium mb-3">
                {course.grades}
              </p>
              <p className="text-body flex-grow mb-5">{course.description}</p>
              <Button
                variant="ghost"
                className="w-full justify-between p-0 h-auto text-primary hover:text-secondary group/btn"
              >
                <span className="font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="btn-primary">
            Download Curriculum Guide
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
