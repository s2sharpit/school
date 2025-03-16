import ImgCard from "@/components/ImgCard";
import Section, { Accent } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { FileText } from "lucide-react";
import React from "react";

const data = [
  {
    title: "Inquiry & Registration",
    desc: [
      "Parents/students can visit the school campus or fill out an online inquiry form.",
      "Collect the admission form from the school office or download it online.",
    ],
  },
  {
    title: "Submission of Documents",
    desc: [
      "Submit the filled admission form along with the required documents.",
    ],
  },
  {
    title: "Entrance Test / Interaction",
    desc: [
      "Students applying for Classes I - IX may have to appear for a basic aptitude assessment.",
      "For Nursery, LKG, and UKG, an informal interaction with the child and parents is conducted.",
    ],
  },
  {
    title: "Confirmation & Fee Payment",
    desc: [
      "Selected candidates will receive an admission confirmation letter.",
      "Parents must complete the fee payment process to confirm admission.",
    ],
  },
  //   {
  //     title: "Orientation & First Day at School",
  //     desc: [
  //       "New students and parents will be invited to an orientation session to familiarize themselves with the school environment, teachers, and academic schedule.",
  //     ],
  //   },
];

export default function Procedure() {
  return (
    <Section>
      <Title className="flex items-center justify-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        Step-by-Step Admission Procedure
      </Title>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <ImgCard key={index} index={index} {...item} />
        ))}
      </div>
      <Section.Note>
        Seats are limited, and admissions are granted on a{" "}
        <Accent>first-come, first-served basis</Accent>. Apply now!
      </Section.Note>
    </Section>
  );
}
