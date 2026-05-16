import { CTASection } from "@/components/cta-section"
import { SchoolInfoSection } from "./SchoolInfo"
import { DocumentsSection } from "./DocumentsList"
import { AcademicSection } from "./AcademicSection"
import { StaffSection } from "./StaffSection"
import { InfrastructureSection } from "./AdditionalInfo"
import { HeroSection } from "@/components"


export default function PublicDisclosurePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Mandatory Public Disclosure"
        description="In compliance with CBSE regulations, we provide transparent access to all mandatory documents."
        badge="Transparency & Compliance"
      />

      {/* Section A — General Information */}
      <SchoolInfoSection />

      {/* Section B — Mandatory Documents */}
      <DocumentsSection />

      {/* Section C — Result & Academics */}
      <AcademicSection />

      {/* Section D — Staff (Teaching) */}
      <StaffSection />

      {/* Section E — School Infrastructure */}
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

