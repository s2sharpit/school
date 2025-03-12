import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { ClipboardList } from "lucide-react";
import DocsTable from "./DocsTable";

export default function PublicDisclosurePage() {
  return (
    <Main>
      {/* Public Disclosure Overview */}
      <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardList className="w-10 h-10 text-yellow-500" />
          Public Disclosure Documents
        </Title>
        <p className="text-lg text-center max-w-3xl mx-auto">
          As a <span className="text-blue-900 font-semibold">CBSE-affiliated institution, B. S. Senior Secondary School, Salempur Khadar</span> is committed to  
          maintaining <span className="text-blue-900 font-semibold">transparency and compliance</span> with CBSE regulations.  
          This section provides all the <span className="text-blue-900 font-semibold">mandatory public disclosure documents</span> as per CBSE norms.
        </p>
        {/* <p className="text-gray-600 font-medium">
          📢 We believe in **openness, accountability, and accessibility** of important school-related  
          information for **parents, students, and stakeholders**.
        </p>
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Download CBSE Affiliation Documents →
        </Button> */}
      </section>

      <DocsTable />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View All Mandatory Documents →
        </Button>
      </div> */}
    </Main>
  );
}
