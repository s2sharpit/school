import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const programs = [
  {
    title: "Primary Education",
    desc: "A strong foundation with focus on fundamental skills, creativity, and character development.",
    Icon: BookOpen,
    href: "/academics/primary",
  },
  {
    title: "Secondary Education",
    desc: "Comprehensive curriculum preparing students for higher education with specialized subjects.",
    Icon: Users,
    href: "/academics/secondary",
  },
  {
    title: "Senior Secondary",
    desc: "Specialized streams in Science, Commerce, and Arts with career guidance and counseling.",
    Icon: GraduationCap,
    href: "/academics/senior-secondary",
  },
];

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Our Programs
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Comprehensive Educational Programs
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            We offer a wide range of programs designed to cater to diverse
            learning needs and interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map(({ title, desc, Icon, href }) => (
            <Card key={title} className="">
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-3 rounded-full w-fit">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
              <Link
                href={href}
                className="text-primary font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}
