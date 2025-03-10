"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers } from "lucide-react";

// Curriculum Data
const academicStructure = [
  {
    section: "Primary Section (Classes I-V)",
    description:
      "Focus on foundational learning, activity-based education, and moral values.",
  },
  {
    section: "Middle Section (Classes VI-VIII)",
    description:
      "Introduction to complex subjects, analytical learning, and project-based activities.",
  },
  {
    section: "Secondary Section (Classes IX-X)",
    description:
      "Emphasis on core subjects, practical applications, and board exam preparation.",
  },
  {
    section: "Senior Secondary Section (Classes XI-XII)",
    description:
      "Specialized streams in Science, Commerce, and Humanities with career-oriented learning.",
  },
];

export default function CurriculumPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Our Curriculum
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>B. S. Senior Secondary School</strong> follows the 
            <strong> CBSE (Central Board of Secondary Education)</strong> curriculum, ensuring a balanced mix of academics, 
            skill development, and extracurricular activities. Our curriculum is designed to:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
            <li>Foster critical thinking and problem-solving skills.</li>
            <li>Promote scientific temperament and creativity.</li>
            <li>Encourage holistic learning beyond textbooks.</li>
          </ul>
        </div>

        {/* Academic Structure */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Layers className="text-green-500 w-6 h-6" />
            Academic Structure
          </h3>
          <div className="space-y-6">
            {academicStructure.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{section.section}</h4>
                <p className="text-lg text-gray-700 mt-2">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
