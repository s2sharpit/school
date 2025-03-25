import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Check, GraduationCap } from "lucide-react";
import React from "react";

const streams = [
  {
    title: "Science Stream",
    description:
      "Ideal for students interested in engineering, medicine, research, and other scientific fields. Offers Physics, Chemistry, Mathematics/Biology as core subjects.",
    subjects: [
      "Physics, Chemistry, Mathematics/Biology",
      "Well-equipped laboratories for practical learning",
      "Preparation for JEE, NEET, and other competitive exams",
    ],
    imageSrc: "/science-stream.jpg",
  },
  {
    title: "Commerce Stream",
    description:
      "Perfect for students interested in business, finance, accounting, and management. Offers Accountancy, Business Studies, Economics as core subjects.",
    subjects: [
      "Accountancy, Business Studies, Economics",
      "Mathematics/Computer Science as optional subjects",
      "Practical exposure through projects and case studies",
    ],
    imageSrc: "/commerce-stream.jpg",
  },
  {
    title: "Arts Stream",
    description:
      "Suited for students interested in humanities, social sciences, literature, and creative fields. Offers a wide range of subject combinations.",
    subjects: [
      "History, Political Science, Geography, Psychology",
      "English/Hindi Literature, Economics as options",
      "Focus on critical thinking and analytical skills",
    ],
    imageSrc: "/arts-stream.jpg",
  },
];

export default function Stream() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Academic Streams"
          title="Specialized Streams for Diverse Aspirations"
          description="Choose from our three comprehensive streams designed to cater to different interests and career goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streams.map((stream) => (
            <FeatureCard key={stream.title} icon={GraduationCap} {...stream}>
              <ul className="space-y-2 mt-4">
                {stream.subjects.map((subject) => (
                  <li key={subject} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{subject}</span>
                  </li>
                ))}
              </ul>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
