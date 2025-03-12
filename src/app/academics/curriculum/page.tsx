import { Button } from "@/components/ui/button";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { GraduationCap } from "lucide-react";
import Subjects from "./Subjects";
import KeyFeatures from "./KeyFeatures";

export default function CurriculumPage() {
  return (
    <Main className="">
      {/* Curriculum Overview */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-yellow-500" />
          Comprehensive & Well-Structured CBSE Curriculum
        </Title>
        <p className="text-lg max-w-3xl mx-auto">
          At <span className="text-blue-900 font-semibold">B. S. Senior Secondary School, Salempur Khadar</span>, we follow the 
          Central Board of Secondary Education (CBSE) curriculum, which provides a <span className="text-blue-900 font-semibold">strong academic foundation</span> {" "}
          while fostering <span className="text-blue-900 font-semibold">creativity, critical thinking, and problem-solving skills</span>.
        </p>
      </section>

      <KeyFeatures />
      <Subjects />

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-600 font-medium text-lg">
          📢 We ensure that every student receives quality education tailored to their interests and career goals!
        </p>
        <Button className="mt-6 bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Faculty →
        </Button>
      </div>
    </Main>
  );
}
