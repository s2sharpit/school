import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Facilities Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Building className="mr-2" /> A Modern Learning Environment for Holistic Growth</h2>
          <p className="text-gray-700">
            At B. S. Senior Secondary School, Salempur Khadar, we provide state-of-the-art infrastructure designed to support academic excellence, creativity, and overall student development. Our well-equipped campus ensures that students have access to the best resources for learning, sports, and extracurricular activities.
          </p>
        </CardContent>
      </Card>
      
      {/* Key Facilities */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">🏫 Key Facilities at Our Campus</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ <strong>Smart Classrooms</strong> – Digitally enhanced classrooms with projectors and interactive learning tools.</li>
            <li>✅ <strong>Science Laboratories</strong> – Fully equipped Physics, Chemistry, and Biology labs for hands-on experiments.</li>
            <li>✅ <strong>Computer Labs</strong> – High-tech computer labs with internet access for IT-based learning.</li>
            <li>✅ <strong>Library & Resource Center</strong> – A vast collection of books, journals, and e-learning materials.</li>
            <li>✅ <strong>Auditorium & Seminar Halls</strong> – A spacious multi-purpose hall for events, cultural programs, and workshops.</li>
            <li>✅ <strong>Cafeteria & Dining Facilities</strong> – Hygienic and nutritious meals served in a clean environment.</li>
            <li>✅ <strong>Security & Safety</strong> – CCTV surveillance, strict entry protocols, and dedicated staff ensure campus security.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Our modern infrastructure supports an engaging and effective learning experience!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">Explore Our Gallery →</Button>
      </div>
    </div>
  );
} 
