"use client";

import { motion } from "framer-motion";
import { DollarSign, FileText } from "lucide-react";

// Fee Structure Data
const feeStructure = [
  { classRange: "Nursery - UKG", quarterly: "₹5,500", annual: "₹22,000" },
  { classRange: "I - V", quarterly: "₹6,500", annual: "₹26,000" },
  { classRange: "VI - VIII", quarterly: "₹7,500", annual: "₹30,000" },
  { classRange: "IX - X", quarterly: "₹8,500", annual: "₹34,000" },
  { classRange: "XI - XII (Science)", quarterly: "₹10,000", annual: "₹40,000" },
  { classRange: "XI - XII (Commerce & Humanities)", quarterly: "₹9,000", annual: "₹36,000" },
];

// Additional Charges Data
const additionalCharges = [
  { title: "Admission Fee", description: "₹5,000 (One-time, non-refundable)" },
  { title: "Transport Fee", description: "Varies based on location" },
  { title: "Books & Uniforms", description: "As per actual cost" },
];

export default function FeeStructurePage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Fee Structure (2024-25)
        </motion.h2>

        {/* Tuition Fees Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="text-yellow-500 w-6 h-6" />
            Tuition Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">Quarterly Fees</th>
                  <th className="border border-gray-300 px-4 py-2">Annual Fees</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-center" : "text-center"}>
                    <td className="border border-gray-300 px-4 py-2">{fee.classRange}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.quarterly}</td>
                    <td className="border border-gray-300 px-4 py-2">{fee.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Charges */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-green-500 w-6 h-6" />
            Additional Charges
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {additionalCharges.map((charge, index) => (
              <li key={index}>
                <strong>{charge.title}:</strong> {charge.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
