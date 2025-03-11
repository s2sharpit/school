import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Achievements Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Star className="mr-2" /> Recognizing Excellence in Academics & Beyond</h2>
          <p className="text-gray-700">
            Our students shine in academics, sports, and extracurriculars, winning awards and securing top positions in various fields. We take pride in celebrating their hard work and achievements.
          </p>
        </CardContent>
      </Card>
      
      {/* Recent Achievements */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">📌 Some Recent Achievements</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🏆 <strong>CBSE Board Exam Toppers</strong> – Celebrating academic excellence.</li>
            <li>🏆 <strong>Science & Mathematics Olympiad Winners</strong> – Recognizing talent in STEM.</li>
            <li>🏆 <strong>Gold Medalists in State-Level Sports Competitions</strong> – Achievements in athletics.</li>
            <li>🏆 <strong>Inter-School Cultural & Debate Champions</strong> – Showcasing intellect and talent.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Every achievement is a step towards success, and we celebrate them all!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">Meet Our Top Performers →</Button>
      </div>
    </div>
  );
} 
