import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

type tParams = Promise<{ slug: string }>;

// This would typically come from a database or CMS
const getEventBySlug = (slug: string) => {
  // Mock data for demonstration
  console.log(slug);

  return {
    title: "Annual Day Celebration",
    date: "March 15, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "School Auditorium",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>We are excited to announce our Annual Day Celebration, a showcase of talent, creativity, and achievement. This year's theme is "Unity in Diversity," celebrating the rich cultural heritage of our nation.</p>
      
      <p>The event will feature performances by students from all grades, including:</p>
      
      <ul>
        <li>Cultural dances representing different states of India</li>
        <li>Musical performances by our school choir and orchestra</li>
        <li>Dramatic presentations highlighting social issues</li>
        <li>Award ceremony recognizing academic and extracurricular achievements</li>
      </ul>
      
      <p>Parents, guardians, and family members are cordially invited to attend this special event. Refreshments will be served after the program.</p>
      
      <p>We look forward to your presence as we celebrate the accomplishments of our students and the spirit of our school community.</p>
    `,
    category: "event",
  };
};

export default async function EventDetailPage({
  params,
}: {
  params: tParams;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm mb-4">
              {event.category.toUpperCase()}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />

              <div className="mt-8 flex items-center gap-4">
                <span className="text-muted-foreground">Share:</span>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>

              <div className="mt-12">
                <Button asChild variant="outline">
                  <Link href="/news-events">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to News & Events
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-muted-foreground">Date</h4>
                    <p>{event.date}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">Time</h4>
                    <p>{event.time}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">
                      Location
                    </h4>
                    <p>{event.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">
                      Contact
                    </h4>
                    <p>events@bsschool.edu</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div>
                    <Link
                      href="/news-events/science-exhibition"
                      className="font-medium hover:text-primary"
                    >
                      Science Exhibition
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      April 5, 2025
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/news-events/debate-competition"
                      className="font-medium hover:text-primary"
                    >
                      Inter-School Debate Competition
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      April 25, 2025
                    </p>
                  </div>
                  <div>
                    <Link
                      href="/news-events/sports-day"
                      className="font-medium hover:text-primary"
                    >
                      Annual Sports Day
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      May 10, 2025
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/news-events">View All Events</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
