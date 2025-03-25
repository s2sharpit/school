import { SectionHeader } from '@/components/ui/section-header';
import { Music, Palette, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const activities = [
  {
    title: "Music",
    description:
      "Vocal and instrumental music training in both Indian and Western traditions, with regular performances and recitals.",
    icon: Music,
  },
  {
    title: "Dance",
    description:
      "Classical, folk, and contemporary dance forms taught by experienced instructors, with opportunities to perform at school events.",
    icon: Palette,
  },
  {
    title: "Visual Arts",
    description:
      "Drawing, painting, sculpture, and crafts with regular exhibitions to showcase student artwork.",
    icon: Palette,
  },
  {
    title: "Drama & Theatre",
    description:
      "Acting, scriptwriting, and stage production with annual plays and dramatic performances.",
    icon: Users,
  },
];

const ActivityCard = ({ title, description, icon: Icon }: (typeof activities)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Arts() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Creative Expression"
          title="Arts & Cultural Activities"
          description="Nurturing creativity and cultural appreciation through various artistic pursuits."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
          </div>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="/arts-cultural-activities.jpg"
              alt="Arts and Cultural Activities"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
