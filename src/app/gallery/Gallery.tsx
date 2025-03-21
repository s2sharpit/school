'use client'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

// Gallery categories and images
const categories = [
    { id: "all", name: "All" },
    { id: "campus", name: "Campus" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "activities", name: "Activities" },
    { id: "achievements", name: "Achievements" },
  ]  

const galleryImages = [
    { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "School Building", category: "campus" },
    { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Classroom", category: "campus" },
    { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Library", category: "campus" },
    { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Computer Lab", category: "campus" },
    { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Annual Day", category: "events" },
    { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Science Exhibition", category: "events" },
    { id: 7, src: "/placeholder.svg?height=600&width=800", alt: "Cultural Program", category: "events" },
    { id: 8, src: "/placeholder.svg?height=600&width=800", alt: "Sports Day", category: "sports" },
    { id: 9, src: "/placeholder.svg?height=600&width=800", alt: "Cricket Match", category: "sports" },
    { id: 10, src: "/placeholder.svg?height=600&width=800", alt: "Basketball Game", category: "sports" },
    { id: 11, src: "/placeholder.svg?height=600&width=800", alt: "Art Class", category: "activities" },
    { id: 12, src: "/placeholder.svg?height=600&width=800", alt: "Music Class", category: "activities" },
    { id: 13, src: "/placeholder.svg?height=600&width=800", alt: "Dance Performance", category: "activities" },
    { id: 14, src: "/placeholder.svg?height=600&width=800", alt: "Award Ceremony", category: "achievements" },
    { id: 15, src: "/placeholder.svg?height=600&width=800", alt: "Student Achievement", category: "achievements" },
    { id: 16, src: "/placeholder.svg?height=600&width=800", alt: "Academic Excellence", category: "achievements" },
  ]
  
  
export default function Gallery() {
      const [activeCategory, setActiveCategory] = useState("all")
      const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null)
    
      const filteredImages =
        activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)
    
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="mb-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setSelectedImage({ src: image.src, alt: image.alt })
            }
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-full max-h-[80vh] flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 z-10 text-white bg-black/50 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  </section>

  )
}
