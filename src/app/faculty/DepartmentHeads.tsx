import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const departmentHeads = [
  {
    name: "Mrs Khuswant Kaur",
    title: "HOD English",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "English Department Head",
  },
  {
    name: "Ms Shivani",
    title: "HOD Mathematics",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Mathematics Department Head",
  },
  {
    name: "Ms Monika",
    title: "HOD Science",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Science Department Head",
  },
  {
    name: "Mrs Baby",
    title: "HOD Hindi",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Hindi Department Head",
  },
  {
    name: "Mr Rajender Kumar",
    title: "HOD Sanksrit",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Hindi Department Head",
  },
  {
    name: "Mrs Nirmala Saini",
    title: "Social Science",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Social Science Department Head",
  },
  {
    name: "Mrs Rajinder Kaur",
    title: "HOD Punjabi",
    image: "/img/principal.jpg?height=300&width=300",
    alt: "Punjabi Department Head",
  },
];

export default function DepartmentHeads() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
      <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Academic Leaders</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Department Heads</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Meet the experienced educators who lead our academic departments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentHeads.map((head, index) => (
            <Card key={index}>
              <CardContent>
                <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image src={head.image} alt={head.alt} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-bold">{head.name}</h3>
                <p className="text-primary font-medium mb2">{head.title}</p>
                {/* <p className="text-muted-foreground text-sm">{head.description}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
