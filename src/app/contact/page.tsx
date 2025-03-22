import Hero from "@/components/Hero";
import MapForm from "./MapForm";
import FAQ from "./FAQ";
import CTA from "@/components/CTA";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        desc="We're here to help. Reach out to us with any questions or inquiries."
        imgSrc="/img/school_building.jpg"
      />

      {/* <ContactInfo /> */}
      <MapForm />
      <FAQ />

      <CTA
        title="Schedule a Visit"
        desc="Experience our campus firsthand. Schedule a visit to tour our facilities, meet our faculty, and learn
                  more about our programs."
        secBtn={{ title: "Apply for Admission", href: "/admissions" }}
        outlineBtn={{ title: "Call Us Now", href: "tel:+918901437877" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
