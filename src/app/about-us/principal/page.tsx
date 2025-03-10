"use client";

import { motion } from "motion/react";

export default function PrincipalMessage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Principal’s Message
        </motion.h2>
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Dear Students, Parents, and Staff,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-gray-700 leading-relaxed"
          >
            Welcome to <strong>B. S. Senior Secondary School, Salempur Khadar</strong>. 
            Education is the most powerful tool that shapes the future, and our school 
            is committed to providing an enriching and nurturing learning experience for 
            every student.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-gray-700 leading-relaxed"
          >
            At B. S. Senior Secondary School, we believe in{" "}
            <strong>"learning beyond textbooks"</strong>. Our focus is on academic 
            excellence, character development, and overall personality growth. We encourage 
            students to explore their talents, embrace challenges, and become responsible citizens.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-lg text-gray-700 leading-relaxed"
          >
            I invite all parents and guardians to join us in this journey of educational 
            excellence. Together, let’s create a brighter future for our children.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-lg font-semibold text-gray-900"
          >
            Best Wishes,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg font-semibold text-gray-900"
          >
            [Principal’s Name]
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-gray-700"
          >
            Principal, B. S. Senior Secondary School
          </motion.p>
        </div>
      </div>
    </section>
  );
}
