import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { ClipboardCheck } from "lucide-react";
import Assessments from "./Assessments";
import GradingSystem from "./GradingSystem";
import Section, { Accent } from "@/components/ui/Section";

export default function ExamResultsPage() {
  return (
    <Main className="">
      {/* Examination & Assessment System */}
      <Section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          Examination & Assessment System
        </Title>
        <Section.Summary>
          At <Accent>B. S. Senior Secondary School</Accent> , we follow the{" "}
          <Accent>CBSE examination guidelines</Accent> and conduct regular
          assessments to track student progress. Our evaluation system ensures a{" "}
          <Accent>fair, transparent, and stress-free</Accent>approach to
          learning.
        </Section.Summary>
      </Section>

      <Assessments />
      <GradingSystem />

      {/* Call to Action */}
      {/* <div className="text-center space-y-6">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Detailed Results →
        </Button>
      </div> */}
    </Main>
  );
}
