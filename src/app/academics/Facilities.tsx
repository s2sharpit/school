import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/ui/section-header";

const facilities = [
  // {
  //   title: "Well-Equipped Classrooms",
  //   description: "Spacious, well-lit classrooms with essential learning resources.",
  //   imageSrc: "/placeholder.svg?height=400&width=600",
  // },
  {
    title: "Physics Laboratory",
    description: "Equipped for hands-on experiments in mechanics, electricity, and optics.",
    imageSrc: "/facilities/physics-lab.jpg",
  },
  {
    title: "Chemistry Laboratory",
    description: "Safe, well-ventilated lab for chemical analysis and experimentation.",
    imageSrc: "/facilities/chemistry-lab.jpg",
  },
  {
    title: "Biology Laboratory",
    description: "Exploring life sciences through microscopy, dissections, and practical studies.",
    imageSrc: "/facilities/biology-lab.jpg",
  },
  // {
  //   title: "Computer Lab",
  //   description: "Latest hardware and software for digital literacy",
  //   imageSrc: "/placeholder.svg?height=400&width=600",
  // },
  // {
  //   title: "Library",
  //   description: "Diverse collection of books for academic and recreational reading.",
  //   imageSrc: "/placeholder.svg?height=400&width=600",
  // },
  // {
  //   title: "Sports Facilities",
  //   description: "Expansive playground for athletics and team sports activities.",
  //   imageSrc: "/placeholder.svg?height=400&width=600",
  // },
  // {
  //   title: "Auditorium",
  //   description: "For school events, assemblies, and performances",
  //   imageSrc: "/placeholder.svg?height=400&width=600",
  // },
]

export default function Facilities() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Learning Environment"
            title="Campus Facilities"
            description="Our campus is equipped with modern facilities to enhance the learning experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((value, index) => (
              <FeatureCard key={index} {...value} />
            ))}
          </div>
        </div>
    </section>
  );
}
