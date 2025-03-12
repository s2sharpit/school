import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";

const data = [
  {
    title: "Annual Day Celebrations",
    description: "Grand performances, awards, and student showcases.",
  },
  {
    title: "Science & Art Exhibitions",
    description: "Encouraging research, creativity, and innovation.",
  },
  {
    title: "Independence Day & Republic Day",
    description: "Patriotism-filled cultural performances.",
  },
  {
    title: "Inter-School Competitions",
    description: "Bringing out the best in music, dance, and debates.",
  },
];

export default function MajorEvents() {
  return (
    <section className="space-y-6">
      <Title>
        📌 Some of Our Major Events
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((event, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" /> {event.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{event.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600 font-medium text-center mt-6">
        📢 Unleash your creativity and make <span className="text-blue-900 font-semibold">unforgettable memories</span>
      </p>
    </section>
  );
}
