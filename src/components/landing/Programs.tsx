import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Educational Programs</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              We offer a wide range of programs designed to cater to diverse learning needs and interests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Primary Education</h3>
              <p className="text-muted-foreground mb-4">
                A strong foundation with focus on fundamental skills, creativity, and character development.
              </p>
              <Link href="/academics/primary" className="text-primary font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secondary Education</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive curriculum preparing students for higher education with specialized subjects.
              </p>
              <Link href="/academics/secondary" className="text-primary font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Senior Secondary</h3>
              <p className="text-muted-foreground mb-4">
                Specialized streams in Science, Commerce, and Arts with career guidance and counseling.
              </p>
              <Link href="/academics/senior-secondary" className="text-primary font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}
