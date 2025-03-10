"use client";

import { motion } from "framer-motion";
import { FileText, Book, Download } from "lucide-react";

// Subjects Data
const syllabus = [
  {
    category: "Primary & Middle School (Classes I-VIII)",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Science (EVS)",
      "Science",
      "Social Science",
      "Computer Science",
      "General Knowledge (GK)",
    ],
  },
  {
    category: "Secondary (Classes IX-X)",
    subjects: [
      "English",
      "Hindi/Sanskrit",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Science (History, Geography, Political Science, Economics)",
      "Information Technology",
    ],
  },
  {
    category: "Senior Secondary (Classes XI-XII)",
    subjects: [
      "Science Stream: Physics, Chemistry, Mathematics/Biology, English, Computer Science/Physical Education",
      "Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English",
      "Humanities Stream: History, Political Science, Psychology, English, Optional Subject",
    ],
  },
];

export default function SyllabusPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Syllabus
        </motion.h2>

        {/* Subjects Offered */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Book className="text-yellow-500 w-6 h-6" />
            Subjects Offered
          </h3>
          {syllabus.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-100 p-4 rounded-xl shadow-md mb-4"
            >
              <h4 className="text-xl font-semibold text-gray-800">{section.category}</h4>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-2 space-y-1">
                {section.subjects.map((subject, i) => (
                  <li key={i}>{subject}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Download Syllabus */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <FileText className="text-green-500 w-6 h-6" />
            Download Syllabus
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Click the button below to download the syllabus PDF.
          </p>
          <motion.a
            href="/syllabus.pdf" // Replace with actual PDF link
            download
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-blue-700 transition duration-300"
          >
            <Download className="w-5 h-5" />
            Download Syllabus
          </motion.a>
        </div>
      </div>
    </section>
  );
}
