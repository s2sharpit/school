import { SectionHeader } from "@/components/ui/section-header";
import React from "react";

const faqData = [
  {
    question: "What are the school's visiting hours?",
    answer:
      "Visitors are welcome during school office hours (8:00 AM - 4:00 PM, Monday to Saturday). For campus tours, we recommend scheduling an appointment in advance.",
  },
  {
    question: "Do I need an appointment to meet with teachers?",
    answer:
      "Yes, appointments are required to meet with teachers to ensure they are available. You can schedule an appointment by calling the school office or sending an email.",
  },
  {
    question: "Is there parking available for visitors?",
    answer:
      "Yes, we have designated visitor parking spaces available on campus. Please check in at the security gate upon arrival.",
  },
  {
    question: "How can I schedule a campus tour?",
    answer:
      "Campus tours can be scheduled by contacting our admissions office via phone or email. Tours are typically conducted on weekdays between 9:00 AM and 1:00 PM.",
  },
  {
    question: "How long does it take to receive a response to inquiries?",
    answer:
      "We strive to respond to all inquiries within 24-48 hours during working days. For urgent matters, we recommend calling the school directly.",
  },
  {
    question: "Can I request information via social media?",
    answer:
      "While we maintain active social media profiles, for official inquiries and communications, we recommend using email, phone, or the contact form on our website.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Quick Answers"
          title="Frequently Asked Questions"
          description="Find answers to commonly asked questions about contacting and visiting our school."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
