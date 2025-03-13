import { Accent, SectionNote } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Annual Day Celebrations",
    description: "Grand performances, awards, and student showcases.",
    img: "/events/annual-day.jpg",
  },
  {
    title: "Science & Art Exhibitions",
    description: "Encouraging research, creativity, and innovation.",
    img: "/facilities/physics-lab.jpg",
  },
  {
    title: "Independence Day & Republic Day",
    description: "Patriotism-filled cultural performances.",
    img: "/events/independence-day.jpg",
  },
  {
    title: "Inter-School Competitions",
    description: "Bringing out the best in music, dance, and debates.",
    img: "/events/inter-school.jpg",
  },
];

export default function MajorEvents() {
  return (
    <section className="space-y-6">
      <Title>📌 Some of Our Major Events</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((event, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg flex flex-col"
          >
            <div className="relative h-52 w-full rounded-lg overflow-hidden">
              <Image
                src={event.img}
                alt={event.title}
                layout="fill"
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mt-4">
              {event.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{event.description}</p>
          </div>
        ))}
      </div>

      <SectionNote>
        Unleash your creativity and make <Accent>unforgettable memories</Accent>
        .
      </SectionNote>
    </section>
  );
}
