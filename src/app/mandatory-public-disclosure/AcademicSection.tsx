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
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import Link from "next/link";

const academicDocuments = [
    { name: "Fee Structure of the School", file: "1-fee-structure-of-the-school.pdf", available: true },
    { name: "Annual Academic Calendar", file: "academic-calendar.pdf", available: false },
    { name: "List of School Management Committee (SMC)", file: "3-list-of-smc.pdf", available: true },
    { name: "List of Parents Teachers Association (PTA) Members", file: "4-list-of-pta.pdf", available: true },
    { name: "Last three-year result of the Board Examination (as per applicability)", file: "5-last-3year-board-result.pdf", available: true },
];


export function AcademicSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <SectionHeader
                    badge="Result & Academics"
                    title="Academic Documents & Results"
                    description="Academic documents and last three-year board examination results as required by CBSE."
                />
                {/* Academic Documents Table */}
                <div className="overflow-x-auto rounded-lg border border-gray-400 mt-8">
                    <Table className="min-w-[560px] bg-white">
                        <TableHeader>
                            <TableRow className="bg-[#cce0ef] hover:bg-[#cce0ef] border-b border-gray-400">
                                <TableHead className="w-[60px] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                                    S. No.
                                </TableHead>
                                <TableHead className="font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                                    Documents / Information
                                </TableHead>
                                <TableHead className="w-[180px] font-bold text-gray-900 text-center align-middle">
                                    Upload Documents
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {academicDocuments.map((doc, index) => {
                                const isAvailable = doc.available !== false
                                return (
                                    <TableRow
                                        key={index}
                                        className={`hover:bg-transparent border-b border-gray-400 last:border-b-0 ${!isAvailable ? "bg-gray-50/60" : ""}`}
                                    >
                                        <TableCell className={`text-center border-r border-gray-400 py-3 font-medium ${!isAvailable ? "text-gray-400" : ""}`}>
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className={`border-r border-gray-400 py-3 whitespace-normal ${!isAvailable ? "text-gray-400" : ""}`}>
                                            <span className="flex items-center gap-2">
                                                <FileText className={`h-4 w-4 shrink-0 ${isAvailable ? "text-primary" : "text-gray-300"}`} />
                                                {doc.name}
                                            </span>
                                        </TableCell>
                                        <TableCell className="py-3 text-center">
                                            {isAvailable ? (
                                                <Button asChild variant="outline" size="sm">
                                                    <Link
                                                        href={`/mpd/c/${doc.file}`}
                                                        target="_blank"
                                                        aria-label={`View ${doc.name}`}
                                                    >
                                                        View Document
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Badge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50 text-xs font-normal">
                                                    Not Available
                                                </Badge>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
}
