import { SectionHeader } from "@/components/ui/section-header";
import { Check } from "lucide-react";
import React from "react";

interface Subject {
  name: string;
  description: string;
}

interface Section {
  title: string;
  subjects: Subject[];
}

export interface CurriculumProps {
  badge: string;
  title: string;
  description: string;
  sections: Section[];
}

const SubjectList: React.FC<Section> = ({ title, subjects }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {subjects.map((subject) => (
        <li key={subject.name} className="flex items-start gap-3">
          <Check className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <span className="font-medium">{subject.name}</span>
            <p className="text-muted-foreground text-sm">{subject.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const CurriculumSection: React.FC<CurriculumProps> = ({ badge, title, description, sections }) => (
  <section className="py-16 md:py-24 odd:bg-muted/50">
    <div className="container mx-auto px-4">
      <SectionHeader badge={badge} title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <SubjectList key={section.title} {...section} />
        ))}
      </div>
    </div>
  </section>
);
