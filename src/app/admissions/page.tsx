import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  FileText,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Hero from "@/components/Hero";
import Overview from "./Overview";
import ApplicationProcess from "./ApplicationProcess";
import RequiredDocs from "./RequiredDocs";
import FeeStructure from "./FeeStructure";
import CTA from "@/components/CTA";
import FAQ from "./FAQ";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Admissions"
        desc="Join our vibrant learning community. Find information about the admission process, requirements, and more."
        imgSrc="/img/school_building.jpg"
      />

      <Overview />
      <ApplicationProcess />
      <RequiredDocs />
      <FeeStructure />
      <FAQ />

      <CTA
        title="Ready to Apply?"
        desc="Take the first step towards providing your child with quality education. Download the application form
                  or contact our admissions office for assistance."
        secBtn={{ title: "Download Application Form", href: "#" }}
        outlineBtn={{ title: "Contact Admissions Office", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
