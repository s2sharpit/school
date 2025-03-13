import { Accent, SectionNote } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle, FileText } from "lucide-react";
import React from "react";

const data = [
  {
    title: "Inquiry & Registration",
    details: [
      "Parents/students can visit the school campus or fill out an online inquiry form.",
      "Collect the admission form from the school office or download it online.",
    ],
  },
  {
    title: "Submission of Documents",
    details: [
      "Submit the filled admission form along with the required documents.",
    ],
  },
  {
    title: "Entrance Test / Interaction",
    details: [
      "Students applying for Classes I - IX may have to appear for a basic aptitude assessment.",
      "For Nursery, LKG, and UKG, an informal interaction with the child and parents is conducted.",
    ],
  },
  {
    title: "Confirmation & Fee Payment",
    details: [
      "Selected candidates will receive an admission confirmation letter.",
      "Parents must complete the fee payment process to confirm admission.",
    ],
  },
  //   {
  //     title: "Orientation & First Day at School",
  //     details: [
  //       "New students and parents will be invited to an orientation session to familiarize themselves with the school environment, teachers, and academic schedule.",
  //     ],
  //   },
];

export default function Procedure() {
  return (
    <section className="space-y-6">
      <Title className="flex items-center justify-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        Step-by-Step Admission Procedure
      </Title>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((step, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" /> {step.title}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {step.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SectionNote>
        Seats are limited, and admissions are granted on a{" "}
        <Accent>first-come, first-served basis</Accent>. Apply now!
      </SectionNote>
    </section>
  );
}
