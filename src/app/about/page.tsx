import MissionVission from "./MissionVission";
import Hero from "@/components/Hero";
import Principal from "./Principal";
import History from "./History";
import CoreValues from "./CoreValues";
import Leadership from "./Leadership";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Hero
        title="About Our School"
        desc="Learn about our history, mission, vision, and the values that guide us."
        imgSrc="/img/school_building.jpg"
      />
      <MissionVission />
      <Principal />
      <History />
      <CoreValues />
      <Leadership />

      <CTA
        title="Visit Our Campus"
        desc="Experience our vibrant learning environment firsthand. Schedule a campus tour to see our facilities and meet our faculty."
        secBtn={{ title: "Schedule a Visit", href: "/contact" }}
        outlineBtn={{ title: "Apply Now", href: "/admissions" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
