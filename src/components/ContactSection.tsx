import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "ABBBD School, Sector 50, Noida,\nUttar Pradesh - 201301, India",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 120 456 7890\n+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    content: "admissions@abbbdschool.edu.in\ninfo@abbbdschool.edu.in",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 8:00 AM - 4:00 PM\nSaturday: 9:00 AM - 1:00 PM",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background">
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
            Get in Touch
          </h2>
          <p className="text-body-large">
            Visit our campus or reach out to us. We're here to answer all your
            queries about admissions and academics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <div key={info.title} className="card-premium p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line text-sm">
                  {info.content}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-medium h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5665437451395!2d77.37091231508096!3d28.614614382421663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a1b05a09c9%3A0x6aca79862ee5a7ed!2sSector%2050%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ABBBD School Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
