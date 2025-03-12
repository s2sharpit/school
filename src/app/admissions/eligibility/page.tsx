import { Button } from "@/components/ui/button";
import { Users, BookOpen } from "lucide-react";

export default function EligibilityPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Age Criteria for Admission */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Users className="w-10 h-10 text-yellow-500" />
          Age Criteria for Admission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          The following age criteria are followed as per **CBSE and government guidelines** for school admissions.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Minimum Age as of April 1st</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {[
                { class: "Nursery", age: "3 Years" },
                { class: "LKG", age: "4 Years" },
                { class: "UKG", age: "5 Years" },
                { class: "Class 1", age: "6 Years" },
                { class: "Class 2 & Above", age: "Based on Previous Class Completion" },
              ].map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="p-3 text-gray-700">{row.class}</td>
                  <td className="p-3 text-gray-700">{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic Criteria for Admission */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Academic Criteria for Admission
        </h2>
        <ul className="space-y-4">
          {[
            "For Classes I to IX, the student must have successfully completed the previous academic class from a recognized school.",
            "For Class XI, admission is granted based on Class X board results and subject stream selection (Science, Commerce, Arts).",
            "Transfer students from other CBSE or recognized boards must provide a Transfer Certificate (TC) and Report Card.",
          ].map((criteria, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 text-green-600">✔</span>
              <p className="text-gray-700">{criteria}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-medium mt-6">
          📢 Students with outstanding performance in academics, sports, or extracurricular activities may be given priority admission.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Apply for Admission →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Schedule a Campus Visit →
          </Button>
        </div>
      </div>
    </div>
  );
}
