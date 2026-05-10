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

const generalInfoData = [
  { slNo: 1, info: "NAME OF THE SCHOOL", details: "B. S. Senior Secondary School, Salempur Khadar" },
  { slNo: 2, info: "AFFILIATION NO.(IF APPLICABLE)", details: "531917" },
  { slNo: 3, info: "SCHOOL CODE (IF APPLICABLE)", details: "41917" },
  { slNo: 4, info: "COMPLETE ADDRESS WITH PIN CODE", details: "Vill.- Salempur Khadar, P.O. Ledi, Darpur Road, Tehsil- Chhachhrauli, Distt.- Yamunanagar, Haryana - 135103" },
  { slNo: 5, info: "PRINCIPAL NAME & QUALIFICATION:", details: "Smt. Shashi Bala (MA, B.Ed.)" },
  { slNo: 6, info: "SCHOOL EMAIL ID", details: "bsmschoolsalempur@gmail.com" },
  { slNo: 7, info: "CONTACT DETAILS (LANDLINE/MOBILE)", details: "+91 89014 37877" },
];

export function SchoolInfoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <SectionHeader
          badge="School Information"
          title="General Information"
          description="Basic details, affiliation, and contact information of the school."
        />

        {/* Table Container */}
        <div className="overflow-x-auto rounded-lg border border-gray-400">
          <Table className=" min-w-[600px]">
            <TableHeader>
              <TableRow className="bg-[#cce0ef] hover:bg-[#cce0ef] border-b border-gray-400">
                <TableHead className="w-[80px] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">SL NO.</TableHead>
                <TableHead className="w-[50%] sm:w-[60%] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">INFORMATION</TableHead>
                <TableHead className="font-bold text-gray-900 text-center align-middle">DETAILS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {generalInfoData.map((row) => (
                <TableRow key={row.slNo} className="hover:bg-transparent border-b border-gray-400">
                  <TableCell className="font-medium text-center border-r border-gray-400 py-3">{row.slNo}</TableCell>
                  <TableCell className="border-r border-gray-400 whitespace-normal py-3">{row.info}</TableCell>
                  <TableCell className="whitespace-normal py-3">{row.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
