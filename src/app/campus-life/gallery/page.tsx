import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Gallery Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Camera className="mr-2" /> A Visual Journey Through School Life</h2>
          <p className="text-gray-700">
            Browse through our photo & video gallery to relive the most memorable moments at B. S. Senior Secondary School.
          </p>
        </CardContent>
      </Card>
      
      {/* Gallery Sections */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">📌 Gallery Sections</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✔ <strong>Infrastructure & Facilities</strong> – Explore our well-designed campus.</li>
            <li>✔ <strong>Sports & Competitions</strong> – Witness the spirit of teamwork and athleticism.</li>
            <li>✔ <strong>Events & Celebrations</strong> – From Annual Day to Science Exhibitions.</li>
            <li>✔ <strong>Student Achievements</strong> – Recognizing academic and extracurricular excellence.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Experience the joy, learning, and energy that define our school!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">View Our Full Gallery →</Button>
      </div>
    </div>
  );
} 
