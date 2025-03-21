import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, Palette, Trophy, Users } from "lucide-react"
import Hero from "@/components/Hero"
import Overview from "./Overview"
import Programs from "./Programs"
import ExtraCurricular from "./ExtraCurricular"
import Facilities from "./Facilities"
import CTA from "@/components/CTA"

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Academic Programs"
        desc="Discover our comprehensive educational offerings designed to nurture well-rounded individuals."
        imgSrc="/img/school_building.jpg"
      />

      <Overview />
      <Programs />
      <ExtraCurricular />
      <Facilities />

      {/* CTA Section */}
      <CTA
        title="Ready to Join Our Academic Community?"
        desc="Take the first step towards a quality education that prepares your child for future success. Apply for
                  admission or contact us for more information."
        secBtn={{ title: "Apply Now", href: "/admissions" }}
        outlineBtn={{ title: "Contact Us", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  )
}

