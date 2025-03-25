import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import React from "react";

const boardFeatures = [
  {
    title: "Structured Revision Program",
    description:
      "Our systematic revision program covers the entire syllabus with regular tests and assessments to track progress and identify areas for improvement.",
  },
  {
    title: "Sample Papers and Mock Tests",
    description:
      "Students practice with CBSE sample papers and take regular mock tests under exam conditions to build confidence and time management skills.",
  },
  {
    title: "Doubt Clearing Sessions",
    description:
      "Regular doubt clearing sessions provide students with opportunities to address their queries and strengthen their understanding of difficult concepts.",
  },
  {
    title: "Individual Guidance",
    description:
      "Teachers provide personalized guidance to each student based on their performance, helping them overcome challenges and maximize their potential.",
  },
];

const BoardFeature = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-2">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Board() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Board Examinations"
          title="Preparation for CBSE Class X Board Exams"
          description="Our comprehensive approach ensures students are well-prepared for their first board examination."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students Studying"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {boardFeatures.map((feature) => (
              <BoardFeature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
