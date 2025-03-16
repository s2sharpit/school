import ImgCard from "@/components/ImgCard";
import Section, { Accent } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen } from "lucide-react";

const subjects = [
  {
    title: "Primary & Middle School (Classes I - VIII)",
    desc: "📚 English | हिंदी | Mathematics | Environmental Science (EVS) | Science | Social Science | General Knowledge | Computer Science | Physical Education",
  },
  {
    title: "Secondary School (Classes IX - X)",
    desc: "📖 English | हिंदी | Mathematics | Science (Physics, Chemistry, Biology) | Social Science (History, Geography, Civics, Economics) | Computer Science | Physical Education",
  },
  {
    title: "Senior Secondary (Classes XI - XII) – CBSE Streams",
    desc: [
      "Science Stream: Physics | Chemistry | Biology / Mathematics | English | Computer Science / Physical Education",
      "Commerce Stream: Business Studies | Accountancy | Economics | English | Computer Science / Physical Education",
      "Arts Stream: History | Political Science | Geography | English | Computer Science / Physical Education",
    ],
  },
];

export default function Subjects() {
  return (
    <Section>
      {/* Section Title */}
      <Title className="flex items-center justify-center gap-3">
        <BookOpen className="w-10 h-10 text-yellow-500" />
        Subjects Offered
      </Title>
      <Section.Summary>
        Our curriculum provides students with a{" "}
        <Accent>comprehensive selection of subjects</Accent>, ensuring academic
        excellence and holistic growth.
      </Section.Summary>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {subjects.map((item, index) => (
          <ImgCard
            className={`${index == 2 && "col-span-1 md:col-span-2"}`}
            key={index}
            index={index}
            icon="🎓"
            {...item}
          />
        ))}
      </div>
      <Section.Note>
        We ensure that every student receives quality education tailored to
        their interests and career goals!
      </Section.Note>
    </Section>
  );
}
