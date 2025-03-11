import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ListChecks, GraduationCap } from "lucide-react";

export default function CurriculumPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Curriculum Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><GraduationCap className="mr-2" /> Comprehensive & Well-Structured CBSE Curriculum</h2>
          <p className="text-gray-700">
            At B. S. Senior Secondary School, Salempur Khadar, we follow the Central Board of Secondary Education (CBSE) curriculum, which is designed to provide a strong academic foundation while also encouraging creativity, critical thinking, and problem-solving skills.
          </p>
        </CardContent>
      </Card>
      
      {/* Key Features */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><ListChecks className="mr-2" /> Key Features of Our Curriculum</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ <strong>Activity-Based Learning</strong> – Engaging students with interactive and hands-on lessons.</li>
            <li>✔ <strong>Balanced Approach</strong> – A perfect mix of theory, practicals, and real-life applications.</li>
            <li>✔ <strong>Skill Development</strong> – Encouraging students to think independently, work in teams, and develop leadership qualities.</li>
            <li>✔ <strong>Career-Oriented Education</strong> – Preparing students for higher education, competitive exams, and professional success.</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Subjects Offered */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><BookOpen className="mr-2" /> Subjects Offered</h2>
          
          <h3 className="text-xl font-semibold">🔹 Primary & Middle School (Classes I - VIII)</h3>
          <p className="text-gray-700">📚 English | हिंदी | Mathematics | Environmental Science (EVS) | Science | Social Science | General Knowledge | Computer Science | Physical Education</p>
          
          <h3 className="text-xl font-semibold">🔹 Secondary School (Classes IX - X)</h3>
          <p className="text-gray-700">📖 English | हिंदी | Mathematics | Science (Physics, Chemistry, Biology) | Social Science (History, Geography, Civics, Economics) | Computer Science | Physical Education</p>
          
          <h3 className="text-xl font-semibold">🔹 Senior Secondary (Classes XI - XII) – CBSE Streams</h3>
          <p className="text-gray-700"><strong>🔸 Science Stream:</strong> Physics | Chemistry | Biology/Mathematics | English | Computer Science/Physical Education</p>
          <p className="text-gray-700"><strong>🔸 Commerce Stream:</strong> Business Studies | Accountancy | Economics | English | Computer Science/Physical Education</p>
          <p className="text-gray-700"><strong>🔸 Arts Stream:</strong> History | Political Science | Geography | English | Computer Science/Physical Education</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">📢 We ensure that every student receives quality education tailored to their interests and career goals!</p>
        <Button variant="outline">Explore Our Faculty →</Button>
      </div>
    </div>
  );
} 
