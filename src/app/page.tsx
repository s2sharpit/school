import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Megaphone, GraduationCap, Info, MapPin, Mail } from "lucide-react";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="max-w-6xl mx-auto p-6 space-y-10">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to B. S. Senior Secondary School</h1>
          <p className="text-lg text-gray-600">🌟 &quot;Empowering Students, Shaping Futures&quot; 🌟</p>
        </section>

        {/* About School */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center"><Info className="mr-2" /> About Our School</h2>
            <p>
              Established in 2001, B. S. Senior Secondary School is committed to providing holistic and value-based education.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>🔹 CBSE Curriculum ensuring quality education</li>
              <li>🔹 Highly Qualified Faculty dedicated to student success</li>
              <li>🔹 State-of-the-Art Infrastructure for a seamless learning experience</li>
              <li>🔹 Focus on Co-Curricular Activities to nurture all-round development</li>
            </ul>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center"><Megaphone className="mr-2" /> Latest Announcements</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>📅 Admissions Open for the upcoming academic session! Apply Now</li>
              <li>🏆 Our students shine in CBSE board exams! Congratulations to all achievers!</li>
              <li>🎭 Upcoming Annual Function – Stay tuned for event details!</li>
            </ul>
            <Button variant="outline">View All Announcements</Button>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center"><GraduationCap className="mr-2" /> Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>✔ Academics & Beyond: Balanced curriculum with creativity & fitness</li>
              <li>✔ Qualified Educators: Experienced teachers for student success</li>
              <li>✔ Modern Facilities: Science & computer labs, library, smart classrooms</li>
              <li>✔ Extracurricular Excellence: Sports, music, arts, and leadership programs</li>
              <li>✔ Safe & Supportive Environment fostering discipline & values</li>
            </ul>
          </CardContent>
        </Card>

        {/* Events */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center"><Calendar className="mr-2" /> Upcoming Events</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>📌 Sports Day 2024 – A thrilling event celebrating teamwork and excellence!</li>
              <li>📌 Science Exhibition – Witness innovation and creativity at its best.</li>
              <li>📌 Educational Trips – Expanding knowledge beyond classrooms.</li>
            </ul>
            <Button variant="outline">View More</Button>
          </CardContent>
        </Card>

        {/* Contact & CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Join Our School Community Today!</h2>
          <p>Admissions are now open for the upcoming session! Give your child the opportunity to study in a progressive and student-centered institution.</p>
          <div className="flex flex-col items-center space-y-2">
            <p className="flex items-center"><MapPin className="mr-2" /> Vill. Salempur Khadar, Dist. Yamunanagar, Haryana, 135103</p>
            <p className="flex items-center"><Mail className="mr-2" /> info@bsseniorsecondary.in</p>
          </div>
          <Button className="mt-4">Apply Now</Button>
        </section>
      </div>
    </main>
  );
} 
