import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const steps = [
  {
    step: "1",
    title: "Obtain Application Form",
    description:
      "Download the application form from our website or collect it from the school office during working hours.",
  },
  {
    step: "2",
    title: "Submit Completed Form",
    description:
      "Fill out the application form completely and submit it along with the required documents and application fee.",
  },
  {
    step: "3",
    title: "Entrance Assessment",
    description:
      "Applicants will be required to take an entrance assessment to evaluate their academic readiness for the grade level.",
  },
  {
    step: "4",
    title: "Interview & Admission",
    description:
      "Shortlisted candidates and their parents will be called for an interview, after which final admission decisions will be made.",
  },
];

export default function ApplicationProcess() {
  return (
    <section id="application-process" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge size={"lg"} className="bg-primary/10 text-primary mb-4">
            How to Apply
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Application Process
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Follow these steps to apply for admission to B. S. Sr. Sec. School.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ step, title, description }) => (
            <Card key={step}>
              <CardContent>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
                  <span className="text-primary font-bold text-lg">{step}</span>
                </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Contact Admissions Office</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
