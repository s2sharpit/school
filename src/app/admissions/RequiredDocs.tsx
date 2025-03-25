import { SectionHeader } from "@/components/ui/section-header";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const documents = [
  {
    title: "Completed Application Form",
    description: "Filled out completely and signed by parents/guardians",
  },
  {
    title: "Birth Certificate",
    description: "Original and photocopy for verification",
  },
  {
    title: "Previous Academic Records",
    description: "Report cards/transcripts from the previous school",
  },
  {
    title: "Transfer Certificate",
    description: "For students transferring from another school",
  },
  {
    title: "Passport-sized Photographs",
    description: "Recent photographs of the student",
  },
  {
    title: "Address Proof",
    description: "Utility bill, Aadhaar card, or other valid address proof",
  },
];

export default function RequiredDocs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Documentation"
          title="Required Documents"
          description="Please ensure you have the following documents ready when applying
              for admission."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/img/campus.jpg?height=800&width=600"
              alt="Required Documents"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-bold">{doc.title}</h3>
                    <p className="text-muted-foreground">{doc.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
