import { Button } from "@/components/ui/button";
import RequiredDocs from "./RequiredDocs";
import AcademicCriteria from "./AcademicCriteria";
import Main from "@/components/ui/Main";

export default function EligibilityPage() {
  return (
    <Main>
      <AcademicCriteria />
      <RequiredDocs />

      {/* Call to Action */}
      {/* <section className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Apply for Admission →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Schedule a Campus Visit →
          </Button>
        </div>
      </section> */}
    </Main>
  );
}
