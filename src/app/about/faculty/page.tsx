import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb } from "lucide-react";

export default function FacultyPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Faculty Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Users className="mr-2" /> Our Dedicated Educators</h2>
          <p className="text-gray-700">
            At B. S. Senior Secondary School, our faculty is the driving force behind our success. Our team of highly qualified, CBSE-certified teachers is committed to delivering excellence in education while fostering a nurturing and motivating environment.
          </p>
        </CardContent>
      </Card>
      
      {/* What Sets Our Faculty Apart */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Lightbulb className="mr-2" /> What Sets Our Faculty Apart?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ <strong>Expertise & Passion</strong> – Experienced educators dedicated to student progress.</li>
            <li>✔ <strong>Innovative Teaching Methods</strong> – Emphasis on interactive, technology-driven, and student-centric learning.</li>
            <li>✔ <strong>Regular Training & Professional Development</strong> – Teachers stay updated with modern educational techniques.</li>
            <li>✔ <strong>Mentorship & Personalized Attention</strong> – Small class sizes for individualized learning experiences.</li>
          </ul>
          <p className="text-gray-600 font-medium text-center">🏫 A great teacher doesn’t just teach – they inspire, mentor, and guide!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">Learn About Our Academic Programs →</Button>
      </div>
    </div>
  );
} 