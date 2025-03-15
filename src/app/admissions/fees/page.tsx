import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import { CreditCard } from "lucide-react";
import PaymentModes from "./PaymentModes";
import FeeBreakdown from "./FeeBreakdown";
import Section, { Accent } from "@/components/ui/Section";

export default function FeeStructurePage() {
  return (
    <Main>
      {/* Fee Structure Overview */}
      <Section className="text-center">
        <Title className="flex items-center justify-center gap-3">
          <CreditCard className="w-10 h-10 text-yellow-500" />
          Fee Structure
        </Title>
        <Section.Summary>
          We ensure that <Accent>education remains affordable</Accent> while
          maintaining <Accent>high academic standards</Accent>. Our fee
          structure is designed to be <Accent>accessible</Accent> for all
          families.
        </Section.Summary>
      </Section>

      <FeeBreakdown />

      <PaymentModes />

      {/* Call to Action */}
      {/* <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Check Scholarship Eligibility →
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
            Pay Fees Online →
          </Button>
        </div>
      </div> */}
    </Main>
  );
}
