import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/ui/section-header";

const facilities = [
  {
    title: "Well-Equipped Classrooms",
    description: "Smart boards and modern teaching aids",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Science Laboratories",
    description: "Separate labs for Physics, Chemistry, and Biology",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Computer Lab",
    description: "Latest hardware and software for digital literacy",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Library",
    description: "Extensive collection of books and digital resources",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Sports Facilities",
    description: "Playground, indoor games, and sports equipment",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Auditorium",
    description: "For school events, assemblies, and performances",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
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
