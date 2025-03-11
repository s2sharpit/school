import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Medal, } from "lucide-react";

export default function SportsActivitiesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Sports Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Medal className="mr-2" /> Nurturing Champions On & Off the Field</h2>
          <p className="text-gray-700">
            Sports play a vital role in developing discipline, teamwork, and leadership among students. At B. S. Senior Secondary School, we provide world-class sports facilities to encourage physical fitness and a competitive spirit.
          </p>
        </CardContent>
      </Card>
      
      {/* Sports Facilities */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">🏅 Sports Facilities at Our Campus</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✔ <strong>Cricket & Football Grounds</strong> – Spacious fields for team sports and training.</li>
            <li>✔ <strong>Basketball & Volleyball Courts</strong> – Professionally maintained courts for competitive matches.</li>
            <li>✔ <strong>Athletics Track</strong> – Running track for sprint and endurance training.</li>
            <li>✔ <strong>Table Tennis & Chess</strong> – Indoor sports facilities for mental agility and skill development.</li>
            <li>✔ <strong>Yoga & Meditation Zone</strong> – A dedicated area for mental well-being and relaxation.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Our students have represented the school in district, state, and national-level competitions!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">View Our Sports Achievements →</Button>
      </div>
    </div>
  );
} 
