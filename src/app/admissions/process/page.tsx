import { Button } from "@/components/ui/button";
import { ClipboardCheck, FileText, CheckCircle } from "lucide-react";

export default function AdmissionProcessPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Admission Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          Admission Process at B. S. Senior Secondary School
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We welcome students from **diverse backgrounds** who are eager to learn, grow, and excel.  
          Our admission process is **simple, transparent, and merit-based**, ensuring every child  
          gets an opportunity to receive **quality education**.
        </p>
      </section>

      {/* Step-by-Step Admission Procedure */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-blue-600" />
          Step-by-Step Admission Procedure
        </h2>
        <div className="space-y-8">
          {[
            {
              title: "Inquiry & Registration",
              details: [
                "Parents/students can visit the school campus or fill out an online inquiry form.",
                "Collect the admission form from the school office or download it online.",
              ],
            },
            {
              title: "Submission of Documents",
              details: ["Submit the filled admission form along with the required documents."],
            },
            {
              title: "Entrance Test / Interaction",
              details: [
                "Students applying for Classes I - IX may have to appear for a basic aptitude assessment.",
                "For Nursery, LKG, and UKG, an informal interaction with the child and parents is conducted.",
              ],
            },
            {
              title: "Confirmation & Fee Payment",
              details: [
                "Selected candidates will receive an admission confirmation letter.",
                "Parents must complete the fee payment process to confirm admission.",
              ],
            },
            {
              title: "Orientation & First Day at School",
              details: [
                "New students and parents will be invited to an orientation session to familiarize themselves with the school environment, teachers, and academic schedule.",
              ],
            },
          ].map((step, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-900 flex items-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {step.title}
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {step.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <p className="text-lg text-gray-600 font-medium">
          📢 Seats are limited, and admissions are granted on a **first-come, first-served basis**. Apply now!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Download Admission Form →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Contact for Admissions →
          </Button>
        </div>
      </div>
    </div>
  );
}
