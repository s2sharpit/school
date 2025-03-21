import Hero from "@/components/Hero";
import SchoolInfo from "./SchoolInfo";
import Mandatory from "./Mandatory";
import AcademicDocs from "./AcademicDocs";
import AdditionalInfo from "./AdditionalInfo";
import CTA from "@/components/CTA";

export default function PublicDisclosurePage() {
  return (
    <div className="flex flex-col">
      <Hero
        title="Public Disclosure"
        desc="In compliance with CBSE regulations, we provide transparent access to all mandatory documents and
              information."
        imgSrc="/img/school_building.jpg"
      />

      <SchoolInfo />
      <Mandatory />
      <AcademicDocs />
      <AdditionalInfo />

      <CTA
        title="Need More Information?"
        desc="If you have any questions or need additional information about our school, please feel free to contact
                us."
        secBtn={{ title: "Contact Us", href: "/contact" }}
        outlineBtn={{ title: "Learn More About Us", href: "/about" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
