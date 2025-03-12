import { Button } from "@/components/ui/button";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { ClipboardCheck } from "lucide-react";
import Assessments from "./Assessments";
import GradingSystem from "./GradingSystem";

export default function ExamResultsPage() {
  return (
    <Main className="">
      {/* Examination & Assessment System */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          Examination & Assessment System
        </Title>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At{" "}
          <span className="text-blue-900 font-semibold">
            B. S. Senior Secondary School
          </span>
          , we follow the{" "}
          <span className="text-blue-900 font-semibold">
            CBSE examination guidelines
          </span>{" "}
          and conduct regular assessments to track student progress. Our
          evaluation system ensures a{" "}
          <span className="text-blue-900 font-semibold">
            fair, transparent, and stress-free
          </span>
          approach to learning.
        </p>
      </section>

      <Assessments />
      <GradingSystem />

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <p className=" font-medium text-lg">
          📢 Students must secure at least a Grade D (33% and above) to pass
          the examination.
        </p>

        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Detailed Results →
        </Button>
      </div>
    </Main>
  );
}
