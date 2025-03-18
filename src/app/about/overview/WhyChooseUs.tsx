import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import React from "react";
import MissionCard from "./MissionCard";
import {
  BookOpen,
  Users,
  ShieldCheck,
  Star,
  Building,
  Briefcase,
} from "lucide-react";

const whyChooseUs = [
  {
    title: "CBSE Curriculum",
    desc: "Structured syllabus ensuring academic excellence & holistic development.",
    icon: <BookOpen />,
  },
  {
    title: "Expert Faculty",
    desc: "Highly qualified & experienced teachers dedicated to student success.",
    icon: <Users />,
  },
  {
    title: "Modern Infrastructure",
    desc: "Smart classrooms, science labs, sports facilities & a well-stocked library.",
    icon: <Building />,
  },
  {
    title: "Co-Curricular Excellence",
    desc: "Focus on arts, sports, and leadership programs to foster creativity.",
    icon: <Star />,
  },
  {
    title: "Safe & Supportive Environment",
    desc: "Ensuring student discipline, creativity, and well-being in a safe space.",
    icon: <ShieldCheck />,
  },
  {
    title: "Career & Future Readiness",
    desc: "Guidance on higher education, competitive exams, and career development.",
    icon: <Briefcase />,
  },
];

export default function WhyChooseUs() {
  return (
    <Section>
      <Title>🛡️ Why Choose Us?</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {whyChooseUs.map((item, index) => (
          <MissionCard
            key={index}
            index={index}
            iconColor="text-[#ff595e]"
            {...item}
          />
        ))}
      </div>
      <Section.Note>
        We believe in education that inspires young minds to think, innovate,
        and excel!
      </Section.Note>
    </Section>
  );
}
