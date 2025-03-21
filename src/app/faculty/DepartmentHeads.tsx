import Image from 'next/image';
import React from 'react';

const departmentHeads = [
  {
    name: 'Dr. Priya Mehta',
    title: 'Head of Science',
    description:
      'Ph.D. in Physics with 18 years of teaching experience. Specializes in making complex scientific concepts accessible and engaging.',
    image: '/placeholder.svg?height=300&width=300',
    alt: 'Science Department Head',
  },
  {
    name: 'Mr. Arun Kumar',
    title: 'Head of Mathematics',
    description:
      'M.Sc. in Mathematics with 15 years of teaching experience. Known for his innovative approach to teaching mathematical concepts.',
    image: '/placeholder.svg?height=300&width=300',
    alt: 'Mathematics Department Head',
  },
  {
    name: 'Mrs. Sunita Patel',
    title: 'Head of Languages',
    description:
      'M.A. in English Literature with 20 years of teaching experience. Passionate about fostering effective communication skills.',
    image: '/placeholder.svg?height=300&width=300',
    alt: 'Languages Department Head',
  },
  {
    name: 'Mr. Vikram Singh',
    title: 'Head of Social Sciences',
    description:
      'M.A. in History with 16 years of teaching experience. Specializes in making history and social studies relevant and engaging.',
    image: '/placeholder.svg?height=300&width=300',
    alt: 'Social Sciences Department Head',
  },
];

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
          {departmentHeads.map((head, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src={head.image} alt={head.alt} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold mb-1">{head.name}</h3>
              <p className="text-primary font-medium mb-2">{head.title}</p>
              <p className="text-muted-foreground text-sm">{head.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}