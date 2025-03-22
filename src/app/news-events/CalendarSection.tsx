import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    date: { day: "15", month: "Mar" },
    title: "Annual Day Celebration",
    time: "9:00 AM - 2:00 PM",
    description:
      "Join us for our Annual Day celebration featuring performances by our talented students. The event will be held in the school auditorium.",
    link: "/news-events/annual-day",
  },
  {
    date: { day: "05", month: "Apr" },
    title: "Science Exhibition",
    time: "10:00 AM - 3:00 PM",
    description:
      "Explore innovative projects at our annual Science Exhibition showcasing student creativity and scientific knowledge.",
    link: "/news-events/science-exhibition",
  },
  {
    date: { day: "25", month: "Apr" },
    title: "Inter-School Debate Competition",
    time: "11:00 AM - 1:00 PM",
    description:
      "Our students will participate in the prestigious inter-school debate competition hosted by Delhi Education Society.",
    link: "/news-events/debate-competition",
  },
  {
    date: { day: "10", month: "May" },
    title: "Annual Sports Day",
    time: "8:00 AM - 4:00 PM",
    description:
      "Witness athletic excellence at our Annual Sports Day featuring various competitions and sporting events.",
    link: "/news-events/sports-day",
  },
];

export default function CalendarSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Mark Your Calendar
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Stay informed about our upcoming events and important dates.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="">
                <CardContent className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg text-center min-w-24 w-fit">
                    <div className="text-primary font-bold text-xl">{event.date.day}</div>
                    <div className="text-primary font-medium">{event.date.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div>
                  <Button asChild variant="outline">
                    <Link href={event.link}>Details</Link>
                  </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/calendar">
              View Full Calendar <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
