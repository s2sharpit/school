import Showcase from "@/components/ShowCase";
import { Accent, SectionNote } from "@/components/ui/Section";
import Title from "@/components/ui/Title";

const events = [
  {
    title: "Annual Day Celebrations",
    desc: "Grand performances, awards, and student showcases.",
    imgSrc: "/events/annual-day.jpg",
  },
  {
    title: "Science & Art Exhibitions",
    desc: "Encouraging research, creativity, and innovation.",
    imgSrc: "/facilities/physics-lab.jpg",
  },
  {
    title: "Independence Day & Republic Day",
    desc: "Patriotism-filled cultural performances.",
    imgSrc: "/events/independence-day.jpg",
  },
  {
    title: "Inter-School Competitions",
    desc: "Bringing out the best in music, dance, and debates.",
    imgSrc: "/events/inter-school.jpg",
  },
];

export default function MajorEvents() {
  return (
    <section className="space-y-6">
      <Title>📌 Some of Our Major Events</Title>
      <Showcase items={events} />
      <SectionNote>
        Unleash your creativity and make <Accent>unforgettable memories</Accent>
        .
      </SectionNote>
    </section>
  );
}
