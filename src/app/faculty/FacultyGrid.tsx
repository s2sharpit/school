import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FacultyGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Our Educators
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Teaching Faculty</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Meet our dedicated teachers who inspire and guide our students every day.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={`Teacher ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-1">{`Teacher ${i + 1}`}</h3>
            <p className="text-primary font-medium mb-2">{`Subject Teacher`}</p>
            <p className="text-muted-foreground text-sm">
              Experienced educator with a passion for teaching and mentoring students.
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link href="/faculty/all">
            View All Faculty Members <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>

  )
}
