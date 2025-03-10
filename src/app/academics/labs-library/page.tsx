"use client";

import { motion } from "framer-motion";
import { FlaskConical, BookOpen } from "lucide-react";

// Labs Data
const labs = [
  {
    name: "Physics Lab",
    description: "Equipped with apparatus for experiments on mechanics, electricity, and optics.",
  },
  {
    name: "Chemistry Lab",
    description: "Fully stocked with chemicals and safety measures for practical learning.",
  },
  {
    name: "Biology Lab",
    description: "Includes models, specimens, and microscopes for biological studies.",
  },
  {
    name: "Computer Lab",
    description: "Advanced systems with the latest software, internet access, and coding resources.",
  },
];

// Library Sections
const librarySections = [
  {
    name: "Subjects Covered",
    description:
      "Fiction, Non-Fiction, Science, Technology, History, Literature, and more.",
  },
  {
    name: "Digital Learning Corner",
    description: "Access to e-books and educational databases.",
  },
  {
    name: "Reading Room",
    description: "A quiet space for students to enhance their knowledge.",
  },
];

export default function LabsLibraryPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Labs & Library
        </motion.h2>

        {/* Science & Computer Labs */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FlaskConical className="text-yellow-500 w-6 h-6" />
            Science & Computer Labs
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            We provide state-of-the-art laboratories equipped with modern tools to facilitate hands-on learning:
          </p>
          <div className="space-y-4">
            {labs.map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{lab.name}</h4>
                <p className="text-lg text-gray-700 mt-2">{lab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Library Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="text-green-500 w-6 h-6" />
            Library
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Our library is a knowledge hub with a vast collection of books, journals, and digital resources.
          </p>
          <div className="space-y-4">
            {librarySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{section.name}</h4>
                <p className="text-lg text-gray-700 mt-2">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
