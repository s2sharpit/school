import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle, FileText } from "lucide-react";

const data = [
  "Birth Certificate (for Nursery - Class I)",
  "Previous School Report Card (for Classes II - XII)",
  "Transfer Certificate (TC) from the previous school",
  "Passport-size Photographs (4 copies)",
  "Aadhar Card of the student and parents",
  "Caste Certificate (if applicable)",
  "Medical Certificate (for students with special medical needs)",
];

export default function RequiredDocs() {
  return (
    <Section>
      <Title className="flex items-center justify-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        Required Documents for Admission
      </Title>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((doc, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-gray-700">{doc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
