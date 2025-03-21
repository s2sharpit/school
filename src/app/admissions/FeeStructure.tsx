import { Button } from "@/components/ui/button";
import { Calendar, FileText, HelpCircle, Link } from "lucide-react";
import React from "react";

const feeDetails = [
  {
    icon: <FileText className="h-6 w-6 text-primary mt-0.5" />,
    title: "Download Fee Structure",
    description: "Get the complete fee details for all classes",
    button: {
      label: "Download PDF",
      link: "#",
    },
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary mt-0.5" />,
    title: "Fee Payment Schedule",
    description: "Fees can be paid quarterly, half-yearly, or annually",
  },
  {
    icon: <HelpCircle className="h-6 w-6 text-primary mt-0.5" />,
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
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Financial Information
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Fee Structure
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            We strive to provide quality education at reasonable costs. Our fee
            structure is designed to be transparent and inclusive.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 space-y-6">
            <p className="text-muted-foreground">
              Our fee structure varies by grade level and includes tuition fees,
              development fees, and other charges. For detailed information
              about the fee structure for the current academic year, please:
            </p>
            <ul className="space-y-4">
              {feeDetails.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.button && (
                      <Button asChild variant="outline" className="mt-2">
                        <Link href={item.button.link}>{item.button.label}</Link>
                      </Button>
                    )}
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
