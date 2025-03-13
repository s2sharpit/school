import { Building } from "lucide-react";
import KeyFacilities from "./KeyFacilities";
import { Summary, Accent } from "@/components/ui/Section";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";

export default function FacilitiesPage() {
  return (
    <Main>
      {/* Facilities Overview */}
      <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <Building className="w-10 h-10 text-yellow-500" />A Modern Learning
          Environment for Holistic Growth
        </Title>
        <Summary className="">
          At <Accent>B. S. Senior Secondary School, Salempur Khadar</Accent>, we
          provide <Accent>state-of-the-art infrastructure</Accent> designed to
          support{" "}
          <Accent>
            academic excellence, creativity, and overall student development
          </Accent>
          . Our well-equipped campus ensures students have access to the{" "}
          <Accent>
            best resources for learning, sports, and extracurricular activities.
          </Accent>
        </Summary>
      </section>

      <KeyFacilities />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Gallery →
        </Button>
      </div> */}
    </Main>
  );
}
