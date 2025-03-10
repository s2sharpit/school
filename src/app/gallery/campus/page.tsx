"use client";

import { motion } from "framer-motion";
import { Building, Image, BookOpen } from "lucide-react";

// Campus Highlights Data
const campusHighlights = [
  { title: "School Building", description: "Well-maintained classrooms, administrative offices, and faculty rooms." },
  { title: "Smart Classrooms", description: "Equipped with digital boards and projectors for interactive learning." },
  { title: "Science & Computer Labs", description: "Fully functional laboratories for hands-on experiments." },
  { title: "Library", description: "A vast collection of books, journals, and digital resources." },
  { title: "Playground & Sports Complex", description: "Dedicated areas for football, cricket, basketball, and athletics." },
  { title: "Auditorium", description: "A fully equipped space for cultural events, seminars, and presentations." },
  { title: "Garden & Open Spaces", description: "Greenery-rich areas to encourage a peaceful learning atmosphere." },
  { title: "Cafeteria", description: "Hygienic and nutritious meal options for students and staff." },
];

// Image Gallery Data
const galleryImages = [
  { src: "/images/campus-entrance.jpg", alt: "Campus Entrance" },
  { src: "/images/classroom.jpg", alt: "Classroom Interiors" },
  { src: "/images/sports-facilities.jpg", alt: "Sports Facilities" },
  { src: "/images/library-labs.jpg", alt: "Library and Labs" },
];

export default function CampusPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Our Campus
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>B. S. Senior Secondary School</strong> boasts a sprawling campus equipped 
            with modern infrastructure, lush greenery, and state-of-the-art facilities to 
            provide students with an enriching learning environment.
          </p>
        </div>

        {/* Campus Highlights */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="text-green-500 w-6 h-6" />
            Campus Highlights
          </h3>
          <div className="space-y-6">
            {campusHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-100 p-4 rounded-xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-800">{highlight.title}</h4>
                <p className="text-lg text-gray-700 mt-2">{highlight.description}</p>
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
            {galleryImages.map((image, index) => (
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
