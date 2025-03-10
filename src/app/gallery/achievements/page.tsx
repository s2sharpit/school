"use client";

import { motion } from "framer-motion";
import { Award, Medal, Trophy, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

// Achievements Data
const academicAchievements = [
  "Top CBSE Board Performers: Students securing above 95% marks in Class X & XII.",
  "National Olympiad Winners: Excellence in subjects like Mathematics, Science, and English.",
  "Scholarship Awards: Students securing state and national scholarships for higher education.",
];

const sportsAchievements = [
  "District-Level Football Champions 2023.",
  "Gold Medalists in CBSE Zonal Athletics Meet.",
  "National-Level Chess and Table Tennis Participants.",
];

const extracurricularAchievements = [
  "Winners of Inter-School Debate & Quiz Competitions.",
  "Best Performance Award in Cultural Dance & Drama Competitions.",
  "Participation in National-Level Robotics & Coding Contests.",
];

// Image Gallery Data
const achievementsGalleryImages = [
  { src: "/images/top-academic-performers.jpg", alt: "Top Academic Performers" },
  { src: "/images/sports-winners.jpg", alt: "Sports Competition Winners" },
  { src: "/images/cultural-debate-champions.jpg", alt: "Cultural & Debate Champions" },
];

export default function AchievementsGalleryPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Achievements Gallery
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our students and faculty have consistently excelled in academics, 
            sports, and extracurricular activities, bringing laurels to the 
            school at various levels.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="text-green-500 w-6 h-6" />
            Academic Achievements
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {academicAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Sports Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Medal className="text-blue-500 w-6 h-6" />
            Sports Achievements
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {sportsAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Extracurricular Achievements */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="text-red-500 w-6 h-6" />
            Extracurricular Achievements
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {extracurricularAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Image Gallery */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ImageIcon className="text-blue-500 w-6 h-6" />
            Image Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievementsGalleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
