import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const leadershipTeam = [
  {
    name: "Dr. Rajiv Sharma",
    role: "Principal",
    description:
      "With over 25 years of experience in education, Dr. Sharma leads our institution with vision and dedication.",
    imageSrc: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Mrs. Anita Gupta",
    role: "Vice Principal",
    description:
      "Mrs. Gupta oversees academic affairs and ensures the highest standards of teaching and learning.",
    imageSrc: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Mr. Sunil Verma",
    role: "Administrative Officer",
    description:
      "Mr. Verma manages the administrative functions of the school, ensuring smooth operations.",
    imageSrc: "/placeholder.svg?height=400&width=300",
  },
];

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Leadership
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Dedicated professionals guiding our institution towards excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipTeam.map(({ name, role, description, imageSrc }, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={imageSrc} alt={role} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className="text-primary font-medium mb-3">{role}</p>
                <p className="text-muted-foreground mb-4">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/faculty">
              View All Faculty & Staff <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
