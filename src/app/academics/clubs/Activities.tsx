import { SectionHeader } from '@/components/ui/section-header'
import React from 'react'

const events = [
  { month: "July", title: "Club Enrollment Week", description: "Students sign up for clubs of their choice" },
  { month: "Sept", title: "Inter-Club Competitions", description: "Friendly competitions between different clubs" },
  { month: "Dec", title: "Club Exhibition", description: "Showcase of club activities and achievements" },
  { month: "Feb", title: "Annual Club Day", description: "Celebration of club achievements and activities" },
];

const EventCard = ({ month, title, description }: (typeof events)[0]) => (
  <div className="flex items-center gap-4">
    <div className="bg-primary/10 p-3 rounded-lg text-center min-w-[80px]">
      <div className="text-primary font-bold">{month}</div>
    </div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default function Activities() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Annual Schedule"
          title="Club Activities Calendar"
          description="Regular meetings and special events throughout the academic year"
        />
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm space-y-6">
          {/* Regular Meetings */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold mb-2">Regular Club Meetings</h3>
            <p className="text-muted-foreground">
              Most clubs meet once or twice a week during the designated club period or after school hours. The
              schedule is designed to allow students to participate in multiple clubs based on their interests.
            </p>
          </div>

          {/* Special Events */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold mb-2">Special Events</h3>
            <div className="space-y-4 mt-4">
              {events.map((event) => (
                <EventCard key={event.month} {...event} />
              ))}
            </div>
          </div>

          {/* Club Leadership */}
          <div>
            <h3 className="text-xl font-bold mb-2">Club Leadership</h3>
            <p className="text-muted-foreground">
              Each club has student leaders (President, Vice President, Secretary) who are elected or appointed at
              the beginning of the academic year. These leaders work with teacher coordinators to plan and execute
              club activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
