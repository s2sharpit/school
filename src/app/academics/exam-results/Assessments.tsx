import Title from "@/components/ui/Title";
import { BookOpen, CheckCircle } from "lucide-react";
import React from "react";

const ass = [
  {
    title: "Periodic Tests",
    description: "Conducted throughout the academic session to track student understanding.",
  },
  {
    title: "Mid-Term Examinations",
    description: "Half-yearly exams to review student performance.",
  },
  {
    title: "Annual Examinations",
    description: "Comprehensive end-of-year exams as per CBSE norms.",
  },
  {
    title: "CBSE Board Examinations",
    description: "For Classes X & XII, ensuring national-level assessment standards.",
  },
];

export default function Assessments() {
  return (
    <section className="space-y-6 md:space-y-8">
      <Title className=" flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Types of Assessments
      </Title>
      <ul className="grid md:grid-cols-2 gap-6">
        {ass.map((assessment, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-2 text-green-600 flex-shrink-0" />
            <div>
              <strong className="text-lg text-blue-900">
                {assessment.title}
              </strong>
              <p>{assessment.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
