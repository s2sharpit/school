import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/ui/Title";
import { Clock } from "lucide-react";

const events = [
  { event: "School Reopens", date: "April 1, 2024" },
  { event: "Summer Vacation", date: "May 15 - June 30, 2024" },
  { event: "Mid-Term Exams", date: "September 2024" },
  { event: "Annual Sports Day", date: "November 2024" },
  { event: "CBSE Practical Exams", date: "January 2025" },
  { event: "CBSE Board Exams (X & XII)", date: "March 2025" },
  { event: "Final Exams (I - IX & XI)", date: "March 2025" },
  { event: "New Academic Session Begins", date: "April 1, 2025" },
];

export default function Calendar() {
  return (
    <section className="space-y-6">
      <Title className="flex items-center justify-center gap-3">
        <Clock className="w-8 h-8 text-blue-600" />
        Key Academic Events for 2024-25
      </Title>

      <div className="overflow-x-auto max-w-2xl mx-auto">
        <Table className="w-full border-collapse border border-border">
          <TableHeader>
            <TableRow className="bg-blue-100 hover:bg-blue-100">
              <TableHead className="p-3 text-left text-lg text-blue-900">
                Events
              </TableHead>
              <TableHead className="p-3 text-left text-lg text-blue-900">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((events, index) => (
              <TableRow key={index} className="even:bg-gray-100">
                <TableCell className="p-3 text-base">{events.event}</TableCell>
                <TableCell
                  className="text-base p-3"
                >
                  {events.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
