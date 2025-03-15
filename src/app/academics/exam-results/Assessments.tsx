import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/ui/Section";
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
    <Section>
      <Title className=" flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-blue-600" />
        Types of Assessments
      </Title>
      <ul className="grid md:grid-cols-2 gap-6">
        {ass.map((assessment, index) => (
          <Card key={index}>
            <CardContent className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-4 md:gap-6">
            <CheckCircle className="w-10 sm:w-6 h-10 sm:h-6 mt-2 text-green-600 flex-shrink-0" />
            <div>
              <strong className="text-lg text-blue-900">
                {assessment.title}
              </strong>
              <p className="text-muted-foreground">{assessment.description}</p>
            </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
