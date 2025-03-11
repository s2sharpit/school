import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

export default function PublicDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Public Disclosure Overview */}
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <h2 className="text-3xl font-semibold flex items-center justify-center"><ClipboardList className="mr-2" /> Public Disclosure Documents</h2>
          <p className="text-gray-700">
            As a CBSE-affiliated institution, B. S. Senior Secondary School, Salempur Khadar is committed to maintaining transparency and compliance with CBSE regulations. This section provides all the mandatory public disclosure documents as per CBSE norms.
          </p>
          <p className="text-gray-600 font-medium">📢 We believe in openness, accountability, and accessibility of important school-related information for parents, students, and stakeholders.</p>
          <Button variant="outline">Download CBSE Affiliation Documents →</Button>
        </CardContent>
      </Card>
      
      {/* Key Public Disclosure Documents */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">📄 Key Documents for Public Disclosure</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Document Name</th>
                <th className="border border-gray-300 p-2">Download/View</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2">CBSE Affiliation Certificate</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">School NOC from State Government</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Recognition Certificate under RTE Act</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Society/Trust Registration Certificate</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Building Safety Certificate</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Fire Safety Certificate</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Sanitation & Water Safety Certificate</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Health & Medical Check-Up Reports</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Fee Structure Document</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
              <tr><td className="border border-gray-300 p-2">Annual Report</td><td className="border border-gray-300 p-2"><Button variant="outline">Download PDF</Button></td></tr>
            </tbody>
          </table>
          <p className="text-gray-600 font-medium">📢 All documents are updated as per the latest CBSE guidelines and school policies.</p>
        </CardContent>
      </Card>
      
      {/* Call to Action */}
      <div className="text-center">
        <Button variant="outline">View All Mandatory Documents →</Button>
      </div>
    </div>
  );
} 