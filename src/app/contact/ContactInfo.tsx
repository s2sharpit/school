import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const contactDetails = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    details: [
      "Main Office: +91 98765 43210",
      "Admissions: +91 98765 43211",
      "Principal's Office: +91 98765 43212",
    ],
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    details: [
      "General Inquiries: info@bsschool.edu",
      "Admissions: admissions@bsschool.edu",
      "Principal: principal@bsschool.edu",
    ],
  },
  {
    id: 3,
    icon: MapPin,
    title: "Address",
    details: ["B. S. Sr. Sec. School", "Salempur Khadar", "Delhi, India"],
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {contactDetails.map((contact) => (
            <Card key={contact.id}>
              <CardContent>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                {contact.details.map((detail, index) => (
                  <p key={index} className="text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
