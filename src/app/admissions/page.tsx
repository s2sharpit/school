import ApplicationProcess from "./ApplicationProcess";
import RequiredDocs from "./RequiredDocs";
import FAQ from "./FAQ";
import { CTASection, HeroSection, OverviewSection } from "@/components";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Admissions"
        description="Join our vibrant learning community. Find information about the admission process, requirements, and more."
        badge="Join Our School"
      />

      <OverviewSection
        title="Begin Your Educational Journey With Us"
        para={[
          "At B. S. Sr. Sec. School, we welcome students from diverse backgrounds who demonstrate a passion for learning and personal growth. Our admission process is designed to be transparent and straightforward, ensuring that deserving students have the opportunity to benefit from our quality education.",
          "We admit students based on their academic potential, character, and alignment with our school's values. We believe in nurturing each student's unique talents and helping them develop into well-rounded individuals.",
        ]}
        badge="Admission Process"
        imageSrc="/img/school_building.jpg"
        primaryAction={{
          text: "Download Application Form",
          href: "/admission_form.pdf",
        }}
      />
      <ApplicationProcess />
      <RequiredDocs />
      {/* <FeeStructure /> */}
      <FAQ />

      <CTASection
        title="Ready to Apply?"
        description="Take the first step towards providing your child with quality education. Download the application form
                  or contact our admissions office for assistance."
        primaryAction={{
          text: "Download Application Form",
          href: "#",
        }}
        secondaryAction={{
          text: "Contact Admissions Office",
          href: "/contact",
        }}
      />
    </div>
  );
}
