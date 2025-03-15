import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen, CheckCircle } from "lucide-react";

const data = [
  "For Classes I to IX, the student must have successfully completed the previous academic class from a recognized school.",
  "For Class XI, admission is granted based on Class X board results and subject stream selection (Science, Commerce, Arts).",
  "Transfer students from other CBSE or recognized boards must provide a Transfer Certificate (TC) and Report Card.",
];

export default function AcademicCriteria() {
  return (
    <Section className="space-y-6">
      <Title className="flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Academic Criteria for Admission
      </Title>
      <ul className="grid grid-cols-1 sm:gid-cols-2 gap-4">
        {data.map((criteria, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="">{criteria}</p>
          </li>
        ))}
      </ul>
      <Section.Note>
        Students with outstanding performance in academics, sports, or
        extracurricular activities may be given priority admission.
      </Section.Note>
    </Section>
  );
}
