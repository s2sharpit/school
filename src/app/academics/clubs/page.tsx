import { CTASection, HeroSection, OverviewSection } from "@/components";
import AcademicClubs from "./AcademicClubs";
import Technology from "./Technology";
import Environmental from "./Environmental";
import Activities from "./Activities";

export default function ClubsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Clubs & Societies"
        description="Platforms for students to pursue their interests and develop specialized skills"
        badge="Beyond Academics"
      />

      <OverviewSection
        title="Beyond Classroom Learning"
        para={[
          "At B. S. Sr. Sec. School, we believe that education extends beyond textbooks and classrooms. Our comprehensive extracurricular program is designed to nurture talents, build character, and develop essential life skills that complement academic learning.",
          "Through a diverse range of activities in arts, culture, leadership, and community service, we provide students with opportunities to discover their passions, develop their strengths, and grow into well-rounded individuals prepared for the challenges of the future.",
        ]}
        badge="Holistic Development"
        imageSrc="/img/school_building.jpg"
      />

      <AcademicClubs />
      <Technology />
      <Environmental />
      <Activities />

      <CTASection
        title="Join Our Clubs & Societies"
        description="Explore your interests, develop new skills, and connect with like-minded peers. Apply for admission today."
        primaryAction={{
          text: "Apply for Admission",
          href: "/admissions",
        }}
        secondaryAction={{
          text: "Contact Us",
          href: "/contact",
        }}
        imageSrc="/placeholder.svg?height=600&width=800"
      />
    </div>
  );
}
