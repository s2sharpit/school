import { Button } from '@/components/ui/button'
import { ArrowRight, Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Overview() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Admission Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Begin Your Educational Journey With Us
              </h2>
              <p className="text-muted-foreground text-lg">
                At B. S. Sr. Sec. School, we welcome students from diverse backgrounds who demonstrate a passion for
                learning and personal growth. Our admission process is designed to be transparent and straightforward,
                ensuring that deserving students have the opportunity to benefit from our quality education.
              </p>
              <p className="text-muted-foreground text-lg">
                We admit students based on their academic potential, character, and alignment with our school's values.
                We believe in nurturing each student's unique talents and helping them develop into well-rounded
                individuals.
              </p>
              <Button asChild className="mt-4">
                <Link href="#application-process">
                  View Application Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Students in School"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
