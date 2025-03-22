import { ArrowRight, Palette, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const activities = [
  {
    title: "Sports",
    description:
      "We offer a wide range of sports including cricket, basketball, volleyball, athletics, and more. Our annual sports day showcases the athletic talents of our students.",
    icon: Trophy,
    link: "/academics/sports",
  },
  {
    title: "Arts & Culture",
    description:
      "Students can explore their creative side through music, dance, drama, painting, and other cultural activities. We regularly organize cultural events and competitions.",
    icon: Palette,
    link: "/academics/arts",
  },
  {
    title: "Clubs & Societies",
    description:
      "Our various clubs including Science Club, Literary Club, Eco Club, and more provide platforms for students to pursue their interests and develop leadership skills.",
    icon: Users,
    link: "/academics/clubs",
  },
];

export default function ExtraCurricular() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Beyond Academics
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Extracurricular Activities
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            We believe in holistic development through a balance of academic and extracurricular activities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(({ title, description, icon: Icon, link }, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <Link href={link} className="text-primary font-medium inline-flex items-center">
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