import { Button } from "@/components/ui/button";
import { ClipboardCheck, Trophy, BookOpen, CheckCircle } from "lucide-react";

export default function ExamResultsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Examination & Assessment System */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          Examination & Assessment System
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <strong>B. S. Senior Secondary School</strong>, we follow the **CBSE examination guidelines** and conduct 
          regular assessments to track student progress. Our evaluation system ensures a **fair, transparent, and stress-free** 
          approach to learning.
        </p>
      </section>

      {/* Types of Assessments */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Types of Assessments
        </h2>
        <ul className="space-y-4">
          {[
            { title: "Periodic Tests", description: "Conducted throughout the academic session to track student understanding." },
            { title: "Mid-Term Examinations", description: "Half-yearly exams to review student performance." },
            { title: "Annual Examinations", description: "Comprehensive end-of-year exams as per CBSE norms." },
            { title: "CBSE Board Examinations", description: "For Classes X & XII, ensuring national-level assessment standards." }
          ].map((assessment, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <strong className="text-lg text-blue-900">{assessment.title}</strong>
                <p className="text-gray-700">{assessment.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Performance Highlights */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-blue-600" />
          Performance Highlights
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our students consistently achieve **outstanding results** in CBSE board exams, with many securing **top ranks** 
          in district and state-level assessments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { title: "Class X Toppers", description: "[Top student names and marks]" },
            { title: "Class XII Toppers", description: "[Top student names and marks]" },
            { title: "Competitive Exam Success", description: "[JEE, NEET, NDA, and other exam qualifiers]" }
          ].map((highlight, index) => (
            <div
              key={index}
              className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-900">{highlight.title}</h3>
              <p className="text-gray-700">{highlight.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 font-medium text-lg text-center">
          📢 Congratulations to all achievers! Keep striving for excellence!
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Detailed Results →
        </Button>
      </div>
    </div>
  );
}
