import Title from "@/components/ui/Title";
import { ClipboardList } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionNote } from "@/components/ui/Section";

const data = [
  {
    class: "Nursery - UKG",
    tuition: "₹950",
  },
  {
    class: "Class 1st - 3rd",
    tuition: "₹970",
  },
  {
    class: "Class 4th - 5th",
    tuition: "₹1,000",
  },
  {
    class: "Class 6th",
    tuition: "₹1,020",
  },
  {
    class: "Class 7th",
    tuition: "₹1,030",
  },
  {
    class: "Class 8th",
    tuition: "₹1,050",
  },
  {
    class: "Class 9th",
    tuition: "₹1,200",
  },
  {
    class: "Class 10th",
    tuition: "₹1,400",
  },
  {
    class: "Class 11th (Non Med.)",
    tuition: "₹2,000",
  },
  {
    class: "Class 11th (Med.)",
    tuition: "₹2,200",
  },
  {
    class: "Class 11th - 12th (Arts)",
    tuition: "₹1,700",
  },
  {
    class: "Class 11th - 12th (Commerce)",
    tuition: "₹1,800",
  },
  {
    class: "Class 12th (Non Med.)",
    tuition: "₹2,100",
  },
  {
    class: "Class 12th (Med.)",
    tuition: "₹2,300",
  },
];

export default function FeeBreakdown() {
  return (
    <section className="space-y-6">
      <Title className="flex items-center justify-center gap-3">
        <ClipboardList className="w-8 h-8 text-blue-600" />
        General Fee Breakdown (Approximate Annual Fees)
      </Title>

      <div className="overflow-x-auto max-w-xl mx-auto">
        <Table className="w-full border-collapse border border-border">
          <TableHeader>
            <TableRow className="bg-blue-100 hover:bg-blue-100">
              <TableHead className="p-2 text-left text-lg text-blue-900">
                Class Group
              </TableHead>
              <TableHead className="p-2 text-center text-lg text-blue-900">
                Tution Fee (Monthly)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((events, index) => (
              <TableRow
                key={index}
                className="even:bg-gray-200 hover:even:bg-gray-200"
              >
                <TableCell className="p-2 text-base">{events.class}</TableCell>
                <TableCell className="p-2 text-base text-center">
                  {events.tuition}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <SectionNote>
        Fees are subject to change. Please contact the school office for the
        most updated fee details.
      </SectionNote>
    </section>
  );
}
