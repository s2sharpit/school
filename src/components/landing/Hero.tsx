import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 xl:py48 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="/img/school_building.jpg?height=1080&width=1920"
        alt="School Building"
        fill
        className="object-cover brightness-[0.5]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>
    </div>
    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium mb-2">
          Excellence in Education Since 1985
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm">
          B. S. Sr. Sec. School
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-white/90">Salempur Khadar</h2>
        <p className="mx-auto max-w-[700px] text-lg md:text-xl text-white/80">
          Empowering minds, building futures. Nurturing excellence through quality education and holistic
          development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
            <Link href="/admissions">Apply for Admission</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
  </section>

  )
}
