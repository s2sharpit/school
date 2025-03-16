import ImgCard from "@/components/ImgCard";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen } from "lucide-react";

const criteria = [
  {
    title: "For Classes I to IX, the student must have successfully completed the previous academic class from a recognized school.",
  },
  {
    title: "For Class XI, admission is granted based on Class X board results and subject stream selection (Science, Commerce, Arts).",
  },
  {
    title: "Transfer students from other CBSE or recognized boards must provide a Transfer Certificate (TC) and Report Card.",
  },
  {
    title: "Students seeking admission to Class IX or XI must choose subjects based on the school’s available streams and fulfill any prerequisite academic requirements",
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
        {criteria.map((item, index) => (
          <ImgCard key={index} index={index} {...item} />
          // <li
          //   key={index}
          //   className="flex items-start gap-4 p-4 bg-white border-l-4 border-blue-600 rounded-lg shadow-sm transition-all hover:scale-105 hover:shadow-md duration-300"
          // >
          //   <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0" />
          //   <p className="text-gray-800 text-lg">{criteria}</p>
          // </li>
        ))}
      </ul>

      {/* Section Note */}
      <Section.Note className="mt-8">
        Students with outstanding performance in{" "}
        <strong>academics, sports, or extracurricular activities</strong> may be
        given priority admission.
      </Section.Note>
    </Section>
  );
}
