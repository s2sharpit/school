import { CalendarHeart } from "lucide-react";
import MajorEvents from "./MajorEvents";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import Section, { Accent } from "@/components/ui/Section";

export default function EventsPage() {
  return (
    <Main>
      {/* Events Overview */}
      <Section>
        <Title className="flex items-center justify-center gap-3">
          <CalendarHeart className="w-10 h-10 text-yellow-500" />
          A Campus Filled with Learning & Celebrations
        </Title>
        <Section.Summary className="text-lg max-w-3xl mx-auto">
          We believe in <Accent>celebrating traditions, cultures, and creativity</Accent> through various events and competitions.  
          Our <Accent>Annual Function, Science Exhibitions, Festivals, and Cultural Events</Accent> provide students with a  
          platform to <Accent>showcase their talents and leadership skills</Accent>.
        </Section.Summary>
      </Section>

      <MajorEvents />

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button asChild className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          <Link href="/campus-life/gallery">
          Explore Our Event Gallery →
          </Link>
        </Button>
      </div> */}
    </Main>
  );
}
