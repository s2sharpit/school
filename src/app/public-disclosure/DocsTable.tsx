import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  "CBSE Affiliation Certificate",
  "School NOC from State Government",
  "Recognition Certificate under RTE Act",
  "Society/Trust Registration Certificate",
  "Building Safety Certificate",
  "Fire Safety Certificate",
  "Sanitation & Water Safety Certificate",
  "Health & Medical Check-Up Reports",
  "Fee Structure Document",
  "Annual Report",
];

export default function DocsTable() {
  return (
    <section className="space-y-6">
      <div className="overflow-x-auto max-w-2xl mx-auto">
        <Table className="w-full border-collapse border border-border">
          <TableHeader>
            <TableRow className="bg-blue-100 hover:bg-blue-100">
              <TableHead className="p-3 text-left text-lg text-blue-900">
                Document Name
              </TableHead>
              <TableHead className="p-3 text-left text-lg text-blue-900">
                Download/View
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((doc, index) => (
              <TableRow key={index} className="even:bg-gray-100">
                <TableCell className="p-3 text-base">{doc}</TableCell>
                <TableCell className="text-base p-3">
                  <Button variant="outline">Download PDF</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="font-medium text-center">
        📢 All documents are updated as per the{" "}
        <span className="text-blue-900 font-semibold">
          latest CBSE guidelines and school policies
        </span>
        .
      </p>
    </section>
  );
}
