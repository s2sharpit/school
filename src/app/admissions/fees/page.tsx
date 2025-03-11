import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, ClipboardList, FileText } from "lucide-react";

export default function FeeStructurePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Fee Structure Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><CreditCard className="mr-2" /> Transparent & Affordable Fee Structure</h2>
          <p className="text-gray-700">
            We ensure that education at B. S. Senior Secondary School remains affordable while maintaining high academic standards. Our fee structure is designed to be accessible for all families.
          </p>
        </CardContent>
      </Card>
      
      {/* Fee Breakdown Table */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><ClipboardList className="mr-2" /> General Fee Breakdown (Approximate Annual Fees)</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Class Group</th>
                <th className="border border-gray-300 p-2">Tuition Fee (Annual)</th>
                <th className="border border-gray-300 p-2">Admission Fee (One-Time)</th>
                <th className="border border-gray-300 p-2">Other Charges (Exam, Activities, etc.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Nursery - UKG</td>
                <td className="border border-gray-300 p-2">₹12,000 - ₹18,000</td>
                <td className="border border-gray-300 p-2">₹2,000</td>
                <td className="border border-gray-300 p-2">₹3,000 - ₹5,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class I - V</td>
                <td className="border border-gray-300 p-2">₹20,000 - ₹25,000</td>
                <td className="border border-gray-300 p-2">₹3,000</td>
                <td className="border border-gray-300 p-2">₹5,000 - ₹7,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class VI - VIII</td>
                <td className="border border-gray-300 p-2">₹26,000 - ₹30,000</td>
                <td className="border border-gray-300 p-2">₹3,500</td>
                <td className="border border-gray-300 p-2">₹6,000 - ₹8,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class IX - X</td>
                <td className="border border-gray-300 p-2">₹32,000 - ₹38,000</td>
                <td className="border border-gray-300 p-2">₹4,000</td>
                <td className="border border-gray-300 p-2">₹7,000 - ₹10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class XI - XII (Science)</td>
                <td className="border border-gray-300 p-2">₹40,000 - ₹45,000</td>
                <td className="border border-gray-300 p-2">₹5,000</td>
                <td className="border border-gray-300 p-2">₹8,000 - ₹12,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Class XI - XII (Commerce/Arts)</td>
                <td className="border border-gray-300 p-2">₹35,000 - ₹40,000</td>
                <td className="border border-gray-300 p-2">₹5,000</td>
                <td className="border border-gray-300 p-2">₹8,000 - ₹10,000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600 font-medium">📌 Fees are subject to change. Please contact the school office for the most updated fee details.</p>
        </CardContent>
      </Card>
      
      {/* Payment Modes & Scholarships */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">💳 Payment Modes Available</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ Cash / Demand Draft</li>
            <li>✔ Online Payment (Net Banking / UPI)</li>
            <li>✔ EMI Options (For select classes)</li>
          </ul>
          <p className="text-gray-600 font-medium">📢 Scholarships and fee waivers are available for meritorious students and those in need.</p>
        </CardContent>
      </Card>
      
      {/* Required Documents */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><FileText className="mr-2" /> Required Documents for Admission</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✔ Birth Certificate (for Nursery - Class I)</li>
            <li>✔ Previous School Report Card (for Classes II - XII)</li>
            <li>✔ Transfer Certificate (TC) from the previous school</li>
            <li>✔ Passport-size Photographs (4 copies)</li>
            <li>✔ Aadhar Card of the student and parents</li>
            <li>✔ Caste Certificate (if applicable)</li>
            <li>✔ Medical Certificate (for students with special medical needs)</li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Check Scholarship Eligibility →</Button>
          <Button variant="outline">Pay Fees Online →</Button>
        </div>
      </div>
    </div>
  );
} 