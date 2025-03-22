import Image from 'next/image'
import React from 'react'
import { Badge } from './ui/badge';

interface HeroProps {
    title: string;
    desc: string;
    imgSrc: string;
}

export default function Hero({title, desc, imgSrc}: HeroProps) {
  return (
    <section className="relative w-full py-12 md:py-24">
    <div className="absolute inset-0 z-0">
      <Image
        src={`${imgSrc}?height=800&width=1920`}
        alt={title}
        fill
        className="object-cover brightness-[0.5]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-black/50 mix-blend-multiply"></div>
    </div>
    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      <div className="mx-auto max-w-3xl space-y-4">
        <Badge size='lg' className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 font-medium mb-2">
          Transparency & Compliance {/*to be changed to dynamically*/}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{title}</h1>
        <p className="mx-auto max-w-[700px] text-lg text-white/80">
          {desc}.
        </p>
      </div>
    </div>
  </section>

  )
}
