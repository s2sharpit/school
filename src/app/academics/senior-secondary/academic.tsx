import { SectionHeader } from "@/components/ui/section-header";
import { Check } from "lucide-react";
import React from "react";

const stats = [
  { value: "98.5%", label: "Students Scoring Above 90%" },
  { value: "100%", label: "Pass Percentage" },
  { value: "92.8%", label: "Average Score" },
];

const achievements = [
  "5 students ranked in the top 100 in CBSE Board Examinations",
  "15 students qualified for JEE Advanced",
  "12 students secured admissions in top medical colleges",
  "Several students received scholarships from prestigious universities",
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-primary mb-2">{value}</div>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

const AchievementItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <Check className="h-5 w-5 text-primary mt-0.5" />
    <p className="text-muted-foreground">{text}</p>
  </li>
);

export default function Academic() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Track Record"
          title="Academic Excellence"
          description="Our senior secondary students consistently achieve outstanding results in board examinations."
        />
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-center">Board Examination Results (Previous Year)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="mt-8 pt-8 border-t">
            <h4 className="font-bold mb-4 text-center">Notable Achievements</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <AchievementItem key={index} text={achievement} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
