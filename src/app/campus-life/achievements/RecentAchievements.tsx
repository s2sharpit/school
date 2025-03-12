import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";

const data = [
  {
    title: "CBSE Board Exam Toppers",
    description: "Celebrating academic excellence.",
  },
  {
    title: "Science & Mathematics Olympiad Winners",
    description: "Recognizing talent in STEM.",
  },
  {
    title: "Gold Medalists in State-Level Sports Competitions",
    description: "Achievements in athletics.",
  },
  {
    title: "Inter-School Cultural & Debate Champions",
    description: "Showcasing intellect and talent.",
  },
];

export default function RecentAchievements() {
  return (
    <section className="space-y-6">
      <Title>
        📌 Some Recent Achievements
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {data.map((achievement, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />{" "}
              {achievement.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-lg font-medium text-center">
        📢 Every achievement is a <span className="text-blue-900 font-semibold">step towards success</span> and we celebrate
        them all!
      </p>
    </section>
  );
}
