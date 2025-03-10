"use client";

import { motion } from "framer-motion";
import { Volleyball, Medal, Trophy } from "lucide-react";

// Sports Facilities Data
const sportsFacilities = [
  { name: "Cricket Ground", description: "Fully maintained with professional coaching available." },
  { name: "Football Field", description: "Regular training sessions and inter-school matches." },
  { name: "Basketball Court", description: "Open to all students with coaching programs." },
  { name: "Athletics Track", description: "Dedicated area for running, long jump, and high jump." },
  { name: "Indoor Sports", description: "Chess, table tennis, badminton, and carrom." },
  { name: "Yoga & Fitness", description: "Dedicated classes to promote physical and mental well-being." },
];

// Achievements Data
const sportsAchievements = [
  "Winners of District-Level Football Championship 2023.",
  "Gold Medalists in CBSE Zonal Athletics Meet.",
  "Ranked in Top 3 in Inter-School Basketball Tournament.",
  "Represented Haryana in National-Level Chess Competition.",
];

export default function SportsPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          School Sports
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Volleyball className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sports are an integral part of student development, fostering team spirit, discipline, 
            and a healthy lifestyle. The school provides modern sports infrastructure and encourages 
            participation in various inter-school and national-level tournaments.
          </p>
        </div>

        {/* Major Sports Facilities */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Medal className="text-green-500 w-6 h-6" />
            Major Sports Facilities
          </h3>
          <div className="space-y-6">
            {sportsFacilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{facility.name}</h4>
                <p className="text-lg text-gray-700 mt-2">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements in Sports */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="text-blue-500 w-6 h-6" />
            Achievements in Sports
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {sportsAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Annual Sports Day */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="text-red-500 w-6 h-6" />
            Annual Sports Day
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            A grand event featuring track & field events, team sports, and fun activities, where students 
            compete for the prestigious House Championship Trophy.
          </p>
        </div>
      </div>
    </section>
  );
}
