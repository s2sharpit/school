import { Button } from "@/components/ui/button";
import { Camera, CheckCircle } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Gallery Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Camera className="w-10 h-10 text-yellow-500" />
          A Visual Journey Through School Life
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Browse through our **photo & video gallery** to relive the most **memorable moments**  
          at **B. S. Senior Secondary School**.
        </p>
      </section>

      {/* Gallery Sections */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">📌 Gallery Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Infrastructure & Facilities", description: "Explore our well-designed campus." },
            { title: "Sports & Competitions", description: "Witness the spirit of teamwork and athleticism." },
            { title: "Events & Celebrations", description: "From Annual Day to Science Exhibitions." },
            { title: "Student Achievements", description: "Recognizing academic and extracurricular excellence." },
          ].map((section, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {section.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{section.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-center mt-6">
          📢 Experience the **joy, learning, and energy** that define our school!
        </p>
      </section>

      {/* Justified Gallery */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-900 text-center">📸 School Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src={src} alt={`Gallery Image ${index + 1}`} layout="fill" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Our Full Gallery →
        </Button>
      </div>
    </div>
  );
}
