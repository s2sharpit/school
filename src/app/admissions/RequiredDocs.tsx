import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function RequiredDocs() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Documents" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Documentation</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Required Documents</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Please ensure you have the following documents ready when applying for admission:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Completed Application Form</h3>
                    <p className="text-muted-foreground">Filled out completely and signed by parents/guardians</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Birth Certificate</h3>
                    <p className="text-muted-foreground">Original and photocopy for verification</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Previous Academic Records</h3>
                    <p className="text-muted-foreground">Report cards/transcripts from the previous school</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Transfer Certificate</h3>
                    <p className="text-muted-foreground">For students transferring from another school</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Passport-sized Photographs</h3>
                    <p className="text-muted-foreground">Recent photographs of the student</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">Address Proof</h3>
                    <p className="text-muted-foreground">Utility bill, Aadhaar card, or other valid address proof</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
