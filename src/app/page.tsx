import Hero from "@/components/landing/Hero";
import QuickINfo from "@/components/landing/QuickINfo";
import Programs from "@/components/landing/Programs";
import Testimonials from "@/components/landing/Testimonials";
import NewsEvents from "@/components/landing/NewsEvents";
import CTA from "@/components/CTA";
import Overview from "@/components/Overview";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickINfo />

      <Overview
        title="Nurturing Excellence Since 2001"
        para={[
          "B. S. Sr. Sec. School is committed to providing quality education that nurtures academic excellence, character development, and holistic growth. Our dedicated faculty and state-of-the-art facilities create an environment where students can thrive and reach their full potential.",
        ]}
        badgeText="About Our School"
        imageUrl="/img/school_building.jpg"
        highlights={[
          { value: "500+", label: "Students" },
          { value: "30+", label: "Faculty Members" },
          { value: "95%", label: "Success Rate" },
          { value: "20+", label: "Years of Excellence" },
        ]}
        primaryBtn={{ title: "Learn More About Us", href: "/about" }}
      />

      <Programs />
      <Testimonials />
      <NewsEvents />
      <CTA
        title="Ready to Join Our School?"
        desc="Take the first step towards providing your child with quality education. Apply for admission or
                  schedule a visit to our campus."
        secBtn={{ title: "Apply Now", href: "/admissions" }}
        outlineBtn={{ title: "Contact Us", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
