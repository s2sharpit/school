import { Button } from "@/components/ui/button";
import { Medal, CheckCircle } from "lucide-react";

export default function SportsActivitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Sports Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Medal className="w-10 h-10 text-yellow-500" />
          Nurturing Champions On & Off the Field
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Sports play a **vital role** in developing **discipline, teamwork, and leadership** among students.  
          At **B. S. Senior Secondary School**, we provide **world-class sports facilities** to encourage  
          **physical fitness and a competitive spirit**.
        </p>
      </section>

      {/* Sports Facilities */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">🏅 Sports Facilities at Our Campus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Cricket & Football Grounds", description: "Spacious fields for team sports and training." },
            { title: "Basketball & Volleyball Courts", description: "Professionally maintained courts for competitive matches." },
            { title: "Athletics Track", description: "Running track for sprint and endurance training." },
            { title: "Table Tennis & Chess", description: "Indoor sports facilities for mental agility and skill development." },
            { title: "Yoga & Meditation Zone", description: "A dedicated area for mental well-being and relaxation." },
          ].map((facility, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {facility.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{facility.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-center mt-6">
          📢 Our students have represented the school in **district, state, and national-level competitions!**
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Our Sports Achievements →
        </Button>
      </div>
    </div>
  );
}
