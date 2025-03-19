import FeatCard from "@/components/FeatCard";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen } from "lucide-react";
import React from "react";

const assessments = [
  {
    title: "Periodic Tests",
    desc: "Conducted throughout the academic session to track student understanding.",
  },
  {
    title: "Mid-Term Examinations",
    desc: "Half-yearly exams to review student performance.",
  },
  {
    title: "Annual Examinations",
    desc: "Comprehensive end-of-year exams as per CBSE norms.",
  },
  {
    title: "CBSE Board Examinations",
    desc: "For Classes X & XII, ensuring national-level assessment standards.",
  },
];

export default function Assessments() {
  return (
    <Section>
      <Title className=" flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Types of Assessments
      </Title>
      <ul className="grid md:grid-cols-2 gap-6">
        {assessments.map((item, index) => (
          <FeatCard key={index} index={index} {...item} />
        ))}
      </ul>
    </Section>
  );
}
