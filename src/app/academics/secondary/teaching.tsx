import { SectionHeader } from "@/components/ui/section-header";
import { BookOpen } from "lucide-react";
import React from "react";

const teachingMethods = [
  {
    title: "Inquiry-Based Learning",
    description: "We encourage students to ask questions, investigate topics, and discover answers through guided exploration, fostering critical thinking and research skills.",
  },
  {
    title: "Collaborative Learning",
    description: "Group projects and team activities help students develop communication, leadership, and interpersonal skills while learning from their peers.",
  },
  {
    title: "Technology Integration",
    description: "We integrate digital tools and resources into our teaching to enhance learning experiences and prepare students for a technology-driven world.",
  },
];

const MethodCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      <BookOpen className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Teaching() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Teaching Approach"
          title="Innovative Learning Methods"
          description="Our teaching methodologies are designed to make learning engaging, interactive, and effective."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachingMethods.map((method) => (
            <MethodCard key={method.title} title={method.title} description={method.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
