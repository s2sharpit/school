import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Trophy, BookOpen } from "lucide-react";

export default function ExamResultsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Examination & Assessment System */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><ClipboardCheck className="mr-2" /> Examination & Assessment System</h2>
          <p className="text-gray-700">
            At B. S. Senior Secondary School, we follow the CBSE examination guidelines and conduct regular assessments to track student progress. Our evaluation system ensures a fair, transparent, and stress-free approach to learning.
          </p>
        </CardContent>
      </Card>
      
      {/* Types of Assessments */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><BookOpen className="mr-2" /> Types of Assessments</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ <strong>Periodic Tests</strong> – Conducted throughout the academic session to track student understanding.</li>
            <li>✔ <strong>Mid-Term Examinations</strong> – Half-yearly exams to review student performance.</li>
            <li>✔ <strong>Annual Examinations</strong> – Comprehensive end-of-year exams as per CBSE norms.</li>
            <li>✔ <strong>CBSE Board Examinations</strong> – For Classes X & XII, ensuring national-level assessment standards.</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Performance Highlights */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Trophy className="mr-2" /> Performance Highlights</h2>
          <p className="text-gray-700">
            Our students consistently achieve outstanding results in CBSE board exams, with many securing top ranks in district and state-level assessments.
          </p>
          
          <h3 className="text-xl font-semibold">📢 2024 Board Results Summary:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>📌 <strong>Class X Toppers</strong> – [Top student names and marks]</li>
            <li>📌 <strong>Class XII Toppers</strong> – [Top student names and marks]</li>
            <li>📌 <strong>Competitive Exam Success</strong> – [JEE, NEET, NDA, and other exam qualifiers]</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Congratulations to all achievers! Keep striving for excellence!</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">View Detailed Results →</Button>
      </div>
    </div>
  );
} 