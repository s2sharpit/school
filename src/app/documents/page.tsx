import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { ClipboardList } from "lucide-react";
import Documents from "./Documents";
import { redirect } from "next/navigation";
import Section, { Accent } from "@/components/ui/Section";

export default function PublicDisclosurePage() {
  redirect('/under-construction');
  return (
    <Main>
      {/* Public Disclosure Overview */}
      <Section>
        <Title className="flex items-center justify-center gap-3">
          <ClipboardList className="w-10 h-10 text-yellow-500" />
          Public Disclosure Documents
        </Title>
        <Section.Summary className="text-lg text-center max-w-3xl mx-auto">
          As a{" "}
          <Accent>
            CBSE-affiliated institution, B. S. Senior Secondary School, Salempur
            Khadar
          </Accent>{" "}
          is committed to maintaining{" "}
          <Accent>transparency and compliance</Accent> with CBSE regulations.
          This section provides all the{" "}
          <Accent>mandatory public disclosure documents</Accent> as per CBSE
          norms.
        </Section.Summary>
      </Section>

      <Documents val={"mandatory"} />
      <Documents val={"academic"} />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View All Mandatory Documents →
        </Button>
      </div> */}
    </Main>
  );
}
