import { SectionHeader } from '@/components/ui/section-header';
import { FlaskConical, Feather, Leaf, Bot, Camera, Brain } from 'lucide-react';
import React from 'react';

const clubs = [
  {
    title: "Science Club",
    description:
      "Experiments, projects, and discussions that foster scientific inquiry and innovation. Members participate in science exhibitions and competitions.",
    icon: FlaskConical,
  },
  {
    title: "Literary Club",
    description:
      "Creative writing, debates, elocution, and reading activities that enhance language skills and literary appreciation.",
    icon: Feather,
  },
  {
    title: "Eco Club",
    description:
      "Environmental awareness, conservation projects, and sustainability initiatives that promote responsible citizenship.",
    icon: Leaf,
  },
  {
    title: "Robotics Club",
    description:
      "Designing, building, and programming robots, with participation in robotics competitions and tech fairs.",
    icon: Bot,
  },
  {
    title: "Photography Club",
    description:
      "Learning photography techniques, photo walks, and exhibitions that develop visual storytelling skills.",
    icon: Camera,
  },
  {
    title: "Quiz Club",
    description:
      "General knowledge, current affairs, and specialized quizzes that enhance awareness and quick thinking.",
    icon: Brain,
  },
];

const ClubCard = ({ title, description, icon: Icon }: (typeof clubs)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Clubs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Special Interest Groups"
          title="Clubs & Societies"
          description="Platforms for students to pursue their interests and develop specialized skills."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <ClubCard key={club.title} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
}
