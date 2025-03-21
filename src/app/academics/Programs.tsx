import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Educational Offerings
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Explore our diverse range of academic programs tailored to different
            age groups and learning needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Primary Education"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Primary Education</h3>
              <p className="text-muted-foreground mb-4">
                Our primary education program (Classes I-V) focuses on building
                a strong foundation in core subjects while nurturing creativity
                and curiosity. We employ activity-based learning to make
                education enjoyable and effective.
              </p>
              <Link
                href="/academics/primary"
                className="text-primary font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Secondary Education"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secondary Education</h3>
              <p className="text-muted-foreground mb-4">
                Our secondary program (Classes VI-X) offers a comprehensive
                curriculum that prepares students for board examinations while
                developing critical thinking and analytical skills through
                practical applications.
              </p>
              <Link
                href="/academics/secondary"
                className="text-primary font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Senior Secondary Education"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Senior Secondary</h3>
              <p className="text-muted-foreground mb-4">
                Our senior secondary program (Classes XI-XII) offers specialized
                streams in Science, Commerce, and Arts with expert faculty,
                well-equipped laboratories, and career guidance to prepare
                students for higher education.
              </p>
              <Link
                href="/academics/senior-secondary"
                className="text-primary font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
