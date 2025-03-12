import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import SportsFacilities from "./SportsFacilities";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";

export default function SportsActivitiesPage() {
  return (
    <Main>
      {/* Sports Overview */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <Medal className="w-10 h-10 text-yellow-500" />
          Nurturing Champions On & Off the Field
        </Title>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Sports play a <span className="text-blue-900 font-semibold">vital role</span> in developing <span className="text-blue-900 font-semibold">discipline, teamwork, and leadership</span> among students.  
          At <span className="text-blue-900 font-semibold">B. S. Senior Secondary School</span> we provide <span className="text-blue-900 font-semibold">world-class sports facilities</span> to encourage  
          <span className="text-blue-900 font-semibold">physical fitness and a competitive spirit</span>.
        </p>
      </section>

      <SportsFacilities />
     

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Our Sports Achievements →
        </Button>
      </div>
    </Main>
  );
}
