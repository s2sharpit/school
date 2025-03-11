import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ShieldCheck, Users, Lightbulb } from "lucide-react";
import Main from "@/components/ui/Main";

export default function OverviewPage() {
  return (
    <Main>
      
      {/* School Overview */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><GraduationCap className="mr-2" /> About Our School</h2>
          <p>
            Established in 2001, B. S. Senior Secondary School is a premier educational institution dedicated to academic excellence, moral values, and holistic development.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>📍 Affiliation: CBSE (Affiliation No: 531917)</li>
            <li>🏫 Location: Vill. Salempur Khadar, Dist. Yamunanagar, Haryana</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Why Choose Us */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><ShieldCheck className="mr-2" /> Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ Well-Structured CBSE Curriculum ensuring all-round development.</li>
            <li>✔ Highly Qualified & Experienced Faculty dedicated to student success.</li>
            <li>✔ Modern Infrastructure with smart classrooms, science labs, and a well-stocked library.</li>
            <li>✔ Focus on Co-Curricular Excellence including sports, arts, and leadership programs.</li>
            <li>✔ Safe & Supportive Learning Environment fostering discipline and creativity.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 We believe in education that inspires young minds to think, innovate, and excel!</p>
          <Button variant="outline">Explore Our Academics →</Button>
        </CardContent>
      </Card>
      
      {/* Vision & Mission */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Lightbulb className="mr-2" /> Our Vision</h2>
          <p>
            To nurture future leaders, innovators, and responsible citizens by providing an education that balances academic excellence with ethical values, creativity, and leadership skills.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Users className="mr-2" /> Our Mission</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ Quality Education: Providing student-centric learning that fosters curiosity and critical thinking.</li>
            <li>✔ Holistic Growth: Encouraging sports, cultural activities, and skill development alongside academics.</li>
            <li>✔ Character Building: Instilling discipline, respect, and moral responsibility in students.</li>
            <li>✔ Global Readiness: Equipping students with 21st-century skills for future success.</li>
            <li>✔ Technology-Driven Learning: Implementing modern teaching methodologies, digital tools, and experiential learning.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Our mission is to build a generation of lifelong learners who will contribute positively to society!</p>
          <Button variant="outline">Meet Our Principal →</Button>
        </CardContent>
      </Card>
    </Main>
  );
} 
