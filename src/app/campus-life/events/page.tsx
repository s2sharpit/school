import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarHeart } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Events Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><CalendarHeart className="mr-2" /> A Campus Filled with Learning & Celebrations</h2>
          <p className="text-gray-700">
            We believe in celebrating traditions, cultures, and creativity through various events and competitions. Our Annual Function, Science Exhibitions, Festivals, and Cultural Events provide students with a platform to showcase their talents and leadership skills.
          </p>
        </CardContent>
      </Card>
      
      {/* Major Events */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">📌 Some of Our Major Events</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✔ <strong>Annual Day Celebrations</strong> – Grand performances, awards, and student showcases.</li>
            <li>✔ <strong>Science & Art Exhibitions</strong> – Encouraging research, creativity, and innovation.</li>
            <li>✔ <strong>Independence Day & Republic Day</strong> – Patriotism-filled cultural performances.</li>
            <li>✔ <strong>Inter-School Competitions</strong> – Bringing out the best in music, dance, and debates.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Unleash your creativity and make unforgettable memories!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">Explore Our Event Gallery →</Button>
      </div>
    </div>
  );
} 