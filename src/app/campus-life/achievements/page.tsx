import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import RecentAchievements from "./RecentAchievements";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";

export default function AchievementsPage() {
  return (
    <Main>
      {/* Achievements Overview */}
      <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <Star className="w-10 h-10 text-yellow-500" />
          Recognizing Excellence in Academics & Beyond
        </Title>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our students <span className="text-blue-900 font-semibold">shine in academics, sports, and extracurriculars</span>, winning awards and  
          securing <span className="text-blue-900 font-semibold">top positions</span> in various fields.  
          We take <span className="text-blue-900 font-semibold">pride in celebrating their hard work and achievements</span>.
        </p>
      </section>

      <RecentAchievements />

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Meet Our Top Performers →
        </Button>
      </div>
    </Main>
  );
}
