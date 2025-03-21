import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const newsEvents = [
  {
    date: "March 15, 2025",
    title: "Annual Day Celebration",
    desc: "Join us for our Annual Day celebration featuring performances by our talented students.",
    href: "news-events/annual-day",
    imgSrc: "/img/campus.jpg",
  },
  {
    date: "April 5, 2025",
    title: "Science Exhibition",
    desc: "Explore innovative projects at our annual Science Exhibition showcasing student creativity.",
    href: "/news-events/science-exhibition",
    imgSrc: "/img/campus.jpg",
  },
  {
    date: "May 10, 2025",
    title: "Annual Sports Day",
    desc: "Witness athletic excellence at our Annual Sports Day featuring various competitions.",
    href: "/news-events/sports-day",
    imgSrc: "/img/campus.jpg",
  },
];

export default function NewsEvents() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Stay Updated
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Latest News & Events
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Keep up with the latest happenings at B. S. Sr. Sec. School.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsEvents.map(({ date, title, desc, imgSrc, href }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={`${imgSrc}?height=400&width=600`}
                  alt="Annual Day Celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{date}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{desc}</p>
                <Link
                  href={href}
                  className="text-primary font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/news-events">
              View All News & Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
