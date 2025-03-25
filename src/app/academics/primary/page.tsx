import { CTASection, HeroSection, OverviewSection } from "@/components";
import { CurriculumSection } from "../curriculum-section";
import TeachingMethodologySection from "./teaching-methodology-section";
import curriculumSections from "./curriculumSections.json";
import { ImageTextFeatureSection } from "@/components/image-text-feature-section";
import facilitiesFeatures from "./facilitiesFeatures.json";

export default function PrimaryEducationPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Primary Education"
        description="Building a strong foundation for lifelong learning (Classes I-V)"
        badge="Academic Programs"
      />

      <OverviewSection
        title="Nurturing Young Minds"
        para={[
          "Our primary education program focuses on building a strong foundation in core subjects while nurturing creativity and curiosity. We employ activity-based learning to make education enjoyable and effective for young learners.",
          "At this crucial stage of development, we emphasize not just academic learning but also character formation, social skills, and physical development. Our holistic approach ensures that children develop into well-rounded individuals with a love for learning.",
        ]}
        badge="Program Overview"
        imageSrc="/img/school_building.jpg"
      />

      <CurriculumSection
        badge="Curriculum"
        title="Comprehensive Learning Experience"
        description="Our curriculum is designed to develop essential skills and knowledge while fostering creativity and critical thinking."
        sections={curriculumSections}
      />

      <TeachingMethodologySection />
      
      <ImageTextFeatureSection
        badge="Learning Environment"
        title="Facilities for Primary Students"
        description="Our campus offers specialized facilities designed for young learners."
        imageSrc="/placeholder.svg?height=800&width=600"
        features={facilitiesFeatures}
      />

      <CTASection
        title="Enroll Your Child in Our Primary Program"
        description="Give your child the gift of quality education in a nurturing environment. Apply for admission to our primary section today."
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
