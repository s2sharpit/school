import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy } from "lucide-react";

export default function AlumniPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Alumni Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Users className="mr-2" /> Proud Alumni of B. S. Senior Secondary School</h2>
          <p className="text-gray-700">
            Our former students have excelled in academics, sports, entrepreneurship, and leadership. Many of our alumni have gone on to prestigious universities, cleared competitive exams, and made a mark in various professional fields.
          </p>
        </CardContent>
      </Card>
      
      {/* Alumni Achievements */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Trophy className="mr-2" /> Our Alumni Achievements</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ Admissions to top engineering, medical, and management institutions.</li>
            <li>✔ Selections in competitive exams like JEE, NEET, UPSC, and state-level exams.</li>
            <li>✔ Achievements in sports, cultural competitions, and entrepreneurship.</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">📢 Are you an alumnus of B. S. Senior Secondary School? Join our Alumni Network and reconnect with your school!</p>
        <Button variant="outline">Join the Alumni Network →</Button>
      </div>
    </div>
  );
} 
