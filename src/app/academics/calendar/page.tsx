import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock } from "lucide-react";

export default function AcademicCalendarPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Academic Schedule Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><CalendarDays className="mr-2" /> Yearly Academic Schedule</h2>
          <p className="text-gray-700">
            The academic calendar at B. S. Senior Secondary School is designed to ensure structured learning, holistic development, and ample opportunities for student participation in co-curricular activities.
          </p>
        </CardContent>
      </Card>
      
      {/* Key Academic Events */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><Clock className="mr-2" /> Key Academic Events for 2024-25</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Event</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">School Reopens</td>
                <td className="border border-gray-300 p-2">April 1, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Summer Vacation</td>
                <td className="border border-gray-300 p-2">May 15 - June 30, 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Mid-Term Exams</td>
                <td className="border border-gray-300 p-2">September 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Annual Sports Day</td>
                <td className="border border-gray-300 p-2">November 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">CBSE Practical Exams</td>
                <td className="border border-gray-300 p-2">January 2025</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">CBSE Board Exams (X & XII)</td>
                <td className="border border-gray-300 p-2">March 2025</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Final Exams (I - IX & XI)</td>
                <td className="border border-gray-300 p-2">March 2025</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">New Academic Session Begins</td>
                <td className="border border-gray-300 p-2">April 1, 2025</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
      
      {/* Parent-Teacher Meetings */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">📢 Parent-Teacher Meetings (PTMs)</h2>
          <p className="text-gray-700">Regular PTMs are held every month to discuss student progress, challenges, and growth strategies. Parents are encouraged to actively participate.</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 font-medium">📢 Stay informed, stay ahead! Follow our academic calendar for important updates.</p>
        <Button variant="outline">Download Full Academic Calendar →</Button>
      </div>
    </div>
  );
} 