import { CTASection } from "@/components/cta-section"
import { SchoolInfoSection } from "./SchoolInfo"
import { DocumentsSection } from "./DocumentsList"
import { InfrastructureSection } from "./AdditionalInfo"
import { HeroSection } from "@/components"

// Document categories and items
const documents = {
  mandatory: [
    { name: "CBSE Affiliation Certificate", file: "cbse-affiliation.pdf" },
    // { name: "Society Certificate", file: "society-certificate.pdf" },
    // { name: "School NOC from State Government", file: "school-noc.pdf" }, // no need
    // { name: "Recognition Certificate under RTE Act", file: "rte-certificate.pdf" },
    { name: "Building Safety Certificate", file: "building-safety.pdf" },
    { name: "Fire Safety Certificate", file: "fire-safety.pdf" },
    { name: "Self Certification", file: "self-certification.pdf" },
    { name: "Water & Sanitation Certificate", file: "sanitation-certificate.pdf" },
  ],
  academic: [
    { name: "Fee Structure", file: "fee-structure.pdf" },
    { name: "Academic Calendar", file: "academic-calender.pdf" },
    { name: "School Management Committee (SMC)", file: "smc.pdf" },
    { name: "Parents Teachers Association (PTA)", file: "pta.pdf" },
    { name: "Last Three-Year Academic Result", file: "result.pdf" },
  ],
}

export default function PublicDisclosurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Public Disclosure"
        description="In compliance with CBSE regulations, we provide transparent access to all mandatory documents."
        badge="Transparency & Compliance"
      />

      {/* School Information Section */}
      <SchoolInfoSection />

      {/* Mandatory Documents Section */}
      <DocumentsSection
        badge="Mandatory Disclosure"
        title="Mandatory Documents"
        description="Essential documents as required by CBSE and regulatory authorities."
        documents={documents.mandatory}
      />

      {/* Academic Documents Section */}
      {/* <DocumentsSection
        badge="Academic Information"
        title="Academic Documents"
        description="Important academic information and documents for parents and students."
        documents={documents.academic}
      /> */}

      {/* Additional Information Section */}
      <InfrastructureSection />

      {/* CTA Section */}
      <CTASection
        title="Need More Information?"
        description="If you have any questions or need additional information about our school, please feel free to contact us."
        primaryAction={{
          text: "Contact Us",
          href: "/contact",
        }}
        secondaryAction={{
          text: "Learn More About Us",
          href: "/about",
        }}
      />
    </div>
  )
}

