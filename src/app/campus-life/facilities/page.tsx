import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";
import KeyFacilities from "./KeyFacilities";

export default function FacilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Facilities Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <Building className="w-10 h-10 text-yellow-500" />
          A Modern Learning Environment for Holistic Growth
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <strong>B. S. Senior Secondary School, Salempur Khadar</strong>, we provide **state-of-the-art infrastructure** designed to 
          support **academic excellence, creativity, and overall student development**.  
          Our well-equipped campus ensures students have access to the **best resources for learning, sports, and extracurricular activities**.
        </p>
      </section>

      <KeyFacilities />

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Gallery →
        </Button>
      </div>
    </div>
  );
}
