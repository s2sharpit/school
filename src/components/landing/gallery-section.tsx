import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"

// Sample gallery images
const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Classroom" },
  { src: "/gallery/2.jpg", alt: "Science Lab" },
  { src: "/gallery/3.jpg", alt: "Annual Day" },
]

export function GallerySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Photo Gallery"
          title="Glimpses of School Life"
          description="Explore moments and memories from our vibrant campus life."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

