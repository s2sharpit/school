import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Find answers to commonly asked questions about our admission process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>When does the admission process begin?</AccordionTrigger>
                <AccordionContent>
                  The admission process for the new academic year typically begins in January. However, we accept
                  transfer admissions throughout the year, subject to seat availability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the age criterion for admission?</AccordionTrigger>
                <AccordionContent>
                  For Nursery, the child should be at least 3 years old as of March 31st of the admission year. For
                  other classes, the age criterion increases accordingly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there an entrance test for all classes?</AccordionTrigger>
                <AccordionContent>
                  Yes, there is an entrance assessment for all classes except Nursery. The assessment is designed to
                  evaluate the student's readiness for the grade level they are applying to.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are there any scholarships available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer merit-based scholarships to deserving students. Additionally, we have provisions for
                  financial aid for students from economically disadvantaged backgrounds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is the student-teacher ratio?</AccordionTrigger>
                <AccordionContent>
                  We maintain a student-teacher ratio of approximately 25:1 to ensure personalized attention for each
                  student.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is transportation facility available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide transportation facilities covering various routes in and around Salempur Khadar. The
                  transportation fee is separate from the tuition fee.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your question here? Feel free to contact our admissions office.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Admissions Office</Link>
            </Button>
          </div>
        </div>
      </section>

  )
}
