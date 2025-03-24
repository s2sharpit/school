import { TimelineItem } from "@/components/timeline-item";
import { SectionHeader } from "@/components/ui/section-header";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const historyTimeline = [
  {
    title: "2001 - Foundation",
    description:
      "B. S. Sr. Sec. School was established with a vision to provide quality education to the children of Salempur Khadar and surrounding areas.",
  },
  {
    title: "2008 - Expansion",
    description:
      "The school expanded its facilities and introduced secondary education, marking a significant milestone in its growth.",
  },
  {
    title: "2019 - Senior Secondary",
    description:
      "The school was upgraded to Senior Secondary level, offering specialized streams in Science, Commerce, and Arts.",
  },
  {
    title: "Present Day",
    description:
      "Today, B. S. Sr. Sec. School stands as a premier educational institution with state-of-the-art facilities and a reputation for academic excellence.",
  },
]

export default function History() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <SectionHeader
        badge="Our History"
        title="A Legacy of Excellence Since 2001"
        description="Tracing our journey from humble beginnings to becoming a premier educational institution."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src="/img/schoolPhoto1.jpg" alt="School History" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          {historyTimeline.map((item, index) => (
            <TimelineItem key={index} icon={Clock} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
}
