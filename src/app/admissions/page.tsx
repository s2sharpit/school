import Hero from "@/components/Hero";
import ApplicationProcess from "./ApplicationProcess";
import RequiredDocs from "./RequiredDocs";
import FeeStructure from "./FeeStructure";
import CTA from "@/components/CTA";
import FAQ from "./FAQ";
import Overview from "@/components/Overview";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Admissions"
        desc="Join our vibrant learning community. Find information about the admission process, requirements, and more."
        imgSrc="/img/school_building.jpg"
      />

      <Overview
        title="Begin Your Educational Journey With Us"
        para={[
          "At B. S. Sr. Sec. School, we welcome students from diverse backgrounds who demonstrate a passion for learning and personal growth. Our admission process is designed to be transparent and straightforward, ensuring that deserving students have the opportunity to benefit from our quality education.",
          "We admit students based on their academic potential, character, and alignment with our school's values. We believe in nurturing each student's unique talents and helping them develop into well-rounded individuals.",
        ]}
        badgeText="Admission Process"
        imageUrl="/img/school_building.jpg"
        primaryBtn={{ title: "Download Application Form", href: "#application-process" }}
      />
      <ApplicationProcess />
      <RequiredDocs />
      <FeeStructure />
      <FAQ />

      <CTA
        title="Ready to Apply?"
        desc="Take the first step towards providing your child with quality education. Download the application form
                  or contact our admissions office for assistance."
        secBtn={{ title: "Download Application Form", href: "#" }}
        outlineBtn={{ title: "Contact Admissions Office", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
