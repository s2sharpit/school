import Title from "@/components/ui/Title";
import { ListChecks } from "lucide-react";
import Section from "@/components/ui/Section";
import FeatCard from "./FeatCard";

const features = [
  {
    title: "Activity-Based Learning",
    desc: "Interactive and hands-on learning experiences.",
  },
  {
    title: "Balanced Approach",
    desc: "A mix of theory, practicals, and real-world applications.",
  },
  {
    title: "Skill Development",
    desc: "Encourages independent thinking, teamwork, and leadership.",
  },
  {
    title: "Career-Oriented Education",
    desc: "Prepares students for competitive exams and careers.",
  },
];


export default function KeyFeatures() {
  return (
    <Section>
      <Title className="flex items-center justify-center gap-3">
        <ListChecks className="w-8 h-8 text-blue-600" />
        Key Features of Our Curriculum
      </Title>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <FeatCard key={index} index={index} {...item} />
        ))}
      </ul>
    </Section>
  );
}
