import { HeroSection } from "@/components";
import Gallery from "./Gallery";

// Gallery categories and images

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Photo Gallery"
        description="Explore moments and memories from B. S. Sr. Sec. School through our collection of photographs."
        badge="Visual Journey"
      />

      <Gallery />
    </div>
  );
}
