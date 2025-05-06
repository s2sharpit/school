import DepartmentHeads from "./DepartmentHeads";
import FacultyGrid from "./FacultyGrid";
import { CTASection, HeroSection, OverviewSection } from "@/components";

export default function FacultyPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Our Faculty & Staff"
        description="Meet the dedicated professionals who make B. S. Sr. Sec. School a center of excellence."
        badge="Our Team"
      />

      <OverviewSection
        title="Experienced Educators, Passionate Mentors"
        badge="Our Team"
        para={[
          "At B. S. Sr. Sec. School, we take pride in our exceptional faculty and staff who are not just educators but mentors, guides, and role models for our students. Our team comprises highly qualified professionals with extensive experience in their respective fields.",
          "Our teachers are committed to providing a nurturing and stimulating learning environment where each student can thrive. They employ innovative teaching methodologies that make learning engaging and effective, helping students develop critical thinking skills and a love for learning.",
        ]}
        imageSrc="/img/school_building.jpg"
      />

      {/* <Leadership /> */}
      <DepartmentHeads />
      {/* <FacultyGrid /> */}
      {/* <SupportStaff /> */}

      <CTASection
        title="Join Our Team"
        description="We're always looking for passionate educators and support staff to join our team. If you're interested
                  in making a difference in students' lives, we'd love to hear from you."
        primaryAction={{
          text: "View Current Openings",
          href: "/careers",
        }}
        secondaryAction={{
          text: "Contact HR Department",
          href: "/contact",
        }}
      />
    </div>
  );
}
