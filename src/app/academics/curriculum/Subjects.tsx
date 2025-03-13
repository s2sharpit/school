import { Accent, SectionNote, Summary } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { BookOpen } from "lucide-react";

const subjects = [
  {
    title: "Primary & Middle School (Classes I - VIII)",
    subjects:
      "📚 English | हिंदी | Mathematics | Environmental Science (EVS) | Science | Social Science | General Knowledge | Computer Science | Physical Education",
  },
  {
    title: "Secondary School (Classes IX - X)",
    subjects:
      "📖 English | हिंदी | Mathematics | Science (Physics, Chemistry, Biology) | Social Science (History, Geography, Civics, Economics) | Computer Science | Physical Education",
  },
  {
    title: "Senior Secondary (Classes XI - XII) – CBSE Streams",
    subjects: [
      "🔸 Science Stream: Physics | Chemistry | Biology/Mathematics | English | Computer Science/Physical Education",
      "🔸 Commerce Stream: Business Studies | Accountancy | Economics | English | Computer Science/Physical Education",
      "🔸 Arts Stream: History | Political Science | Geography | English | Computer Science/Physical Education",
    ],
  },
];

export default function Subjects() {
  return (
    <section className="space-y-6">
      {/* Section Title */}
      <Title className="flex items-center justify-center gap-3">
        <BookOpen className="w-10 h-10 text-yellow-500" />
        Subjects Offered
      </Title>
      <Summary>
        Our curriculum provides students with a{" "}
        <Accent>comprehensive selection of subjects</Accent>, ensuring academic
        excellence and holistic growth.
      </Summary>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {subjects.map((section, index) => (
          <div
            key={index}
            className={`p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg 
          ${index === 2 ? "col-span-1 md:col-span-2" : ""}`}
          >
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              🎓 {section.title}
            </h3>
            <ul className="pl-6 space-y-1 ">
              {Array.isArray(section.subjects) ? (
                section.subjects.map((subject, i) => <li key={i}>{subject}</li>)
              ) : (
                <li>{section.subjects}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
      <SectionNote>
        We ensure that every student receives quality education tailored to
        their interests and career goals!
      </SectionNote>
    </section>
  );
}
