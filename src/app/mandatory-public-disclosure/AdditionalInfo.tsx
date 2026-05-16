import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const infrastructureInfoData: { slNo: number; info: string; details: string; isLink?: boolean }[] = [
  { slNo: 1, info: "Total Campus Area of the School (in Sqr Mtr)", details: "8155" },
  { slNo: 2, info: "No. and Size of the Classrooms (in Sqr Mtr)", details: "33, 46.45 sq. mtr" },
  { slNo: 3, info: "No. and Size of Laboratories including Computer Labs (in Sqr Mtr)", details: "4, 55.74 sq. mtr" },
  { slNo: 4, info: "No. and Size of Library (in Sqr Mtr)", details: "1, 111.48 sq. mtr" },
  { slNo: 5, info: "Internet Facility (Yes/No)", details: "Yes" },
  { slNo: 6, info: "No. of Girls Toilets", details: "10" },
  { slNo: 7, info: "No. of Boys Toilets", details: "10" },
  { slNo: 8, info: "No. of CWSN Toilets", details: "2" },
  { slNo: 9, info: "Link of YouTube Video of the Inspection of School covering the Infrastructure of the School", details: "https://youtu.be/0Z30Mmg-Zlc", isLink: true },
];

export function InfrastructureSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Infrastructure Details"
          title="School Infrastructure"
          description="Details regarding the school's campus, facilities, and physical infrastructure."
        />

        <div className="overflow-x-auto rounded-lg border border-gray-400 mt-8">
          <Table className="border-collapse min-w-[600px] bg-white">
            <TableHeader>
              <TableRow className="bg-[#cce0ef] hover:bg-[#cce0ef] border-b border-gray-400">
                <TableHead className="w-[80px] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">S. No.</TableHead>
                <TableHead className="w-1/2 sm:w-3/5 font-bold text-gray-900 border-r border-gray-400 text-center align-middle">Information</TableHead>
                <TableHead className="font-bold text-gray-900 text-center align-middle">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {infrastructureInfoData.map((row) => (
                <TableRow key={row.slNo} className="hover:bg-transparent border-b border-gray-400">
                  <TableCell className="font-medium text-center border-r border-gray-400 py-3">{row.slNo}</TableCell>
                  <TableCell className="border-r border-gray-400 whitespace-normal py-3">{row.info}</TableCell>
                  <TableCell className="whitespace-normal py-3 px-4 text-center">
                    {row.isLink ? (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={row.details}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Video"
                        >
                          View Video
                        </a>
                      </Button>
                    ) : (
                      row.details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

