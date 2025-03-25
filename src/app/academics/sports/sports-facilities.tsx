import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import React from "react";

const facilities = [
  {
    title: "Playground",
    description:
      "A spacious playground with well-maintained fields for cricket, football, and athletics, providing ample space for outdoor sports and physical activities.",
    image: "/playground.jpg",
  },
  {
    title: "Indoor Sports Complex",
    description:
      "A multi-purpose indoor facility for badminton, table tennis, chess, carrom, and other indoor games, allowing sports activities regardless of weather conditions.",
    image: "/indoor-sports-complex.jpg",
  },
  {
    title: "Basketball Court",
    description:
      "A standard-sized basketball court with high-quality flooring and equipment, providing an ideal space for basketball practice and matches.",
    image: "/basketball-court.jpg",
  },
];

const FacilityCard = ({ title, description, image }: (typeof facilities)[0]) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="relative h-48 w-full">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function SportsFacilities() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Infrastructure"
          title="Sports Facilities"
          description="Our campus features modern sports facilities to support a wide range of sporting activities."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
