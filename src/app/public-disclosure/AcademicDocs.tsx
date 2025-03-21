import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const academic = [
  { name: "Fee Structure", file: "fee-structure.pdf" },
  { name: "Academic Calendar", file: "academic-calender.pdf" },
  { name: "School Management Committee (SMC)", file: "smc.pdf" },
  { name: "Parents Teachers Association (PTA)", file: "pta.pdf" },
  { name: "Previous Year Results", file: "previous-results.pdf" },
  { name: "Last Three-Year Academic Result", file: "result.pdf" },
];

export default function AcademicDocs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Academic Information
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Academic Documents
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Important academic information and documents for parents and
            students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academic.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-3 text-gray-900">{doc.name}</h3>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Link href={`/documents/${doc.file}`} target="_blank">
                        View
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex-1"
                    >
                      <Link href={`/documents/${doc.file}`} download>
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
