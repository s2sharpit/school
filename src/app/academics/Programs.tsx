import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const programs = [
  {
    title: "Primary Education",
    description:
      "Our primary education program (Classes I-V) focuses on building a strong foundation in core subjects while nurturing creativity and curiosity. We employ activity-based learning to make education enjoyable and effective.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    icon: BookOpen,
    link: "/academics/primary",
  },
  {
    title: "Secondary Education",
    description:
      "Our secondary program (Classes VI-X) offers a comprehensive curriculum that prepares students for board examinations while developing critical thinking and analytical skills through practical applications.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    icon: Users,
    link: "/academics/secondary",
  },
  {
    title: "Senior Secondary",
    description:
      "Our senior secondary program (Classes XI-XII) offers specialized streams in Science, Commerce, and Arts with expert faculty, well-equipped laboratories, and career guidance to prepare students for higher education.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    icon: GraduationCap,
    link: "/academics/senior-secondary",
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Educational Offerings
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Explore our diverse range of academic programs tailored to different age groups and learning needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map(({ title, description, imageSrc, icon: Icon, link }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <Link href={link} className="text-primary font-medium inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
