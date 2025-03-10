"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

// General Eligibility Data
const generalEligibility = [
  {
    title: "Nursery to Class I",
    description:
      "No specific criteria; admission is granted based on age and seat availability.",
  },
  {
    title: "Class II to IX",
    description:
      "Admission based on previous academic performance and entrance test (if applicable).",
  },
  {
    title: "Class XI",
    description:
      "Admission based on Class X board results and chosen stream.",
  },
];

// Age Criteria Data
const ageCriteria = [
  { className: "Nursery", age: "3+ years" },
  { className: "LKG", age: "4+ years" },
  { className: "UKG", age: "5+ years" },
  { className: "Class I", age: "6+ years" },
];

export default function EligibilityPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Eligibility Criteria
        </motion.h2>

        {/* General Eligibility */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="text-yellow-500 w-6 h-6" />
            General Eligibility
          </h3>
          <div className="space-y-6">
            {generalEligibility.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{criteria.title}</h4>
                <p className="text-lg text-gray-700 mt-2">{criteria.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Age Criteria */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="text-green-500 w-6 h-6" />
            Age Criteria (as of March 31)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">Minimum Age</th>
                </tr>
              </thead>
              <tbody>
                {ageCriteria.map((age, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-center" : "text-center"}>
                    <td className="border border-gray-300 px-4 py-2">{age.className}</td>
                    <td className="border border-gray-300 px-4 py-2">{age.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
