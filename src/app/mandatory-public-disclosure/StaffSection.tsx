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
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface StaffRow {
  sNo: number | string;
  information: string;
  numberStrength: string;
  nameAndQualifications: React.ReactNode;
  isSubRow?: boolean;
  isFirstSubRow?: boolean;
}

const staffData: StaffRow[] = [
  {
    sNo: 1,
    information: "Principal",
    numberStrength: "1",
    nameAndQualifications: "Smt. Shashi Bala (MA, B.Ed.)",
  },
  {
    sNo: 2,
    information: "Vice Principal",
    numberStrength: "1",
    nameAndQualifications: "Smt. Rajinder Kaur (MA, B.Ed.)",
  },
  {
    sNo: 3,
    information: "Headmistress / Headmaster",
    numberStrength: "—",
    nameAndQualifications: "—",
  },
  {
    sNo: 4,
    information: "Total No. of Teachers",
    numberStrength: "35",
    nameAndQualifications: "Upload List/Details",
  },
  {
    sNo: "",
    information: "PGT",
    numberStrength: "14",
    nameAndQualifications: "",
    isSubRow: true,
    isFirstSubRow: true,
  },
  {
    sNo: "",
    information: "TGT",
    numberStrength: "9",
    nameAndQualifications: "",
    isSubRow: true,
  },
  {
    sNo: "",
    information: "PRT",
    numberStrength: "11",
    nameAndQualifications: "",
    isSubRow: true,
  },
  {
    sNo: 5,
    information: "Teachers Section Ratio",
    numberStrength: "1.16:1",
    nameAndQualifications: "—",
  },
  {
    sNo: 6,
    information: "Details of Special Educator",
    numberStrength: "—",
    nameAndQualifications: "—",
  },
  {
    sNo: 7,
    information: "Details of Counsellor & Wellness Teacher",
    numberStrength: "1",
    nameAndQualifications: "Smt. Ritu Raj Bahmani",
  },
];

export function StaffSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader
          badge="Staff Details"
          title="Staff (Teaching)"
          description="Details of teaching staff including Principal, Vice Principal, and faculty by designation."
        />

        <div className="overflow-x-auto rounded-lg border border-gray-400 mt-8">
          <Table className="min-w-[700px] bg-white">
            <TableHeader>
              <TableRow className="bg-[#cce0ef] hover:bg-[#cce0ef] border-b border-gray-400">
                <TableHead className="w-[60px] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                  S. No.
                </TableHead>
                <TableHead className="w-[35%] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                  Information
                </TableHead>
                <TableHead className="w-[18%] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                  Number / Strength
                </TableHead>
                <TableHead className="font-bold text-gray-900 text-center align-middle">
                  Name and Qualifications
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffData.map((row, idx) => {
                const isLinkRow = row.isSubRow;
                return (
                  <TableRow
                    key={idx}
                    className="hover:bg-transparent border-b border-gray-400 last:border-b-0"
                  >
                    <TableCell className="font-medium text-center border-r border-gray-400 py-3">
                      {row.sNo}
                    </TableCell>
                    <TableCell
                      className={`border-r border-gray-400 whitespace-normal py-3 ${row.isSubRow ? "pl-8 italic text-gray-600" : ""}`}
                    >
                      {row.isSubRow ? `• ${row.information}` : row.information}
                    </TableCell>
                    <TableCell className="border-r border-gray-400 text-center py-3">
                      {row.numberStrength}
                    </TableCell>
                    {/* Merge the 3 sub-rows for the Name and Qualifications column */}
                    {!row.isSubRow ? (
                      <TableCell className="whitespace-normal py-3 px-4 text-center">
                        {row.nameAndQualifications}
                      </TableCell>
                    ) : (
                      row.isFirstSubRow && (
                        <TableCell rowSpan={3} className="whitespace-normal py-3 px-4 text-center align-middle border-l border-gray-400 bg-white">
                          <Button asChild variant="outline" size="sm">
                            <Link
                              href="/mpd/d/4-list-of-teachers.pdf"
                              target="_blank"
                              aria-label="View List of Teachers"
                            >
                              View List of Teachers
                            </Link>
                          </Button>
                        </TableCell>
                      )
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
