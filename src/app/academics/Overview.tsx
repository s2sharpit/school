import Image from "next/image";
import React from "react";

export default function Overview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Academic Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Comprehensive Education for Every Stage
            </h2>
            <p className="text-muted-foreground text-lg">
              At B. S. Sr. Sec. School, we offer a well-structured curriculum
              that caters to students from primary to senior secondary levels.
              Our academic programs are designed to foster critical thinking,
              creativity, and a love for learning while preparing students for
              future academic and professional success.
            </p>
            <p className="text-muted-foreground text-lg">
              Our experienced faculty employs innovative teaching methodologies
              that make learning engaging and effective. We maintain small class
              sizes to ensure personalized attention for each student, helping
              them reach their full potential.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students Learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
