"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

// Achievements Data
const academicAchievements = [
  "100% pass percentage in CBSE Board Exams (Last 5 years).",
  "Students securing admissions in top universities and colleges.",
];

const topScorers = [
  { name: "Anjali", year: "2019-20", score: "97.8%" },
  { name: "Aditya", year: "2019-20", score: "94.2%" },
];

const sportsAchievements = [
  "Winner – District Level Football Championship (2023).",
  "Gold Medalist in CBSE Zonal Athletics Meet.",
  "Ranked #1 in Inter-School Debate Competition (2022).",
  "National-Level Robotics Competition – Finalists (2023).",
];

const awards = [
  "Recognized as \"Best Emerging CBSE School in Yamuna Nagar\" (2022).",
  "Accredited by CBSE for excellence in Academics & Co-curricular Activities.",
];

export default function AchievementsPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Our Achievements
        </motion.h2>

        {/* Academic Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="text-yellow-500 w-6 h-6" />
            Academic Achievements
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {academicAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <h4 className="text-xl font-semibold text-gray-800 mt-4">Top Scorers:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {topScorers.map((student, index) => (
              <li key={index}>
                {student.name} (Class 10, {student.year}) – {student.score}
              </li>
            ))}
          </ul>
        </div>

        {/* Sports & Extracurricular Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="text-green-500 w-6 h-6" />
            Sports & Extracurricular Achievements
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {sportsAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="text-blue-500 w-6 h-6" />
            Awards & Recognition
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
