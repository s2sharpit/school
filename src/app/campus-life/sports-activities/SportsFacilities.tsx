import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";

const data = [
  {
    title: "Cricket & Football Grounds",
    description: "Spacious fields for team sports and training.",
  },
  {
    title: "Basketball & Volleyball Courts",
    description: "Professionally maintained courts for competitive matches.",
  },
  {
    title: "Athletics Track",
    description: "Running track for sprint and endurance training.",
  },
  {
    title: "Table Tennis & Chess",
    description:
      "Indoor sports facilities for mental agility and skill development.",
  },
  {
    title: "Yoga & Meditation Zone",
    description: "A dedicated area for mental well-being and relaxation.",
  },
];

export default function SportsFacilities() {
  return (
    <section className="space-y-6">
      <Title>🏅 Sports Facilities at Our Campus</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((facility, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />{" "}
              {facility.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{facility.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600 font-medium text-center mt-6">
        📢 Our students have represented the school in **district, state, and
        national-level competitions!**
      </p>
    </section>
  );
}
