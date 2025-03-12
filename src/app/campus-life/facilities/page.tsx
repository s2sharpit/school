import { Button } from "@/components/ui/button";
import { Building, CheckCircle } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Facilities Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Building className="w-10 h-10 text-yellow-500" />
          A Modern Learning Environment for Holistic Growth
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <strong>B. S. Senior Secondary School, Salempur Khadar</strong>, we provide **state-of-the-art infrastructure** designed to 
          support **academic excellence, creativity, and overall student development**.  
          Our well-equipped campus ensures students have access to the **best resources for learning, sports, and extracurricular activities**.
        </p>
      </section>

      {/* Key Facilities */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">🏫 Key Facilities at Our Campus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Smart Classrooms", description: "Digitally enhanced classrooms with projectors and interactive learning tools." },
            { title: "Science Laboratories", description: "Fully equipped Physics, Chemistry, and Biology labs for hands-on experiments." },
            { title: "Computer Labs", description: "High-tech computer labs with internet access for IT-based learning." },
            { title: "Library & Resource Center", description: "A vast collection of books, journals, and e-learning materials." },
            { title: "Auditorium & Seminar Halls", description: "A spacious multi-purpose hall for events, cultural programs, and workshops." },
            { title: "Cafeteria & Dining Facilities", description: "Hygienic and nutritious meals served in a clean environment." },
            { title: "Security & Safety", description: "CCTV surveillance, strict entry protocols, and dedicated staff ensure campus security." },
          ].map((facility, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {facility.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{facility.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-center mt-6">
          📢 Our modern infrastructure supports an **engaging and effective learning experience**!
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Gallery →
        </Button>
      </div>
    </div>
  );
}
