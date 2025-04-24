import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      "Office: +91 890143 7877",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["bsmschoolsalempur@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "B. S. Sr. Sec. School, Salempur Khadar, Darpur Road, Haryana 135103, India",
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Get In Touch"
          title="Contact Information"
          description="School Hours: Monday - Saturday, 8:00 AM - 2:30 PM"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((contact) => (
            <FeatureCard key={contact.title} {...contact}>
              {contact.details.map((detail, index) => (
                <p key={index} className="text-muted-foreground mb-1">
                  {detail}
                </p>
              ))}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
