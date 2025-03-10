"use client";

import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const missions = [
  {
    title: "Academic Excellence",
    description:
      "Provide a holistic learning environment that encourages critical thinking, creativity, and innovation.",
  },
  {
    title: "Character Building",
    description:
      "Instill moral values, discipline, and leadership qualities in students.",
  },
  {
    title: "Inclusive Education",
    description:
      "Offer equal learning opportunities to students from all backgrounds.",
  },
  {
    title: "Skill Development",
    description:
      "Focus on extracurricular activities, sports, and technological advancements to ensure well-rounded growth.",
  },
  {
    title: "Community Engagement",
    description:
      "Encourage social responsibility, environmental consciousness, and active participation in community services.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-700 mb-8"
        >
          Our Mission
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
            >
              <CheckCircle className="text-green-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
