"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Calendar } from "lucide-react";

// Admission Steps Data
const admissionSteps = [
  {
    title: "Online/Offline Registration",
    description:
      "Collect the admission form from the school office or download it from the website. Fill in the required details carefully.",
  },
  {
    title: "Submission of Documents",
    description:
      "Submit the completed form along with the necessary documents.",
  },
  {
    title: "Entrance Test (For Select Classes)",
    description:
      "For admissions in Class VI and above, students may be required to appear for an entrance exam.",
  },
  {
    title: "Interaction with School Authorities",
    description:
      "Parents and students may be called for an interaction session with the Principal.",
  },
  {
    title: "Confirmation & Fee Payment",
    description:
      "Selected candidates must complete the fee payment process within the given deadline.",
  },
];

// Important Dates Data
const importantDates = [
  { event: "Admission Opens", date: "March 1, 2025" },
  { event: "Last Date to Apply", date: "April 15, 2025" },
  { event: "Entrance Test (if applicable)", date: "April 20, 2025" },
];

export default function AdmissionProcessPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Admission Process
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <ClipboardList className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>B. S. Senior Secondary School</strong> follows a transparent and 
            merit-based admission process. Our goal is to provide quality education to 
            every deserving student.
          </p>
        </div>

        {/* Steps to Apply */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-green-500 w-6 h-6" />
            Steps to Apply
          </h3>
          <div className="space-y-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                <p className="text-lg text-gray-700 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="text-blue-500 w-6 h-6" />
            Important Dates (2025)
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {importantDates.map((date, index) => (
              <li key={index}>
                <strong>{date.event}:</strong> {date.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
