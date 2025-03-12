import { Button } from "@/components/ui/button";
import { CalendarHeart } from "lucide-react";
import MajorEvents from "./MajorEvents";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";

export default function EventsPage() {
  return (
    <Main>
      {/* Events Overview */}
      <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <CalendarHeart className="w-10 h-10 text-yellow-500" />
          A Campus Filled with Learning & Celebrations
        </Title>
        <p className="text-lg max-w-3xl mx-auto">
          We believe in <span className="text-blue-900 font-semibold">celebrating traditions, cultures, and creativity</span> through various events and competitions.  
          Our <span className="text-blue-900 font-semibold">Annual Function, Science Exhibitions, Festivals, and Cultural Events</span> provide students with a  
          platform to <span className="text-blue-900 font-semibold">showcase their talents and leadership skills</span>
        </p>
      </section>

      <MajorEvents />

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Event Gallery →
        </Button>
      </div>
    </Main>
  );
}
