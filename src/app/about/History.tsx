import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const historyEvents = [
  {
    year: "2001 - Foundation",
    description:
      "B. S. Sr. Sec. School was established with a vision to provide quality education to the children of Salempur Khadar and surrounding areas.",
  },
  {
    year: "2008 - Expansion",
    description:
      "The school expanded its facilities and introduced secondary education, marking a significant milestone in its growth.",
  },
  {
    year: "2005 - Senior Secondary",
    description:
      "The school was upgraded to Senior Secondary level, offering specialized streams in Science, Commerce, and Arts.",
  },
  {
    year: "Present Day",
    description:
      "Today, B. S. Sr. Sec. School stands as a premier educational institution with state-of-the-art facilities and a reputation for academic excellence.",
  },
];

export default function History() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our History
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            A Legacy of Excellence Since 1985
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Tracing our journey from humble beginnings to becoming a premier educational institution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/img/campus.jpg?height=800&width=600"
              alt="School History"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {historyEvents.map((event, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{event.year}</h3>
                </div>
                <p className="text-muted-foreground pl-16">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
