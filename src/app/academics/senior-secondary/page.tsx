import { CTASection, HeroSection, OverviewSection } from "@/components";
import Stream from "./stream-section";
import careerFeatures from "./careerFeatures.json";
import { ImageTextFeatureSection } from "@/components/image-text-feature-section";

export default function SeniorSecondaryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Senior Secondary Education"
        description="Specialized streams preparing students for higher education and career success (Classes XI-XII)"
        badge="Academic Programs"
      />

      <OverviewSection
        title="Specialized Education for Future Success"
        para={[
          "Our Senior Secondary program offers specialized streams in Science, Commerce, and Arts, providing students with in-depth knowledge and skills in their chosen fields. This crucial phase prepares students for higher education and future careers through rigorous academics and practical exposure.",
          "With expert faculty, well-equipped laboratories, and comprehensive career guidance, we ensure that our students are well-prepared for competitive examinations and university admissions. Our approach balances academic excellence with holistic development, helping students make informed choices about their future.",
        ]}
        badge="Program Overview"
        imageSrc="/programs/senior-secondary.jpg"
      />

      <Stream />

      <ImageTextFeatureSection
        badge="Board Examinations"
        title="Preparation for CBSE Class XII Board Exams"
        description="Our approach ensures students are well-prepared for their first board exams."
        imageSrc="/img/campus.jpg"
        features={careerFeatures}
      />
      
      {/* <Academic /> */}

      <CTASection
        title="Join Our Senior Secondary Program"
        description="Take the next step towards a successful academic and professional future. Apply for admission to our senior secondary section today."
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
