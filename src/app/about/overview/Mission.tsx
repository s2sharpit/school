import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import React from 'react'
import MissionCard from './MissionCard'
import { BookOpen, Globe, Handshake, Lightbulb, ShieldCheck, Users } from "lucide-react";

const missions = [
    {
      title: "Quality Education",
      desc: "Providing student-centric learning that fosters curiosity and critical thinking.",
      icon: <BookOpen />,
    },
    {
      title: "Holistic Growth",
      desc: "Encouraging sports, cultural activities, and skill development alongside academics.",
      icon: <Users />,
    },
    {
      title: "Character Building",
      desc: "Instilling discipline, respect, and moral responsibility in students.",
      icon: <ShieldCheck />,
    },
    {
      title: "Global Readiness",
      desc: "Equipping students with 21st-century skills for future success.",
      icon: <Globe />,
    },
    {
      title: "Innovative Learning",
      desc: "Implementing modern teaching methodologies, digital tools, and experiential learning.",
      icon: <Lightbulb />,
    },
    {
      title: "Community & Leadership",
      desc: "Fostering teamwork, leadership, and a sense of social responsibility among students.",
      icon: <Handshake />,
    },
  ];
  

export default function Mission() {
  return (
    <Section>
    <Title>🚀 Our Mission</Title>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {missions.map((item, index) => (
        <MissionCard
          key={index}
          index={index}
          iconColor="text-orange-400"
          {...item}
        />
      ))}
    </div>
    <Section.Note>
      Our mission is to build a generation of lifelong learners who will
      contribute positively to society!
    </Section.Note>
  </Section>

  )
}
