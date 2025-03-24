import { BookOpen, GraduationCap, Users } from "lucide-react";

const programsData = [
  {
    title: "Primary Education",
    landingDescription:
      "A strong foundation with focus on fundamental skills, creativity, and character development.",
    academicsDescription:
      "Our primary education program (Classes I-V) focuses on building a strong foundation in core subjects while nurturing creativity and curiosity. We employ activity-based learning to make education enjoyable and effective.",
    imageSrc: "/img/campus.jpg?height=400&width=600",
    icon: BookOpen,
    href: "/academics/primary",
  },
  {
    title: "Secondary Education",
    landingDescription:
      "Comprehensive curriculum preparing students for higher education with specialized subjects.",
    academicsDescription:
      "Our secondary program (Classes VI-X) offers a comprehensive curriculum that prepares students for board examinations while developing critical thinking and analytical skills through practical applications.",
    imageSrc: "/img/campus.jpg?height=400&width=600",
    icon: Users,
    href: "/academics/secondary",
  },
  {
    title: "Senior Secondary",
    landingDescription:
      "Specialized streams in Science, Commerce, and Arts with career guidance and counseling.",
    academicsDescription:
      "Our senior secondary program (Classes XI-XII) offers specialized streams in Science, Commerce, and Arts with expert faculty, well-equipped laboratories, and career guidance to prepare students for higher education.",
    imageSrc: "/img/campus.jpg?height=400&width=600",
    icon: GraduationCap,
    href: "/academics/senior-secondary",
  },
];

export default programsData;
