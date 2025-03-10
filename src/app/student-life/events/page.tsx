"use client";

import { motion } from "framer-motion";
import { Calendar, Star } from "lucide-react";

// Events Data
const annualEvents = [
  {
    title: "Annual Day Celebration",
    description: "A grand event showcasing student talents in music, dance, drama, and more.",
  },
  {
    title: "Independence Day & Republic Day",
    description: "Patriotic celebrations with flag hoisting, cultural performances, and speeches.",
  },
  {
    title: "Science & Art Exhibition",
    description: "Encouraging students to showcase their innovative projects and artistic skills.",
  },
  {
    title: "Teacher’s Day & Children’s Day",
    description: "Special events where students and teachers celebrate with fun activities.",
  },
  {
    title: "Festivals & Cultural Programs",
    description: "Celebration of diverse Indian festivals like Diwali, Holi, Eid, and Christmas.",
  },
  {
    title: "Educational Trips & Excursions",
    description: "Yearly field trips to historical sites, science centers, and industries.",
  },
  {
    title: "Inter-House Competitions",
    description: "Debate, quiz, elocution, painting, and storytelling competitions.",
  },
];

export default function EventsPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          School Events
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>B. S. Senior Secondary School</strong>, we believe in fostering a 
            vibrant student community through various events and cultural programs. 
            These activities help students develop teamwork, leadership, creativity, and confidence.
          </p>
        </div>

        {/* Annual Events */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="text-green-500 w-6 h-6" />
            Annual Events
          </h3>
          <div className="space-y-6">
            {annualEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{event.title}</h4>
                <p className="text-lg text-gray-700 mt-2">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
