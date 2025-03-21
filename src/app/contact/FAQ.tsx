import React from 'react'

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Quick Answers
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Find answers to commonly asked questions about contacting and visiting our school.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">What are the school's visiting hours?</h3>
            <p className="text-muted-foreground">
              Visitors are welcome during school office hours (8:00 AM - 4:00 PM, Monday to Saturday). For campus
              tours, we recommend scheduling an appointment in advance.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">Do I need an appointment to meet with teachers?</h3>
            <p className="text-muted-foreground">
              Yes, appointments are required to meet with teachers to ensure they are available. You can schedule an
              appointment by calling the school office or sending an email.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">Is there parking available for visitors?</h3>
            <p className="text-muted-foreground">
              Yes, we have designated visitor parking spaces available on campus. Please check in at the security
              gate upon arrival.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">How can I schedule a campus tour?</h3>
            <p className="text-muted-foreground">
              Campus tours can be scheduled by contacting our admissions office via phone or email. Tours are
              typically conducted on weekdays between 9:00 AM and 1:00 PM.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">How long does it take to receive a response to inquiries?</h3>
            <p className="text-muted-foreground">
              We strive to respond to all inquiries within 24-48 hours during working days. For urgent matters, we
              recommend calling the school directly.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-2">Can I request information via social media?</h3>
            <p className="text-muted-foreground">
              While we maintain active social media profiles, for official inquiries and communications, we
              recommend using email, phone, or the contact form on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
