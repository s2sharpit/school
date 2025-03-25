import { SectionHeader } from "@/components/ui/section-header";
import { BookOpen } from "lucide-react";
import React from "react";

const methodologies = [
  {
    title: "Activity-Based Learning",
    description:
      "We incorporate hands-on activities, games, and experiments to make learning concrete and memorable. This approach helps children understand abstract concepts through practical experiences.",
  },
  {
    title: "Thematic Approach",
    description:
      "Our curriculum is organized around themes that integrate different subjects, helping children make connections across disciplines and understand the relevance of what they're learning.",
  },
  {
    title: "Personalized Attention",
    description:
      "With small class sizes, our teachers can provide individualized attention to each child, addressing their unique learning needs and helping them overcome challenges.",
  },
];

const MethodologyCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      <BookOpen className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function TeachingMethodologySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Teaching Approach"
          title="Child-Centered Learning"
          description="Our teaching methodologies are designed to make learning engaging, interactive, and effective."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodologies.map((method) => (
            <MethodologyCard key={method.title} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
}
