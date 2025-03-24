import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

interface DocumentCardProps {
  name: string
  file: string
}

export function DocumentCard({ name, file }: DocumentCardProps) {
  return (
    <Card className="">
    <CardContent className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <FileText className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold mb-3 text-gray-900">{name}</h3>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <Link
            href={`/documents/${file}`}
            target="_blank"
            aria-label={`View ${name}`}
          >
            View Document
          </Link>
        </Button>
      </div>
    </CardContent>
  </Card>
)
}

