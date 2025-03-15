import { Star } from "lucide-react";
import CbseResult from "./CbseResult";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import Section, { Accent } from "@/components/ui/Section";
import { redirect } from "next/navigation";

export default function AchievementsPage() {
  redirect("/under-construction ");
  return (
    <Main>
      {/* Achievements Overview */}
      <Section>
        <Title className="flex items-center justify-center gap-3">
          <Star className="w-10 h-10 text-yellow-500" />
          Recognizing Excellence in Academics & Beyond
        </Title>
        <Section.Summary>
          Our students{" "}
          <Accent>shine in academics, sports, and extracurriculars</Accent>,
          winning awards and securing <Accent>top positions</Accent> in various
          fields. We take{" "}
          <Accent>pride in celebrating their hard work and achievements</Accent>
          .
        </Section.Summary>
      </Section>

      <CbseResult />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Meet Our Top Performers →
        </Button>
      </div> */}
    </Main>
  );
}
