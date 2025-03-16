import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";
import React from "react";

const data = [
  {
    title: "Infrastructure & Facilities",
    description: "Explore our well-designed campus.",
  },
  {
    title: "Sports & Competitions",
    description: "Witness the spirit of teamwork and athleticism.",
  },
  {
    title: "Events & Celebrations",
    description: "From Annual Day to Science Exhibitions.",
  },
  {
    title: "Student Achievements",
    description: "Recognizing academic and extracurricular excellence.",
  },
];

export default function GallerySection() {
  return (
    <Section>
      <Title>📌 Gallery Sections</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((section, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" /> {section.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{section.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600 font-medium text-center mt-6">
        📢 Experience the <span className="text-blue-900 font-semibold">joy, learning, and energy</span> that define our school!
      </p>
    </Section>
  );
}
