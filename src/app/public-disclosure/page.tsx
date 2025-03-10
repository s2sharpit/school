"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

// Affiliation Details
const affiliationDetails = {
  affiliationNumber: "531917",
  affiliatedSince: "[Year]",
  validUntil: "[Year]",
  pdfLink: "/documents/affiliation-letter.pdf", // Replace with actual PDF path
};

export default function AffiliationLetterPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          CBSE Affiliation Letter
        </motion.h2>

        {/* Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-yellow-500 w-6 h-6" />
            Overview
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            As per CBSE norms, <strong>B. S. Senior Secondary School</strong> is an affiliated 
            institution following CBSE guidelines for curriculum and examinations.
          </p>
        </div>

        {/* Affiliation Details */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Affiliation Details</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Affiliation Number:</strong> {affiliationDetails.affiliationNumber}</li>
            <li><strong>Affiliated Since:</strong> {affiliationDetails.affiliatedSince}</li>
            <li><strong>Valid Until:</strong> {affiliationDetails.validUntil}</li>
          </ul>
        </div>

        {/* Download Affiliation Letter */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <FileText className="text-green-500 w-6 h-6" />
            Download Affiliation Letter
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Click the button below to download the official CBSE Affiliation Letter.
          </p>
          <motion.a
            href={affiliationDetails.pdfLink}
            download
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-blue-700 transition duration-300"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.a>
        </div>
      </div>
    </section>
  );
}
