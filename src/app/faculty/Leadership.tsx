import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Leadership() {
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
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image src="/placeholder.svg?height=400&width=300" alt="Principal" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Dr. Rajiv Sharma</h3>
                    <p className="text-primary font-medium mb-3">Principal</p>
                    <p className="text-muted-foreground mb-4">
                      Ph.D. in Education with over 25 years of experience in educational leadership. Dr. Sharma is dedicated
                      to fostering academic excellence and holistic development.
                    </p>
                    <div className="flex space-x-3">
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image src="/placeholder.svg?height=400&width=300" alt="Vice Principal" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Mrs. Anita Gupta</h3>
                    <p className="text-primary font-medium mb-3">Vice Principal</p>
                    <p className="text-muted-foreground mb-4">
                      M.Ed. with 20 years of teaching and administrative experience. Mrs. Gupta oversees academic affairs
                      and ensures the highest standards of teaching and learning.
                    </p>
                    <div className="flex space-x-3">
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Administrative Officer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Mr. Sunil Verma</h3>
                    <p className="text-primary font-medium mb-3">Administrative Officer</p>
                    <p className="text-muted-foreground mb-4">
                      MBA with 15 years of experience in educational administration. Mr. Verma manages the administrative
                      functions of the school, ensuring smooth operations.
                    </p>
                    <div className="flex space-x-3">
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-primary">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
  )
}
