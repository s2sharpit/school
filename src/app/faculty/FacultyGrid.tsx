import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FacultyGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Our Educators
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Teaching Faculty
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Meet our dedicated teachers who inspire and guide our students every
            day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i}>
              <CardContent>
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/img/principal.jpg?height=200&width=200"
                    alt={`Teacher ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb1">{`Teacher ${i + 1}`}</h3>
                <p className="text-primary font-medium mb2">{`Subject Teacher`}</p>
                {/* <p className="text-muted-foreground text-sm">
                  Experienced educator with a passion for teaching and mentoring
                  students.
                </p> */}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/faculty/all">
              View All Faculty Members <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
