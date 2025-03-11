import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import Main from "@/components/ui/Main";
import Link from "next/link";

export default function PrincipalMessagePage() {
  return (
    <Main>
      {/* Principal's Message */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Quote className="mr-2" /> Principal’s Message</h2>
          <p className="italic text-gray-700">&quot;Education is not just about learning facts, but about training young minds to think, innovate, and grow with integrity.&quot;</p>
          <div className="text-left space-y-4">
            <h3 className="text-xl font-semibold">Message from Our Principal – Mrs. Shashi Bala</h3>
            <p>
              Dear Students, Parents, and Well-Wishers,
            </p>
            <p>
              Welcome to B. S. Senior Secondary School, Salempur Khadar!
            </p>
            <p>
              At our school, education goes beyond textbooks and classrooms. We focus on academic brilliance, ethical values, and a student-centered approach that nurtures future leaders, thinkers, and responsible individuals.
            </p>
            <p>
              Our teachers are not just educators but mentors who guide students to unlock their true potential. With a CBSE-aligned curriculum, state-of-the-art facilities, and co-curricular opportunities, we strive to empower students with knowledge, confidence, and creativity.
            </p>
            <p>
              We encourage active participation, self-discipline, and a love for lifelong learning. Together, let’s create an environment where education is an enjoyable and transformative journey!
            </p>
            <p className="font-bold">🌟 Best Regards,<br/>Mrs. Shashi Bala<br/>📍 Principal, B. S. Senior Secondary School</p>
          </div>
          <Button variant="outline" asChild><Link href="/about/faculty">Discover Our Faculty →</Link></Button>
        </CardContent>
      </Card>
    </Main>
  );
} 
