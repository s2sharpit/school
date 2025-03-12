import { Button } from "@/components/ui/button";
import Title from "@/components/ui/Title";
import { CalendarDays } from "lucide-react";
import Calendar from "./Calendar";
import Main from "@/components/ui/Main";

export default function AcademicCalendar() {
  return (
    <Main>
      {/* Academic Schedule Overview */}
      <section className="text-center space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <CalendarDays className="w-10 h-10 text-yellow-500" />
          Yearly Academic Schedule
        </Title>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          The academic calendar at{" "}
          <span className="text-blue-900 font-semibold">
            B. S. Senior Secondary School
          </span>{" "}
          is designed to ensure{" "}
          <span className="text-blue-900 font-semibold">
            structured learning, holistic development
          </span>{" "}
          and ample opportunities for student participation in co-curricular activities.
        </p>
      </section>

      {/* Key Academic Events */}
      <Calendar />

      {/* Parent-Teacher Meetings */}
      <section className="space-y-6">
        <Title className="text-3xl font-semibold">
          📢 Parent-Teacher Meetings (PTMs)
        </Title>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Regular <span className="text-blue-900 font-semibold">PTMs</span> are
          held every month to discuss student progress, challenges, and growth
          strategies. Parents are encouraged to actively participate.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-lg text-gray-600 font-medium">
          📢 Stay informed, stay ahead! Follow our academic calendar for
          important updates.
        </p>
        <Button className="mt-6 bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Download Full Academic Calendar →
        </Button>
      </div>
    </Main>
  );
}
