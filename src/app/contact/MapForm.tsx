"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function MapForm() {
      const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus("submitting")
    
        // Simulate form submission
        setTimeout(() => {
          setFormStatus("success")
        }, 1500)
      }
    
  return (
    <section className="py-16 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6 mb-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Location</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Campus</h2>
            <p className="text-muted-foreground text-lg">
              We welcome you to visit our campus and experience our facilities firsthand. Our school is conveniently
              located in Salempur Khadar, Delhi.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=1200" alt="School Map" fill className="object-cover" />
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-2">School Hours</h3>
            <p className="text-muted-foreground mb-1">Monday to Saturday: 8:00 AM - 2:30 PM</p>
            <p className="text-muted-foreground">Office Hours: 8:00 AM - 4:00 PM</p>
          </div>
        </div>
        <div>
          <div className="space-y-6 mb-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Send Us a Message</h2>
            <p className="text-muted-foreground text-lg">
              Have a question or need more information? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="admissions">Admissions</SelectItem>
                    <SelectItem value="academics">Academics</SelectItem>
                    <SelectItem value="facilities">Facilities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" required />
            </div>
            <Button type="submit" className="w-full" disabled={formStatus === "submitting"}>
              {formStatus === "submitting" ? "Sending..." : "Send Message"}
            </Button>
            {formStatus === "success" && (
              <div className="p-4 bg-green-50 text-green-700 rounded-md">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {formStatus === "error" && (
              <div className="p-4 bg-red-50 text-red-700 rounded-md">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  </section>

  )
}
