import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { GraduationCap } from "lucide-react";
import Subjects from "./Subjects";
import KeyFeatures from "./KeyFeatures";
import { Accent, Summary } from "@/components/ui/Section";

export default function CurriculumPage() {
  return (
    <Main className="">
      {/* Curriculum Overview */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <GraduationCap className="w-10 h-10 text-yellow-500" />
          Comprehensive & Well-Structured CBSE Curriculum
        </Title>
        <Summary>
          At <Accent>B. S. Senior Secondary School, Salempur Khadar</Accent>, we
          follow the Central Board of Secondary Education (CBSE) curriculum,
          which provides a <Accent>strong academic foundation</Accent> while
          fostering{" "}
          <Accent>
            creativity, critical thinking, and problem-solving skills
          </Accent>
          .
        </Summary>
      </section>

      <KeyFeatures />
      <Subjects />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="mt-6 bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Faculty →
        </Button>
      </div> */}
    </Main>
  );
}
