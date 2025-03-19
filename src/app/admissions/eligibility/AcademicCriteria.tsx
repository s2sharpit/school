import FeatCard from "@/components/FeatCard";
import Section, { Accent } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen } from "lucide-react";

const data = [
  {
    content: "For Classes I to IX, the student must have successfully completed the previous academic class from a recognized school.",
  },
  {
    content: "For Class XI, admission is granted based on Class X board results and subject stream selection (Science, Commerce, Arts).",
  },
  {
    content: "Transfer students from other CBSE or recognized boards must provide a Transfer Certificate (TC) and Report Card.",
  },
  {
    content: "Students seeking admission to Class IX or XI must choose subjects based on the school’s available streams and fulfill any prerequisite academic requirements",
  },
];

export default function AcademicCriteria() {
  return (
    <Section>
      {/* Section Title */}
      <Title className="flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-yellow-500" />
        Academic Criteria for Admission
      </Title>

      {/* Criteria List */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {data.map((items, index) => (
          <FeatCard variant={'list'} key={index} index={index} {...items} />
        ))}
      </ul>

      {/* Section Note */}
      <Section.Note className="mt-8">
        Students with outstanding performance in{" "}
        <Accent>academics, sports, or extracurricular activities</Accent> may be
        given priority admission.
      </Section.Note>
    </Section>
  );
}
