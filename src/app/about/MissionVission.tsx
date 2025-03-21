import Image from 'next/image'
import React from 'react'

export default function MissionVission() {
  return (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Empowering Students for a Brighter Future
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    At B. S. Sr. Sec. School, our mission is to provide a nurturing and stimulating environment where
                    students can develop their intellectual, physical, emotional, and social capabilities to their fullest
                    potential. We aim to instill a love for learning, foster critical thinking, and cultivate responsible
                    citizenship.
                  </p>
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mt-6">
                    Our Vision
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Our vision is to be a leading educational institution that prepares students to be lifelong learners,
                    innovative thinkers, and compassionate global citizens who contribute positively to society and excel in
                    their chosen fields.
                  </p>
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mt-6">
                    School Information
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col">
                      <span className="font-medium">CBSE Affiliation Number</span>
                      <span className="text-muted-foreground">2730XXX</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">School Code</span>
                      <span className="text-muted-foreground">65XXX</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Year Established</span>
                      <span className="text-muted-foreground">1985</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Board</span>
                      <span className="text-muted-foreground">Central Board of Secondary Education (CBSE)</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/img/campus.jpg?height=800&width=600"
                    alt="Students in Classroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
    
  )
}
