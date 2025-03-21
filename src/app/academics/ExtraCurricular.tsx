import { ArrowRight, Palette, Trophy, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ExtraCurricular() {
  return (
    <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Beyond Academics
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Extracurricular Activities</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                  We believe in holistic development through a balance of academic and extracurricular activities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sports</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer a wide range of sports including cricket, basketball, volleyball, athletics, and more. Our
                    annual sports day showcases the athletic talents of our students.
                  </p>
                  <Link href="/academics/sports" className="text-primary font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Arts & Culture</h3>
                  <p className="text-muted-foreground mb-4">
                    Students can explore their creative side through music, dance, drama, painting, and other cultural
                    activities. We regularly organize cultural events and competitions.
                  </p>
                  <Link href="/academics/arts" className="text-primary font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Clubs & Societies</h3>
                  <p className="text-muted-foreground mb-4">
                    Our various clubs including Science Club, Literary Club, Eco Club, and more provide platforms for
                    students to pursue their interests and develop leadership skills.
                  </p>
                  <Link href="/academics/clubs" className="text-primary font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
  )
}
