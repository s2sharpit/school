import Image from 'next/image'
import React from 'react'

export default function DepartmentHeads() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Academic Leaders
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Department Heads</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Meet the experienced educators who lead our academic departments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Science Department Head"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">Dr. Priya Mehta</h3>
          <p className="text-primary font-medium mb-2">Head of Science</p>
          <p className="text-muted-foreground text-sm">
            Ph.D. in Physics with 18 years of teaching experience. Specializes in making complex scientific concepts
            accessible and engaging.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Mathematics Department Head"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">Mr. Arun Kumar</h3>
          <p className="text-primary font-medium mb-2">Head of Mathematics</p>
          <p className="text-muted-foreground text-sm">
            M.Sc. in Mathematics with 15 years of teaching experience. Known for his innovative approach to teaching
            mathematical concepts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Languages Department Head"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">Mrs. Sunita Patel</h3>
          <p className="text-primary font-medium mb-2">Head of Languages</p>
          <p className="text-muted-foreground text-sm">
            M.A. in English Literature with 20 years of teaching experience. Passionate about fostering effective
            communication skills.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Social Sciences Department Head"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mb-1">Mr. Vikram Singh</h3>
          <p className="text-primary font-medium mb-2">Head of Social Sciences</p>
          <p className="text-muted-foreground text-sm">
            M.A. in History with 16 years of teaching experience. Specializes in making history and social studies
            relevant and engaging.
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}
