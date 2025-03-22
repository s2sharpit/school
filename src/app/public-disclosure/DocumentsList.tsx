import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download, FileText } from "lucide-react";
import Link from "next/link";

interface DocumentsListProps {
  title: string;
  description: string;
  badgeText: string;
  docs: { name: string; file: string }[];
}

const DocumentsList: React.FC<
  DocumentsListProps & React.ComponentProps<"section">
> = ({ className, title, description, badgeText, docs }) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            {badgeText}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc, index) => (
            <Card key={index} className="">
              <CardContent className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-3 text-gray-900">{doc.name}</h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Link
                      href={`/documents/${doc.file}`}
                      target="_blank"
                      aria-label={`View ${doc.name}`}
                    >
                      View Document
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsList;
