import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Leadership() {
  const team = [
    {
      name: 'Dr. Rajiv Sharma',
      role: 'Principal',
      image: '/placeholder.svg?height=400&width=300',
      description:
        'Ph.D. in Education with over 25 years of experience in educational leadership. Dr. Sharma is dedicated to fostering academic excellence and holistic development.',
      socials: [
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Facebook, href: '#' },
      ],
    },
    {
      name: 'Mrs. Anita Gupta',
      role: 'Vice Principal',
      image: '/placeholder.svg?height=400&width=300',
      description:
        'M.Ed. with 20 years of teaching and administrative experience. Mrs. Gupta oversees academic affairs and ensures the highest standards of teaching and learning.',
      socials: [
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' },
      ],
    },
    {
      name: 'Mr. Sunil Verma',
      role: 'Administrative Officer',
      image: '/placeholder.svg?height=400&width=300',
      description:
        'MBA with 15 years of experience in educational administration. Mr. Verma manages the administrative functions of the school, ensuring smooth operations.',
      socials: [
        { icon: Linkedin, href: '#' },
        { icon: Facebook, href: '#' },
        { icon: Instagram, href: '#' },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            School Leadership
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Administrative Team</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Meet the leaders who guide our institution towards excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-80 w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.description}</p>
                <div className="flex space-x-3">
                  {member.socials.map((social, idx) => (
                    <Link key={idx} href={social.href} className="text-gray-400 hover:text-primary">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{member.name} on Social Media</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
