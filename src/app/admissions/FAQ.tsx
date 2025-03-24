import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqData = [
  {
    question: "When does the admission process begin?",
    answer:
      "The admission process for the new academic year typically begins in March. However, we accept transfer admissions throughout the year, subject to seat availability.",
  },
  {
    question: "What is the age criterion for admission?",
    answer:
      "For Nursery, the child should be at least 3 years old as of March 31st of the admission year. For other classes, the age criterion increases accordingly.",
  },
  {
    question: "Is there an entrance test for all classes?",
    answer:
      "Yes, there is an entrance assessment for all classes except Nursery. The assessment is designed to evaluate the student's readiness for the grade level they are applying to.",
  },
  // {
  //   question: "Are there any scholarships available?",
  //   answer:
  //     "Yes, we offer merit-based scholarships to deserving students. Additionally, we have provisions for financial aid for students from economically disadvantaged backgrounds.",
  // },
  {
    question: "What is the student-teacher ratio?",
    answer:
      "We maintain a student-teacher ratio of approximately 25:1 to ensure personalized attention for each student.",
  },
  {
    question: "Is transportation facility available?",
    answer:
      "Yes, we provide transportation facilities covering various routes in and around Salempur Khadar. The transportation fee is separate from the tuition fee.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Common Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Find answers to commonly asked questions about our admission
            process.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Don&apos;t see your question here? Feel free to contact our admissions
            office.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Admissions Office</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
