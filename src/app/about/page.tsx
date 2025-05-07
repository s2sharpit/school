import MissionVission from "./MissionVission";
import Principal from "./Principal";
import History from "./History";
import CoreValues from "./CoreValues";
import {HeroSection, CTASection} from "@/components";

export default function AboutPage() {
  return (
    <div className="flex flex-col even:bg-red-600">
      <HeroSection
        title="About Our School"
        description="Learn about our history, mission, vision, and the values that guide us."
        badge="Our Story"
      />
      <MissionVission />
      <Principal />
      <History />
      <CoreValues />
      {/* <Leadership /> */}

      <CTASection
        title="Visit Our Campus"
        description="Experience our vibrant learning environment firsthand. Schedule a campus tour to see our facilities and meet our faculty."
        primaryAction={{
          text: "Schedule a Visit",
          href: "/contact",
        }}
        secondaryAction={{
          text: "Apply Now",
          href: "/admissions",
        }}
      />
    </div>
  );
}
