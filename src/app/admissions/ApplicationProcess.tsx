import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
import React from 'react'

export default function ApplicationProcess() {
  return (
    <section id="application-process" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              How to Apply
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Application Process</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Follow these steps to apply for admission to B. S. Sr. Sec. School.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Obtain Application Form</h3>
              <p className="text-muted-foreground mb-4">
                Download the application form from our website or collect it from the school office during working
                hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Completed Form</h3>
              <p className="text-muted-foreground mb-4">
                Fill out the application form completely and submit it along with the required documents and application
                fee.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrance Assessment</h3>
              <p className="text-muted-foreground mb-4">
                Applicants will be required to take an entrance assessment to evaluate their academic readiness for the
                grade level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
                <span className="text-primary font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Interview & Admission</h3>
              <p className="text-muted-foreground mb-4">
                Shortlisted candidates and their parents will be called for an interview, after which final admission
                decisions will be made.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Admissions Office</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}
