import { CTASection, HeroSection, OverviewSection } from "@/components";
import Arts from "./arts";
import Clubs from "./clubs";
import Leadership from "./Leadership";
import Annual from "./Annual";

export default function ExtracurricularPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Extracurricular Activities"
        description="Developing well-rounded individuals through diverse activities beyond academics"
        badge="Beyond Academics"
      />

      <OverviewSection
        title="Beyond Classroom Learning"
        para={[
          "At B. S. Sr. Sec. School, we believe that education extends beyond textbooks and classrooms. Our comprehensive extracurricular program is designed to nurture talents, build character, and develop essential life skills that complement academic learning..",
          "Through a diverse range of activities in arts, culture, leadership, and community service, we provide students with opportunities to discover their passions, develop their strengths, and grow into well-rounded individuals prepared for the challenges of the future.",
        ]}
        badge="Holistic Development"
        imageSrc="/img/school_building.jpg"
      />

      <Arts />
      <Clubs />
      <Leadership />

      <Annual />

      <CTASection
        title="Discover Your Passion"
        description="Join our vibrant community and explore the diverse extracurricular opportunities we offer. Apply for admission today."
        primaryAction={{
          text: "Apply for Admission",
          href: "/admissions",
        }}
        secondaryAction={{
          text: "Contact Us",
          href: "/contact",
        }}
      />
    </div>
  );
}
