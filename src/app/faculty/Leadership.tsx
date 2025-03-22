import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

export default function Leadership() {
  const team = [
    {
      name: "Dr. Rajiv Sharma",
      role: "Principal",
      image: "/img/principal.jpg?height=400&width=300",
      description:
        "Ph.D. in Education with over 25 years of experience in educational leadership. Dr. Sharma is dedicated to fostering academic excellence and holistic development.",
    },
    {
      name: "Mrs. Anita Gupta",
      role: "Vice Principal",
      image: "/img/principal.jpg?height=400&width=300",
      description:
        "M.Ed. with 20 years of teaching and administrative experience. Mrs. Gupta oversees academic affairs and ensures the highest standards of teaching and learning.",
    },
    {
      name: "Mr. Sunil Verma",
      role: "Administrative Officer",
      image: "/img/principal.jpg?height=400&width=300",
      description:
        "MBA with 15 years of experience in educational administration. Mr. Verma manages the administrative functions of the school, ensuring smooth operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            School Leadership
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Administrative Team
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Meet the leaders who guide our institution towards excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden pt-0">
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
