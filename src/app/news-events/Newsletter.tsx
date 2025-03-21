import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Stay Updated
                </h2>
                <p className="text-white/80">
                  Subscribe to our newsletter to receive the latest news,
                  events, and announcements from B. S. Sr. Sec. School directly
                  in your inbox.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
