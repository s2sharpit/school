"use client";

import { motion } from "framer-motion";

// Faculty Data
const leadershipTeam = [
  { role: "Principal", name: "[Name]", qualification: "[Qualification]" },
  { role: "Vice Principal", name: "[Name]", qualification: "[Qualification]" },
];

const teachingStaff = [
  { subject: "Mathematics", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
  { subject: "Science", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
  { subject: "English", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
  { subject: "Social Science", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
  { subject: "Computer Science", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
  { subject: "Physical Education", name: "[Name]", qualification: "[Qualification]", experience: "[X] years" },
];

export default function FacultyPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Our Faculty
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center mb-6"
        >
          Our school takes pride in having highly qualified and dedicated faculty members who are committed to shaping the future of our students.
        </motion.p>

        {/* Senior Leadership Team */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Senior Leadership Team
          </h3>
          {leadershipTeam.map((leader, index) => (
            <p key={index} className="text-lg text-gray-700 text-center">
              <strong>{leader.role}:</strong> {leader.name} – {leader.qualification}
            </p>
          ))}
        </div>

        {/* Teaching Staff Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Teaching Staff
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-2">Subject</th>
                  <th className="border border-gray-300 px-4 py-2">Teacher Name</th>
                  <th className="border border-gray-300 px-4 py-2">Qualification</th>
                  <th className="border border-gray-300 px-4 py-2">Experience</th>
                </tr>
              </thead>
              <tbody>
                {teachingStaff.map((teacher, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-center" : "text-center"}>
                    <td className="border border-gray-300 px-4 py-2">{teacher.subject}</td>
                    <td className="border border-gray-300 px-4 py-2">{teacher.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{teacher.qualification}</td>
                    <td className="border border-gray-300 px-4 py-2">{teacher.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center mt-6"
        >
          Our faculty members participate in regular training programs and workshops to stay updated with modern teaching methodologies.
        </motion.p>
      </div>
    </section>
  );
}
