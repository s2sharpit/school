import React from "react";
import Svg from "../Svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "../ui/section-header";

const testimonials = [
  {
    review:
      "The teachers at B. S. Sr. Sec. School are exceptional. They've helped my daughter develop not just academically but as a confident individual.",
    name: "Rajesh Patel",
    role: "Parent",
    rating: 5,
  },
  {
    review:
      "The school's focus on both academics and extracurricular activities has given my son a well-rounded education. The facilities are excellent.",
    name: "Sunita Kumar",
    role: "Parent",
    rating: 5,
  },
  {
    review:
      "As an alumnus, I can confidently say that my years at B. S. Sr. Sec. School shaped my future. The values and education I received here have been invaluable",
    name: "Amit Sharma",
    role: "Alumni",
    rating: 5,
  },
];

export default function Testimonials() {
  function getInitials(name: string) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <SectionHeader
          badge="Testimonials"
          title="What Parents & Students Say"
          description="Hear from our community about their experiences at B. S. Sr. Sec. School."
        />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ review, name, role, rating }) => (
            <Card key={name} className="rounded-md">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <Svg.Star
                      key={index}
                      className={
                        index < rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">&quot;{review}&quot;</p>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarFallback className="text-primary font-medium bg-primary/20">
                      {getInitials(name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{name}</h4>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
