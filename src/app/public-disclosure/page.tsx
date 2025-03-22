import Hero from "@/components/Hero";
import SchoolInfo from "./SchoolInfo";
import CTA from "@/components/CTA";
import DocumentsList from "./DocumentsList";

const mandatoryDocs = [
  { name: "CBSE Affiliation Certificate", file: "cbse-affiliation.pdf" },
  { name: "Society Certificate", file: "society-certificate.pdf" },
  { name: "School NOC from State Government", file: "school-noc.pdf" },
  { name: "Recognition Certificate under RTE Act", file: "rte-certificate.pdf" },
  { name: "Building Safety Certificate", file: "building-safety.pdf" },
  { name: "Fire Safety Certificate", file: "fire-safety.pdf" },
  { name: "Self Certification", file: "self-certification.pdf" },
  { name: "Water & Sanitation Certificate", file: "sanitation-certificate.pdf" },
];


const academicDocs = [
  { name: "Fee Structure", file: "fee-structure.pdf" },
  { name: "Academic Calendar", file: "academic-calender.pdf" },
  { name: "School Management Committee (SMC)", file: "smc.pdf" },
  { name: "Parents Teachers Association (PTA)", file: "pta.pdf" },
  { name: "Previous Year Results", file: "previous-results.pdf" },
  { name: "Last Three-Year Academic Result", file: "result.pdf" },
];


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
      <DocumentsList
        className="bg-muted/50"
        title="Mandatory Documents"
        description="Essential documents as required by CBSE and regulatory authorities."
        badgeText="Mandatory Disclosure"
        docs={mandatoryDocs}
      />
      <DocumentsList
        title="Academic Documents"
        description="Important academic information and documents for parents and students."
        badgeText="Academic Information"
        docs={academicDocs}
      />

      {/* <AdditionalInfo /> */}

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
