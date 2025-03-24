import MapForm from "./MapForm";
import FAQ from "./FAQ";
import { CTASection, HeroSection } from "@/components";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        description="We're here to help. Reach out to us with any questions or inquiries."
        badge="Get In Touch"
      />

      {/* <ContactInfo /> */}
      <MapForm />
      <FAQ />

      <CTASection
        title="Schedule a Visit"
        description="Experience our campus firsthand. Schedule a visit to tour our facilities, meet our faculty, and learn
                  more about our programs."
        primaryAction={{
          text: "Apply for Admission",
          href: "/admissions",
        }}
        secondaryAction={{
          text: "Call Us Now",
          href: "tel:+918901437877",
        }}
      />
    </div>
  );
}
