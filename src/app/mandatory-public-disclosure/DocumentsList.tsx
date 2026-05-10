import { SectionHeader } from "@/components/ui/section-header"
import { DocumentCard } from "@/components/document-card"

interface DocumentsSectionProps {
  title: string
  badge: string
  description?: string
  documents: Array<{
    name: string
    file: string
  }>
}

export function DocumentsSection({ title, badge, description, documents }: DocumentsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader badge={badge} title={title} description={description} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard key={index} name={doc.name} file={doc.file} />
          ))}
        </div>
      </div>
    </section>
  )
}

