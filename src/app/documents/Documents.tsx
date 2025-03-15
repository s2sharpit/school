import Link from "next/link";
import { FileText } from "lucide-react";
import Title from "@/components/ui/Title";
import Section from "@/components/ui/Section";

const documents = {
  mandatory: [
    { name: "CBSE Affiliation Certificate", file: "cbse-affiliation.pdf" },
    { name: "Society Certificate", file: "society-certificate.pdf" },
    { name: "School NOC from State Government", file: "school-noc.pdf" },
    {
      name: "Recognition Certificate under RTE Act",
      file: "rte-certificate.pdf",
    },
    { name: "Building Safety Certificate", file: "building-safety.pdf" },
    { name: "Fire Safety Certificate", file: "fire-safety.pdf" },
    { name: "Self Certification", file: "self-certification.pdf" },
    {
      name: "Water & Sanitation Certificate",
      file: "sanitation-certificate.pdf",
    },
  ],
  academic: [
    { name: "Fee Structure", file: "fee-structure.pdf" },
    { name: "Academic Calender", file: "academic-calender.pdf" },
    { name: "School Management committee (SMC)", file: "smc.pdf" },
    { name: "Parents Teachers Association (PTA)", file: "pta.pdf" },
    { name: "Previous Year Results", file: "previous-results.pdf" },
    { name: "Last Three-Year Academic Result", file: "result.pdf" },
  ],
};

type DocumentCategory = keyof typeof documents; // Restrict `val` to available categories

export default function Documents({ val }: { val: DocumentCategory }) {
  const selectedDocs = documents[val] ?? [];

  return (
    <Section>
      <Title>📌 {val} Documents</Title>
      <div>
        {selectedDocs.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {selectedDocs.map(({ name, file }, index) => (
              <Link
                key={index}
                href={`/public-disclosure/${file}`}
                className="block"
              >
                <div className="p-6 bg-gray-50 rounded-lg shadow-md flex items-center gap-3 transition hover:shadow-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-medium text-blue-900">
                    {name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            ⚠️ No documents available at the moment.
          </p>
        )}
      </div>
      {val == "academic" && (
        <Section.Note>
          As per CBSE guidelines, our school maintains full transparency in
          sharing key disclosure documents.
        </Section.Note>
      )}
    </Section>
  );
}
