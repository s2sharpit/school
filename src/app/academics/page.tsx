import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Programs from "./Programs";
import ExtraCurricular from "./ExtraCurricular";
import Facilities from "./Facilities";
import CTA from "@/components/CTA";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Academic Programs"
        desc="Discover our comprehensive educational offerings designed to nurture well-rounded individuals."
        imgSrc="/img/school_building.jpg"
      />

      <Overview
        title="Comprehensive Education for Every Stage"
        para={[
          "At B. S. Sr. Sec. School, we offer a well-structured curriculum that caters to students from primary to senior secondary levels. Our academic programs are designed to foster critical thinking, creativity, and a love for learning while preparing students for future academic and professional success.",
          "Our experienced faculty employs innovative teaching methodologies that make learning engaging and effective. We maintain small class sizes to ensure personalized attention for each student, helping them reach their full potential.",
        ]}
        badgeText="Academic Excellence"
        imageUrl="/img/school_building.jpg"
      />
      <Programs />
      <ExtraCurricular />
      <Facilities />

      <CTA
        title="Ready to Join Our Academic Community?"
        desc="Take the first step towards a quality education that prepares your child for future success. Apply for
                  admission or contact us for more information."
        secBtn={{ title: "Apply Now", href: "/admissions" }}
        outlineBtn={{ title: "Contact Us", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
