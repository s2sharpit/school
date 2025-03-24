import Programs from "./Programs";
import ExtraCurricular from "./ExtraCurricular";
import Facilities from "./Facilities";
import { CTASection, HeroSection, OverviewSection } from "@/components";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Academic Programs"
        description="Discover our comprehensive educational offerings designed to nurture well-rounded individuals."
        badge="Excellence in Education"
      />

      <OverviewSection
        title="Comprehensive Education for Every Stage"
        para={[
          "At B. S. Sr. Sec. School, we offer a well-structured curriculum that caters to students from primary to senior secondary levels. Our academic programs are designed to foster critical thinking, creativity, and a love for learning while preparing students for future academic and professional success.",
          "Our experienced faculty employs innovative teaching methodologies that make learning engaging and effective. We maintain small class sizes to ensure personalized attention for each student, helping them reach their full potential.",
        ]}
        badge="Academic Excellence"
        imageSrc="/img/school_building.jpg"
      />
      <Programs />
      {/* <ExtraCurricular /> */}
      <Facilities />

      <CTASection
        title="Ready to Join Our Academic Community?"
        description="Take the first step towards a quality education that prepares your child for future success. Apply for
                  admission or contact us for more information."
        primaryAction={{
          text: "Apply Now",
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
