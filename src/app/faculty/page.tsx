import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Leadership from "./Leadership";
import DepartmentHeads from "./DepartmentHeads";
import FacultyGrid from "./FacultyGrid";
import SupportStaff from "./SupportStaff";
import CTA from "@/components/CTA";

export default function FacultyPage() {
  return (
    <div className="flex flex-col">
      <Hero
        title="Our Faculty & Staff"
        desc="Meet the dedicated professionals who make B. S. Sr. Sec. School a center of excellence."
        imgSrc="/img/school_building.jpg"
      />

      <Overview
        badgeText="Our Team"
        title="Experienced Educators, Passionate Mentors"
        para={[
          "At B. S. Sr. Sec. School, we take pride in our exceptional faculty and staff who are not just educators but mentors, guides, and role models for our students. Our team comprises highly qualified professionals with extensive experience in their respective fields.",
          "Our teachers are committed to providing a nurturing and stimulating learning environment where each student can thrive. They employ innovative teaching methodologies that make learning engaging and effective, helping students develop critical thinking skills and a love for learning.",
        ]}
        imageUrl="/img/school_building.jpg"
      />

      {/* Leadership Section */}
      <Leadership />

      {/* Department Heads Section */}
      <DepartmentHeads />
      {/* Faculty Grid Section */}
      <FacultyGrid />

      {/* Support Staff Section */}
      <SupportStaff />

      {/* Join Us Section */}
      <CTA
        title="Join Our Team"
        desc="We're always looking for passionate educators and support staff to join our team. If you're interested
                  in making a difference in students' lives, we'd love to hear from you."
        secBtn={{ title: "View Current Openings", href: "/careers" }}
        outlineBtn={{ title: "Contact HR Department", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
