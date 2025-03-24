import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
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
    imageSrc: "/img/principal.jpg?height=400&width=300",
  },
  {
    name: "Mrs. Anita Gupta",
    role: "Vice Principal",
    description:
      "Mrs. Gupta oversees academic affairs and ensures the highest standards of teaching and learning.",
    imageSrc: "/img/principal.jpg?height=400&width=300",
  },
  {
    name: "Mr. Sunil Verma",
    role: "Administrative Officer",
    description:
      "Mr. Verma manages the administrative functions of the school, ensuring smooth operations.",
    imageSrc: "/img/principal.jpg?height=400&width=300",
  },
];

export default function Leadership() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Leadership"
          title="Meet Our Leadership Team"
          description="Dedicated professionals guiding our institution towards excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipTeam.map(
            ({ name, role, description, imageSrc }, index) => (
              <Card key={index} className="overflow-hidden pt-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={imageSrc}
                    alt={role}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold mb-1">{name}</h3>
                  <p className="text-primary font-medium mb-3">{role}</p>
                  <p className="text-muted-foreground mb-4">{description}</p>
                </CardContent>
              </Card>
            )
          )}
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
