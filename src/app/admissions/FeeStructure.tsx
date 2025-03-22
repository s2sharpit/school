import { Button } from "@/components/ui/button";
import { Calendar, FileText, HelpCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const feeDetails = [
  {
    Icon: FileText,
    title: "Download Fee Structure",
    description: "Get the complete fee details for all classes",
    button: {
      label: "Download PDF",
      link: "#",
    },
  },
  {
    Icon: Calendar,
    title: "Fee Payment Schedule",
    description: "Fees can be paid quarterly, half-yearly, or annually",
  },
  {
    Icon: HelpCircle,
    title: "Contact Accounts Office",
    description: "For any queries related to fees and payments",
    button: {
      label: "Contact Us",
      link: "/contact",
    },
  },
];

export default function FeeStructure() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm text-primary font-medium mb-4">
            Financial Information
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Fee Structure
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We strive to provide quality education at reasonable costs. Our fee
            structure is designed to be transparent and inclusive.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 md:p-8">
          <p className="text-muted-foreground mb-6 text-lg">
            Our fee structure varies by grade level and includes tuition fees,
            development fees, and other charges. For detailed information about
            the fee structure for the current academic year, please:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {feeDetails.map(({ title, description, Icon, button }, index) => (
              <div
                key={index}
                className="flex flex-col p-5 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-primary mt-0.5" />
                  <h3 className="font-semibold text-lg">{title}</h3>
                </div>
                <p className="text-muted-foreground flex-grow">{description}</p>
                {button && (
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href={button.link}>{button.label}</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
