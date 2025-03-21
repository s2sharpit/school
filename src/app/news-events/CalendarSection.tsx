import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CalendarSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Mark Your Calendar
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Upcoming Events
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Stay informed about our upcoming events and important dates.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                <div className="text-primary font-bold text-xl">15</div>
                <div className="text-primary font-medium">Mar</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Annual Day Celebration
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <p className="text-muted-foreground">
                  Join us for our Annual Day celebration featuring
                  performances by our talented students. The event will be
                  held in the school auditorium.
                </p>
              </div>
              <div>
                <Button asChild variant="outline">
                  <Link href="/news-events/annual-day">Details</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                <div className="text-primary font-bold text-xl">05</div>
                <div className="text-primary font-medium">Apr</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Science Exhibition
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <p className="text-muted-foreground">
                  Explore innovative projects at our annual Science
                  Exhibition showcasing student creativity and scientific
                  knowledge.
                </p>
              </div>
              <div>
                <Button asChild variant="outline">
                  <Link href="/news-events/science-exhibition">
                    Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                <div className="text-primary font-bold text-xl">25</div>
                <div className="text-primary font-medium">Apr</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Inter-School Debate Competition
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>11:00 AM - 1:00 PM</span>
                </div>
                <p className="text-muted-foreground">
                  Our students will participate in the prestigious
                  inter-school debate competition hosted by Delhi Education
                  Society.
                </p>
              </div>
              <div>
                <Button asChild variant="outline">
                  <Link href="/news-events/debate-competition">
                    Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-lg text-center min-w-[100px]">
                <div className="text-primary font-bold text-xl">10</div>
                <div className="text-primary font-medium">May</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Annual Sports Day
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Clock className="h-4 w-4" />
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <p className="text-muted-foreground">
                  Witness athletic excellence at our Annual Sports Day
                  featuring various competitions and sporting events.
                </p>
              </div>
              <div>
                <Button asChild variant="outline">
                  <Link href="/news-events/sports-day">Details</Link>
                </Button>
              </div>
            </div>
          </div>
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

  )
}
