import { SectionHeader } from '@/components/ui/section-header';
import Image from 'next/image';
import React from 'react';

const events = [
  {
    title: "Annual Day",
    description:
      "A grand celebration featuring cultural performances, prize distribution, and showcasing the achievements of the school and its students.",
    image: "/annual-day.jpg",
  },
  {
    title: "Cultural Fest",
    description:
      "An inter-school cultural competition featuring music, dance, drama, and literary events that foster healthy competition and cultural exchange.",
    image: "/cultural-fest.jpg",
  },
  {
    title: "Science Exhibition",
    description:
      "A showcase of student projects and innovations in science and technology, demonstrating practical applications of scientific concepts.",
    image: "/science-exhibition.jpg",
  },
];

const EventCard = ({ title, description, image }: (typeof events)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function Annual() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="School Events"
          title="Annual Celebrations & Events"
          description="Showcasing student talents and achievements through various school events."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
