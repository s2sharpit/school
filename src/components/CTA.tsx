import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface CTAProps {
  title: string;
  desc: string;
  secBtn: {
    title: string;
    href: string;
  };
  outlineBtn: {
    title: string;
    href: string;
  };
  imageUrl?: string;
}

export default function CTA({title, desc, secBtn, outlineBtn, imageUrl}: CTAProps) {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
                <p className="text-white/80">
                  {desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href={secBtn.href}>{secBtn.title}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href={outlineBtn.href}>{outlineBtn.title}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src={`${imageUrl}?height=600&width=800`} alt="School Campus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
