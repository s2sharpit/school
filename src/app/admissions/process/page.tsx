import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, FileText } from "lucide-react";

export default function AdmissionProcessPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Admission Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><ClipboardCheck className="mr-2" /> Admission Process at B. S. Senior Secondary School</h2>
          <p className="text-gray-700">
            We welcome students from diverse backgrounds who are eager to learn, grow, and excel. Our admission process is simple, transparent, and merit-based, ensuring every child gets an opportunity to receive quality education.
          </p>
        </CardContent>
      </Card>
      
      {/* Step-by-Step Admission Procedure */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold flex items-center"><FileText className="mr-2" /> Step-by-Step Admission Procedure</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>📍 Step 1: Inquiry & Registration</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>🔹 Parents/students can visit the school campus or fill out an online inquiry form.</li>
                <li>🔹 Collect the admission form from the school office or download it online.</li>
              </ul>
            </li>
            <li>
              <strong>📍 Step 2: Submission of Documents</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>🔹 Submit the filled admission form along with the required documents (listed below).</li>
              </ul>
            </li>
            <li>
              <strong>📍 Step 3: Entrance Test / Interaction</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>🔹 Students applying for Classes I - IX may have to appear for a basic aptitude assessment.</li>
                <li>🔹 For Nursery, LKG, and UKG, an informal interaction with the child and parents is conducted.</li>
              </ul>
            </li>
            <li>
              <strong>📍 Step 4: Confirmation & Fee Payment</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>🔹 Selected candidates will receive an admission confirmation letter.</li>
                <li>🔹 Parents must complete the fee payment process to confirm admission.</li>
              </ul>
            </li>
            <li>
              <strong>📍 Step 5: Orientation & First Day at School</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>🔹 New students and parents will be invited to an orientation session to familiarize themselves with the school environment, teachers, and academic schedule.</li>
              </ul>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center space-y-4">
        <p className="text-gray-600 font-medium">📢 Seats are limited, and admissions are granted on a first-come, first-served basis. Apply now!</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Download Admission Form →</Button>
          <Button variant="outline">Contact for Admissions →</Button>
        </div>
      </div>
    </div>
  );
} 