import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

export default function AcademicCalendarPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Academic Schedule Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <CalendarDays className="w-10 h-10 text-yellow-500" />
          Yearly Academic Schedule
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          The academic calendar at <strong>B. S. Senior Secondary School</strong> is designed to ensure 
          **structured learning, holistic development**, and ample opportunities for student participation 
          in co-curricular activities.
        </p>
      </section>

      {/* Key Academic Events */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3 mb-6">
          <Clock className="w-8 h-8 text-blue-600" />
          Key Academic Events for 2024-25
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-3 text-left">Event</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {[
                { event: "School Reopens", date: "April 1, 2024" },
                { event: "Summer Vacation", date: "May 15 - June 30, 2024" },
                { event: "Mid-Term Exams", date: "September 2024" },
                { event: "Annual Sports Day", date: "November 2024" },
                { event: "CBSE Practical Exams", date: "January 2025" },
                { event: "CBSE Board Exams (X & XII)", date: "March 2025" },
                { event: "Final Exams (I - IX & XI)", date: "March 2025" },
                { event: "New Academic Session Begins", date: "April 1, 2025" },
              ].map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="p-3 text-gray-700">{row.event}</td>
                  <td className="p-3 text-gray-700">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Parent-Teacher Meetings */}
      <section className="bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">📢 Parent-Teacher Meetings (PTMs)</h2>
        <p className="text-lg text-gray-700">
          Regular **PTMs** are held every month to discuss student progress, challenges, and growth strategies.  
          Parents are encouraged to actively participate.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg text-gray-600 font-medium">
          📢 Stay informed, stay ahead! Follow our academic calendar for important updates.
        </p>
        <Button className="mt-6 bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Download Full Academic Calendar →
        </Button>
      </div>
    </div>
  );
}
