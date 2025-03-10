"use client";

interface Form {
    studentName: string;
    dob: string;
    gender: string;
    parentName: string;
    contact: string;
    previousSchool: string;
    lastClass: string;
    files: File[];
  }

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Upload, Send } from "lucide-react";

export default function OnlineApplicationPage() {
  const [formData, setFormData] = useState<Form>({
    studentName: "",
    dob: "",
    gender: "",
    parentName: "",
    contact: "",
    previousSchool: "",
    lastClass: "",
    files: [],
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: [...e.target.files] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully! You will receive a confirmation via email/SMS.");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-blue-700 mb-8"
        >
          Online Admission Form
        </motion.h2>

        {/* Instructions */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="text-yellow-500 w-6 h-6" />
            Instructions for Filling the Admission Form
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Personal Details:</strong> Student&apos;s Name, Date of Birth, Gender, Parent&apos;s Name, Contact Information.</li>
            <li><strong>Academic Details:</strong> Previous School Name, Last Class Passed.</li>
            <li><strong>Upload Documents:</strong> Birth Certificate, Report Card, Passport-size Photo, Aadhaar Card (if applicable).</li>
            <li><strong>Submission & Confirmation:</strong> Submit the form and wait for confirmation via email/SMS.</li>
          </ul>
        </div>

        {/* Admission Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Upload className="text-green-500 w-6 h-6" />
            Admission Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Student's Name" required className="p-3 border border-gray-300 rounded-lg w-full" />
              <input type="date" required className="p-3 border border-gray-300 rounded-lg w-full" />
              <select required className="p-3 border border-gray-300 rounded-lg w-full">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" placeholder="Parent's Name" required className="p-3 border border-gray-300 rounded-lg w-full" />
              <input type="tel" placeholder="Contact Number" required className="p-3 border border-gray-300 rounded-lg w-full" />
            </div>

            {/* Academic Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Previous School Name" required className="p-3 border border-gray-300 rounded-lg w-full" />
              <input type="text" placeholder="Last Class Passed" required className="p-3 border border-gray-300 rounded-lg w-full" />
            </div>

            {/* File Uploads */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">Upload Required Documents</label>
              <input type="file" multiple onChange={handleFileChange} required className="p-3 border border-gray-300 rounded-lg w-full" />
              <p className="text-sm text-gray-600 mt-2">Accepted: Birth Certificate, Report Card, Passport Photo, Aadhaar (if applicable).</p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300"
            >
              <Send className="w-5 h-5" />
              Submit Application
            </motion.button>
          </form>
        </div>

        {/* Important Note */}
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Important Note</h3>
          <p className="text-lg text-gray-700">
            The application form can also be collected from the school office between <strong>9:00 AM - 3:00 PM</strong> on weekdays.
          </p>
        </div>
      </div>
    </section>
  );
}
