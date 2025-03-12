import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

export default function PublicDisclosurePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Public Disclosure Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <ClipboardList className="w-10 h-10 text-yellow-500" />
          Public Disclosure Documents
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          As a **CBSE-affiliated institution**, **B. S. Senior Secondary School, Salempur Khadar** is committed to  
          maintaining **transparency and compliance** with CBSE regulations.  
          This section provides all the **mandatory public disclosure documents** as per CBSE norms.
        </p>
        <p className="text-gray-600 font-medium">
          📢 We believe in **openness, accountability, and accessibility** of important school-related  
          information for **parents, students, and stakeholders**.
        </p>
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Download CBSE Affiliation Documents →
        </Button>
      </section>

      {/* Key Public Disclosure Documents */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          📄 Key Documents for Public Disclosure
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-3 text-left">Document Name</th>
                <th className="p-3 text-left">Download/View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {[
                "CBSE Affiliation Certificate",
                "School NOC from State Government",
                "Recognition Certificate under RTE Act",
                "Society/Trust Registration Certificate",
                "Building Safety Certificate",
                "Fire Safety Certificate",
                "Sanitation & Water Safety Certificate",
                "Health & Medical Check-Up Reports",
                "Fee Structure Document",
                "Annual Report",
              ].map((document, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="p-3 text-gray-700">{document}</td>
                  <td className="p-3">
                    <Button variant="outline">Download PDF</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 font-medium text-center mt-6">
          📢 All documents are updated as per the **latest CBSE guidelines and school policies**.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View All Mandatory Documents →
        </Button>
      </div>
    </div>
  );
}
