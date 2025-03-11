import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen } from "lucide-react";

export default function EligibilityPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Age Criteria for Admission */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><Users className="mr-2" /> Age Criteria for Admission</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Class</th>
                <th className="border border-gray-300 p-2">Minimum Age as of April 1st</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Nursery</td>
                <td className="border border-gray-300 p-2">3 Years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">LKG</td>
                <td className="border border-gray-300 p-2">4 Years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">UKG</td>
                <td className="border border-gray-300 p-2">5 Years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class 1</td>
                <td className="border border-gray-300 p-2">6 Years</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class 2 & Above</td>
                <td className="border border-gray-300 p-2">Based on Previous Class Completion</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600 font-medium">📌 Age criteria follow CBSE and government guidelines for school admissions.</p>
        </CardContent>
      </Card>
      
      {/* Academic Criteria for Admission */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><BookOpen className="mr-2" /> Academic Criteria for Admission</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ For Classes I to IX, the student must have successfully completed the previous academic class from a recognized school.</li>
            <li>✔ For Class XI, admission is granted based on Class X board results and subject stream selection (Science, Commerce, Arts).</li>
            <li>✔ Transfer students from other CBSE or recognized boards must provide a Transfer Certificate (TC) and Report Card.</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Students with outstanding performance in academics, sports, or extracurricular activities may be given priority admission.</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Apply for Admission →</Button>
          <Button variant="outline">Schedule a Campus Visit →</Button>
        </div>
      </div>
    </div>
  );
} 
