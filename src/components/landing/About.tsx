import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                About Our School
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nurturing Excellence Since 1985
              </h2>
              <p className="text-muted-foreground text-lg">
                B. S. Sr. Sec. School is committed to providing quality education that nurtures academic excellence,
                character development, and holistic growth. Our dedicated faculty and state-of-the-art facilities create
                an environment where students can thrive and reach their full potential.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">500+</span>
                  <span className="text-muted-foreground">Students</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  <span className="text-muted-foreground">Faculty Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">95%</span>
                  <span className="text-muted-foreground">Success Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">35+</span>
                  <span className="text-muted-foreground">Years of Excellence</span>
                </div>
              </div>
              <Button asChild className="mt-4">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/img/campus.jpg?height=800&width=600" alt="School Campus" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
  )
}
