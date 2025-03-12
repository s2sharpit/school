import { Button } from "@/components/ui/button";
import { CreditCard, ClipboardList, FileText, CheckCircle } from "lucide-react";

export default function FeeStructurePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Fee Structure Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <CreditCard className="w-10 h-10 text-yellow-500" />
          Transparent & Affordable Fee Structure
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We ensure that **education remains affordable** while maintaining **high academic standards**.  
          Our fee structure is designed to be **accessible** for all families.
        </p>
      </section>

      {/* Fee Breakdown Table */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3 mb-6">
          <ClipboardList className="w-8 h-8 text-blue-600" />
          General Fee Breakdown (Approximate Annual Fees)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-3 text-left">Class Group</th>
                <th className="p-3 text-left">Tuition Fee (Annual)</th>
                <th className="p-3 text-left">Admission Fee (One-Time)</th>
                <th className="p-3 text-left">Other Charges (Exam, Activities, etc.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {[
                { class: "Nursery - UKG", tuition: "₹12,000 - ₹18,000", admission: "₹2,000", other: "₹3,000 - ₹5,000" },
                { class: "Class I - V", tuition: "₹20,000 - ₹25,000", admission: "₹3,000", other: "₹5,000 - ₹7,000" },
                { class: "Class VI - VIII", tuition: "₹26,000 - ₹30,000", admission: "₹3,500", other: "₹6,000 - ₹8,000" },
                { class: "Class IX - X", tuition: "₹32,000 - ₹38,000", admission: "₹4,000", other: "₹7,000 - ₹10,000" },
                { class: "Class XI - XII (Science)", tuition: "₹40,000 - ₹45,000", admission: "₹5,000", other: "₹8,000 - ₹12,000" },
                { class: "Class XI - XII (Commerce/Arts)", tuition: "₹35,000 - ₹40,000", admission: "₹5,000", other: "₹8,000 - ₹10,000" },
              ].map((row, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="p-3 text-gray-700">{row.class}</td>
                  <td className="p-3 text-gray-700">{row.tuition}</td>
                  <td className="p-3 text-gray-700">{row.admission}</td>
                  <td className="p-3 text-gray-700">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 font-medium mt-4">
          📌 Fees are subject to change. Please contact the school office for the most updated fee details.
        </p>
      </section>

      {/* Payment Modes & Scholarships */}
      <section className="bg-gray-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">💳 Payment Modes Available</h2>
        <ul className="space-y-4">
          {["Cash / Demand Draft", "Online Payment (Net Banking / UPI)", "EMI Options (For select classes)"].map(
            (method, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-gray-700">{method}</p>
              </li>
            )
          )}
        </ul>
        <p className="text-gray-600 font-medium mt-6">
          📢 Scholarships and fee waivers are available for **meritorious students and those in need**.
        </p>
      </section>

      {/* Required Documents */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          Required Documents for Admission
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Birth Certificate (for Nursery - Class I)",
            "Previous School Report Card (for Classes II - XII)",
            "Transfer Certificate (TC) from the previous school",
            "Passport-size Photographs (4 copies)",
            "Aadhar Card of the student and parents",
            "Caste Certificate (if applicable)",
            "Medical Certificate (for students with special medical needs)",
          ].map((doc, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-gray-700">{doc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Check Scholarship Eligibility →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Pay Fees Online →
          </Button>
        </div>
      </div>
    </div>
  );
}
