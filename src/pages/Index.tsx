import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import GallerySection from "@/components/GallerySection";
import StudentLifeSection from "@/components/StudentLifeSection";
import ChancellorSection from "@/components/ChancellorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionSection from "@/components/AdmissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <GallerySection />
        <StudentLifeSection />
        <ChancellorSection />
        <TestimonialsSection />
        <AdmissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
