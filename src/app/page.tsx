import Programs from "@/components/landing/Programs";
import Testimonials from "@/components/landing/Testimonials";
import { CTASection, OverviewSection } from "@/components";
import {GallerySection, LandingHeroSection} from "@/components/landing";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <LandingHeroSection />
      {/* <QuickINfo /> */}

      <OverviewSection
        title="Nurturing Excellence Since 2001"
        para={[
          "B. S. Sr. Sec. School is committed to providing quality education that nurtures academic excellence, character development, and holistic growth. Our dedicated faculty and state-of-the-art facilities create an environment where students can thrive and reach their full potential.",
        ]}
        badge="About Our School"
        imageSrc="/img/schoolPhoto1.jpg"
        highlights={[
          { value: "800+", label: "Students" },
          { value: "30+", label: "Faculty Members" },
          { value: "95%", label: "Success Rate" },
          { value: "20+", label: "Years of Excellence" },
        ]}
        primaryAction={{ text: "Learn More About Us", href: "/about" }}
      />

      <Programs />
      <GallerySection />
      <Testimonials />
      {/* <NewsEvents /> */}

      <CTASection
        title="Ready to Join Our School?"
        description="Take the first step towards providing your child with quality education. Apply for admission or schedule a visit to our campus."
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
