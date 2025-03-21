import Image from "next/image";
import React from "react";

const facilities = [
  {
    title: "Well-Equipped Classrooms",
    description:
      "Our spacious classrooms are equipped with modern teaching aids including smart boards and audio-visual equipment to facilitate interactive learning.",
  },
  {
    title: "Science Laboratories",
    description:
      "We have separate well-equipped laboratories for Physics, Chemistry, and Biology with modern apparatus and safety measures for practical learning.",
  },
  {
    title: "Computer Lab",
    description:
      "Our computer lab features the latest hardware and software, providing students with hands-on experience in information technology.",
  },
  {
    title: "Library",
    description:
      "Our extensive library houses a rich collection of books, periodicals, and digital resources to foster a love for reading and research.",
  },
];

export default function Facilities() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Learning Environment
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            State-of-the-Art Facilities
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Our campus is equipped with modern facilities to enhance the
            learning experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/img/campus.jpg?height=800&width=1200"
              alt="School Facilities"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {facilities.map(({ title, description }, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
