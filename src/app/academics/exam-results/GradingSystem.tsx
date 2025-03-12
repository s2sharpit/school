import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Title from "@/components/ui/Title";
import { ClipboardCheck } from "lucide-react";

const gradingData = [
  { range: "91-100", grade: "A1", color: "bg-green-500" },
  { range: "81-90", grade: "A2", color: "bg-green-400" },
  { range: "71-80", grade: "B1", color: "bg-yellow-400" },
  { range: "61-70", grade: "B2", color: "bg-yellow-500" },
  { range: "51-60", grade: "C1", color: "bg-orange-400" },
  { range: "41-50", grade: "C2", color: "bg-orange-500" },
  { range: "33-40", grade: "D", color: "bg-red-400" },
  { range: "Below 33", grade: "E (Fail)", color: "bg-red-600" },
];

export default function GradingSystem() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <Title className="flex items-center justify-center gap-3">
          <ClipboardCheck className="w-10 h-10 text-yellow-500" />
          CBSE Grading System
        </Title>
        <p className="text-lg max-w-2xl mx-auto">
          The{" "}
          <span className="text-blue-900 font-semibold">
            CBSE Grading System
          </span>{" "}
          evaluates students based on{" "}
          <span className="text-blue-900 font-semibold">
            marks obtained in assessments
          </span>
          , ensuring a{" "}
          <span className="text-blue-900 font-semibold">
            fair and uniform evaluation process
          </span>
          .
        </p>
      </div>

      {/* Grading Table */}
      <div className="overflow-x-auto max-w-2xl mx-auto">
        <Table className="w-full border-collapse rounded-lg shadow-md">
          <TableHeader>
            <TableRow className="bg-blue-100 hover:bg-blue-100">
              <TableHead className="p-4 text-left text-lg text-blue-900">
                Marks Range
              </TableHead>
              <TableHead className="p-4 text-left text-lg text-blue-900">Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradingData.map((grade, index) => (
              <TableRow key={index} className="even:bg-gray-100">
                <TableCell className="p-4 text-lg">{grade.range}</TableCell>
                <TableCell
                  className={`p-4 text-white text-lg font-bold ${grade.color} rounded-md text-center w-24`}
                >
                  {grade.grade}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
