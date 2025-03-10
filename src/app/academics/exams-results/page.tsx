"use client";

import { motion } from "framer-motion";
import { ClipboardList, BarChart, FileText } from "lucide-react";

// Examination System Data
const examSystem = [
  "Periodic Assessments: Unit tests and mid-term evaluations for continuous progress monitoring.",
  "Half-Yearly Exams: Comprehensive assessment conducted in September.",
  "Annual/Board Exams: Final assessments conducted as per CBSE guidelines.",
  "Practical & Internal Assessments: Included in Science, Computer Science, and other subjects.",
];

// Grading System Data
const gradingSystem = [
  { range: "91-100", grade: "A1" },
  { range: "81-90", grade: "A2" },
  { range: "71-80", grade: "B1" },
  { range: "61-70", grade: "B2" },
  { range: "51-60", grade: "C1" },
  { range: "41-50", grade: "C2" },
  { range: "33-40", grade: "D" },
  { range: "Below 33", grade: "E (Fail)" },
];

// Result Declaration Data
const resultDeclaration = [
  "Term-wise result updates are provided on the school notice board and website.",
  "Top Performers and merit lists are announced every year.",
  "Report cards are distributed digitally and in print.",
];

export default function ExamsResultsPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Exams & Results
        </motion.h2>

        {/* Examination System */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ClipboardList className="text-yellow-500 w-6 h-6" />
            Examination System
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {examSystem.map((exam, index) => (
              <li key={index}>{exam}</li>
            ))}
          </ul>
        </div>

        {/* Grading System */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart className="text-green-500 w-6 h-6" />
            Grading System (As per CBSE)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-2">Marks Range</th>
                  <th className="border border-gray-300 px-4 py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {gradingSystem.map((grade, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-center" : "text-center"}>
                    <td className="border border-gray-300 px-4 py-2">{grade.range}</td>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">{grade.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Result Declaration */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-blue-500 w-6 h-6" />
            Result Declaration
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {resultDeclaration.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
