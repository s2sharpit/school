import { SectionHeader } from '@/components/ui/section-header'
import Image from 'next/image'
import React from 'react'

const leadershipPrograms = [
  {
    title: "Student Council",
    description:
      "Elected student representatives who organize events, address student concerns, and develop leadership skills through practical experience.",
  },
  {
    title: "Community Outreach",
    description:
      "Regular visits to orphanages, old age homes, and underprivileged communities to foster empathy and social responsibility.",
  },
  {
    title: "Peer Mentoring",
    description:
      "Senior students guiding juniors in academics and school life, developing mentorship and communication skills.",
  },
  {
    title: "Social Awareness Campaigns",
    description:
      "Student-led initiatives on social issues like health, education, and environmental conservation.",
  },
];

const LeadershipCard = ({ title, description }: (typeof leadershipPrograms)[0]) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Character Building"
          title="Leadership & Community Service"
          description="Developing responsible citizens and future leaders through service and leadership opportunities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Leadership Activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {leadershipPrograms.map((program) => (
              <LeadershipCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
