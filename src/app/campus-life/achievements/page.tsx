import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Achievements Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Star className="w-10 h-10 text-yellow-500" />
          Recognizing Excellence in Academics & Beyond
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our students **shine in academics, sports, and extracurriculars**, winning awards and  
          securing **top positions** in various fields.  
          We take **pride in celebrating their hard work and achievements**.
        </p>
      </section>

      {/* Recent Achievements */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">📌 Some Recent Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "CBSE Board Exam Toppers", description: "Celebrating academic excellence." },
            { title: "Science & Mathematics Olympiad Winners", description: "Recognizing talent in STEM." },
            { title: "Gold Medalists in State-Level Sports Competitions", description: "Achievements in athletics." },
            { title: "Inter-School Cultural & Debate Champions", description: "Showcasing intellect and talent." },
          ].map((achievement, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {achievement.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-center mt-6">
          📢 Every achievement is a **step towards success**, and we celebrate them all!
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Meet Our Top Performers →
        </Button>
      </div>
    </div>
  );
}
