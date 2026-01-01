import { SectionHeader } from '@/components/ui/section-header';
import { Globe, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const clubs = [
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Eco Club",
    description:
      "Environmental awareness, conservation projects, and sustainability initiatives that promote responsible citizenship and care for the planet.",
    imageAlt: "Eco Club",
    activities: [
      "Tree plantation drives",
      "Waste management projects",
      "Environmental awareness campaigns",
      "School garden maintenance",
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community Service Club",
    description:
      "Volunteer work, charity drives, and community outreach programs that develop empathy, compassion, and social responsibility among students.",
    imageAlt: "Community Service Club",
    activities: [
      "Visits to orphanages and old age homes",
      "Collection drives for the underprivileged",
      "Awareness campaigns on social issues",
      "Community clean-up initiatives",
    ],
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Heritage Club",
    description:
      "Exploring and preserving cultural heritage, traditions, and history through various activities and projects that foster appreciation for diversity.",
    imageAlt: "Heritage Club",
    activities: [
      "Cultural heritage documentation",
      "Visits to historical sites",
      "Traditional arts and crafts workshops",
      "Cultural exchange programs",
    ],
  },
];

const ClubCard = ({ icon, title, description, imageAlt, activities }: (typeof clubs)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
      <Image src="/placeholder.svg" alt={imageAlt} fill className="object-cover" />
    </div>
    <ul className="space-y-2 text-muted-foreground mb-4">
      {activities.map((activity, index) => (
        <li key={index}>• {activity}</li>
      ))}
    </ul>
  </div>
);

export default function Environmental() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Social Responsibility"
          title="Environmental & Social Clubs"
          description="Fostering awareness and action on environmental and social issues"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
}
