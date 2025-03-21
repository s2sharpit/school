import { Button } from '@/components/ui/button'
import { Calendar, FileText, HelpCircle, Link } from 'lucide-react'
import React from 'react'

export default function FeeStructure() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Financial Information
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fee Structure</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              We strive to provide quality education at reasonable costs. Our fee structure is designed to be
              transparent and inclusive.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Our fee structure varies by grade level and includes tuition fees, development fees, and other
                  charges. For detailed information about the fee structure for the current academic year, please:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Download Fee Structure</h3>
                      <p className="text-muted-foreground">Get the complete fee details for all classes</p>
                      <Button asChild variant="outline" className="mt-2">
                        <Link href="#">Download PDF</Link>
                      </Button>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Fee Payment Schedule</h3>
                      <p className="text-muted-foreground">Fees can be paid quarterly, half-yearly, or annually</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HelpCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Contact Accounts Office</h3>
                      <p className="text-muted-foreground">For any queries related to fees and payments</p>
                      <Button asChild variant="outline" className="mt-2">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
