import { ClipboardCheck } from "lucide-react";
import Procedure from "./Procedure";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { Accent, Summary } from "@/components/ui/Section";

export default function AdmissionProcessPage() {
  return (
    <Main>
      {/* Admission Overview */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          Admission Process at B. S. Senior Secondary School
        </Title>
        <Summary>
          We welcome students from <Accent>diverse backgrounds</Accent> who are eager to learn, grow, and excel.  
          Our admission process is <Accent>simple, transparent, and merit-based</Accent>, ensuring every child  
          gets an opportunity to receive <Accent>quality education</Accent>.
        </Summary>
      </section>

      <Procedure />

      {/* Call to Action */}
      {/* <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Download Admission Form →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Contact for Admissions →
          </Button>
        </div>
      </div> */}
    </Main>
  );
}
