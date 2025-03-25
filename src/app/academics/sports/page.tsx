import { CTASection, HeroSection, OverviewSection } from "@/components";
import SportsFacilities from "./sports-facilities";
export default function SportsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Sports & Physical Education"
        description="Building physical fitness, teamwork, and sportsmanship through diverse sporting activities"
        badge="Beyond Academics"
      />

      <OverviewSection
        title="Sports Excellence Program"
        para={[
          "At B. S. Sr. Sec. School, we believe that physical education is an essential component of holistic development. Our comprehensive sports program is designed to promote physical fitness, teamwork, discipline, and sportsmanship among students.",
          "With state-of-the-art facilities, qualified coaches, and regular training sessions, we provide students with opportunities to excel in various sports at the school, district, state, and national levels. Our approach balances recreational sports for all students with specialized training for those who show exceptional talent.",
        ]}
        badge="Physical Development"
        imageSrc="/img/school_building.jpg"
      />

      <SportsFacilities />

      <CTASection
        title="Join Our Sports Program"
        description="Develop physical fitness, teamwork, and sportsmanship through our comprehensive sports program. Apply for admission today."
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
