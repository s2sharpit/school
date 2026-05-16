import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import Link from "next/link"

// Document categories and items
const mandatoryDocuments: {
  name: string
  file: string
  available?: boolean
}[] = [
    { name: "Copies of Affiliation/Upgradation Letter and recent extension of affiliation, if any", file: "b/1-copy-of-affiliation.pdf", available: true },
    { name: "Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable", file: "b/2-copy-of-society.pdf", available: true },
    { name: "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT", file: "b/3-copy-of-noc.pdf", available: true },
    { name: "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable", file: "b/4-copy-of-recognistion-certificate.pdf", available: true },
    { name: "Copy of valid Building Safety Certificate as per the National Building Code", file: "b/5-copy-of-building-safety.pdf", available: true },
    { name: "Copy of valid Fire Safety Certificate issued by the Competent Authority", file: "b/6-copy-of-fire-safety.pdf", available: true },
    { name: "Copy of the DEO Certificate submitted by the school for affiliation/upgradation/extension or self-certification by school", file: "b/7-self-certification.pdf", available: true },
    { name: "Copies of valid Drinking Water, Health and Sanitation Certificates and Water Testing Report", file: "b/8-copy-of-sanitation-certificate.pdf", available: true },
  ]


export function DocumentsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader badge="Mandatory Disclosure" title="Documents and Information" description="Mandatory documents as required by CBSE and regulatory authorities." />
        <div className="overflow-x-auto rounded-lg border border-gray-400 mt-8">
          <Table className="min-w-[560px] bg-white">
            <TableHeader>
              <TableRow className="bg-[#cce0ef] hover:bg-[#cce0ef] border-b border-gray-400">
                <TableHead className="w-[60px] font-bold text-gray-900 border-r border-gray-400 text-center align-middle">
                  Sl. No.
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
              {mandatoryDocuments.map((doc, index) => {
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
                            href={`/mpd/${doc.file}`}
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
        <p className="mt-4 text-xs text-muted-foreground italic border-l-2 border-gray-300 pl-3">
          <strong>Note:</strong> Schools must upload self-attested copies of the above documents signed by Chairman/Manager/Secretary and Principal. If uploaded documents are found to be non-genuine at a later stage, the school shall be liable for action as per norms.
        </p>
      </div>
    </section>
  )
}

