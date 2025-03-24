import { FeatureCard } from "@/components/feature-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Award, BookOpen, Users } from "lucide-react";
import React from "react";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in all aspects of education, encouraging students to aim high and achieve their best.",
  },
  {
    icon: Users,
    title: "Respect",
    description:
      "We foster a culture of respect for self, others, and the environment, promoting harmony and understanding.",
  },
  {
    icon: BookOpen,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, ethics, and transparency in all our actions and decisions.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We embrace creativity and innovation, encouraging students to think critically and find unique solutions.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
      <SectionHeader
            badge="Our Core Values"
            title="Principles That Guide Us"
            description="These values form the foundation of our educational philosophy and guide our approach to teaching and learning."
          />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((value, index) => (
              <FeatureCard key={index} icon={value.icon} title={value.title} description={value.description} />
            ))}
        </div>
      </div>
    </section>
  );
}
