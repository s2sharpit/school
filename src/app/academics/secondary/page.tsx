import { CTASection, HeroSection, OverviewSection } from "@/components";
import Teaching from "./teaching";
import { CurriculumSection } from "../curriculum-section";
import curriculumSections from "./curriculumSections.json"
import boardFeatures from "./boardFeatures.json"
import { ImageTextFeatureSection } from "@/components/image-text-feature-section";


export default function SecondaryEducationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Secondary Education"
        description="Preparing students for academic excellence and future success (Classes VI-X)"
        badge="Academic Programs"
      />

      <OverviewSection
        title="Building Knowledge and Skills"
        para={[
          "Our secondary education program offers a comprehensive curriculum that prepares students for board examinations while developing critical thinking and analytical skills through practical applications.",
          "During these formative years, we focus on deepening students' understanding of core subjects, introducing specialized disciplines, and helping them discover their strengths and interests. Our approach balances academic rigor with opportunities for personal growth and exploration.",
        ]}
        badge="Program Overview"
        imageSrc="/img/school_building.jpg"
      />

      <CurriculumSection
        badge="Curriculum"
        title="CBSE Curriculum with Enhanced Learning"
        description="Our curriculum follows CBSE guidelines with additional enrichment to ensure comprehensive development."
        sections={curriculumSections}
      />

      <Teaching />
      
      <ImageTextFeatureSection
        badge="Board Examinations"
        title="Preparation for CBSE Class X Board Exams"
        description="Our approach ensures students are well-prepared for their first board exams."
        imageSrc="/placeholder.svg?height=800&width=600"
        features={boardFeatures}
      />

      <CTASection
        title="Join Our Secondary Education Program"
        description="Provide your child with a strong academic foundation and holistic development. Apply for admission to our secondary section today."
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
