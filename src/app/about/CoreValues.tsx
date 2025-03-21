import { Award, BookOpen, Users } from "lucide-react";
import React from "react";

const coreValues = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in all aspects of education, encouraging students to aim high and achieve their best.",
    Icon: Award,
  },
  {
    title: "Respect",
    description:
      "We foster a culture of respect for self, others, and the environment, promoting harmony and understanding.",
    Icon: Users,
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, ethics, and transparency in all our actions and decisions.",
    Icon: BookOpen,
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and innovation, encouraging students to think critically and find unique solutions.",
    Icon: Award,
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Core Values
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Principles That Guide Us
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            These values form the foundation of our educational philosophy and
            guide our approach to teaching and learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map(({ title, description, Icon }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
