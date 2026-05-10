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

const infrastructureInfoData = [
  { slNo: 1, info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQR MTR)", details: "8155" },
  { slNo: 2, info: "NO. AND SIZE OF THE CLASSSROOM (IN SQR MTR)", details: "33, 46.45 sq. mtr" },
  { slNo: 3, info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQR MTR)", details: "4, 55.74 sq. mtr" },
  { slNo: 4, info: "NO. AND SIZE OF LIBRARY (IN SQR MTR)", details: "1, 111.48 sq. mtr" },
  { slNo: 5, info: "INTERNET FACILITY (YES/NO)", details: "YES" },
  { slNo: 6, info: "NO. OF GIRLS TOILETS", details: "10" },
  { slNo: 7, info: "NO. OF BOYS TOILETS", details: "10" },
  { slNo: 8, info: "NO. OF CWSN TOILETS", details: "2" },
  { slNo: 9, info: "LINK OF YOU TUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OPF THE SCHOOL", details: "PROVIDE LINK" },
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
                <TableHead className="w-1/2 sm:w-3/5 font-bold text-gray-900 border-r border-gray-400 text-center align-middle">INFORMATION</TableHead>
                <TableHead className="font-bold text-gray-900 text-center align-middle">DETAILS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {infrastructureInfoData.map((row) => (
                <TableRow key={row.slNo} className="hover:bg-transparent border-b border-gray-400">
                  <TableCell className="font-medium text-center border-r border-gray-400 py-3">{row.slNo}</TableCell>
                  <TableCell className="border-r border-gray-400 whitespace-normal py-3">{row.info}</TableCell>
                  <TableCell className="whitespace-normal py-3 px-4 text-center">{row.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

