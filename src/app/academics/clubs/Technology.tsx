import { SectionHeader } from '@/components/ui/section-header';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const clubs = [
  {
    title: "Robotics Club",
    description:
      "Designing, building, and programming robots, with participation in robotics competitions and tech fairs. Members learn about mechanics, electronics, and coding.",
  },
  {
    title: "Coding Club",
    description:
      "Learning programming languages, developing applications, and creating websites. Members work on coding projects and participate in hackathons.",
  },
  {
    title: "Digital Media Club",
    description:
      "Photography, videography, and digital content creation. Members document school events, create promotional materials, and manage social media.",
  },
];

const ClubCard = ({ title, description }: (typeof clubs)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Lightbulb className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default function Technology() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Digital Skills"
          title="Technology Clubs"
          description="Developing technical skills and digital literacy for the future"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {clubs.map((club, index) => (
              <ClubCard key={index} {...club} />
            ))}
          </div>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Technology Clubs" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
