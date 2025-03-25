import { SectionHeader } from '@/components/ui/section-header'
import { BookOpen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const clubs = [
  {
    name: "Science Club",
    description:
      "Experiments, projects, and discussions that foster scientific inquiry and innovation. Members participate in science exhibitions and competitions.",
    image: "/placeholder.svg?height=400&width=600",
    activities: [
      "Weekly experiments and demonstrations",
      "Science quizzes and competitions",
      "Field trips to science centers",
      "Annual science exhibition",
    ],
  },
  {
    name: "Mathematics Club",
    description:
      "Problem-solving sessions, mathematical games, and puzzles that develop logical thinking and analytical skills. Members participate in math olympiads and competitions.",
    image: "/placeholder.svg?height=400&width=600",
    activities: [
      "Math puzzle sessions",
      "Preparation for math olympiads",
      "Recreational mathematics",
      "Math-themed games and activities",
    ],
  },
  {
    name: "Literary Club",
    description:
      "Creative writing, debates, elocution, and reading activities that enhance language skills and literary appreciation. Members contribute to the school magazine and participate in literary competitions.",
    image: "/placeholder.svg?height=400&width=600",
    activities: [
      "Creative writing workshops",
      "Book discussions and reviews",
      "Debates and elocution",
      "School magazine publication",
    ],
  },
];

const ClubCard = ({ name, description, image, activities }: (typeof clubs)[0]) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
      <BookOpen className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <ul className="space-y-2 text-muted-foreground mb-4">
      {activities.map((activity, index) => (
        <li key={index}>• {activity}</li>
      ))}
    </ul>
  </div>
);

export default function AcademicClubs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Academic Enrichment"
          title="Academic Clubs"
          description="Extending classroom learning through specialized interest groups"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <ClubCard key={club.name} {...club} />
          ))}
        </div>
      </div>
    </section>
  );
}
