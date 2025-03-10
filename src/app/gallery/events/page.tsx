"use client";

import { motion } from "framer-motion";
import { Calendar, Image, Sparkles } from "lucide-react";

// Events Data
const majorEvents = [
  {
    title: "Annual Day Celebration",
    description: "Performances in music, dance, drama, and award ceremonies.",
  },
  {
    title: "Independence & Republic Day Celebrations",
    description: "Flag hoisting, speeches, and patriotic performances.",
  },
  {
    title: "Science & Art Exhibition",
    description: "Innovative student projects and creative artworks on display.",
  },
  {
    title: "Sports Day",
    description: "Exciting races, games, and award distribution ceremonies.",
  },
  {
    title: "Inter-House Competitions",
    description: "Debates, quizzes, storytelling, and elocution competitions.",
  },
  {
    title: "Festival Celebrations",
    description: "Diwali, Holi, Eid, Christmas, and more celebrated with enthusiasm.",
  },
  {
    title: "Workshops & Seminars",
    description: "Educational sessions on career guidance, leadership, and personality development.",
  },
];

// Image Gallery Data
const eventGalleryImages = [
  { src: "/images/annual-day.jpg", alt: "Annual Day Performances" },
  { src: "/images/science-exhibition.jpg", alt: "Science & Art Exhibition" },
  { src: "/images/sports-day.jpg", alt: "Sports Day Highlights" },
  { src: "/images/festival-celebrations.jpg", alt: "Festival Celebrations" },
];

export default function EventsGalleryPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Events Gallery
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our school hosts various cultural, academic, and recreational events 
            throughout the year, allowing students to showcase their skills and talents.
          </p>
        </div>

        {/* Major Events Captured */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="text-green-500 w-6 h-6" />
            Major Events Captured
          </h3>
          <div className="space-y-6">
            {majorEvents.map((event, index) => (
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

        {/* Image Gallery */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Image className="text-blue-500 w-6 h-6" />
            Image Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {eventGalleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
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
