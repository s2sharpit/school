import Title from '@/components/ui/Title'
import { ClipboardList } from 'lucide-react'
import React from 'react'

export default function FeeBreakdown() {
  return (
    <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardList className="w-8 h-8 text-blue-600" />
          General Fee Breakdown (Approximate Annual Fees)
        </Title>

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

        <p className="text-center font-medium">
          📌 Fees are subject to change. Please contact the school office for the most updated fee details.
        </p>
      </section>

  )
}
