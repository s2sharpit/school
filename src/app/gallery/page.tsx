import Hero from "@/components/Hero";
import Gallery from "./Gallery";

// Gallery categories and images

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Photo Gallery"
        desc="Explore moments and memories from B. S. Sr. Sec. School through our collection of photographs."
        imgSrc="/img/school_building.jpg"
      />

      <Gallery />
    </div>
  );
}
