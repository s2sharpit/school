import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { SectionHeader } from "@/components/ui/section-header";

const supportStaffData = [
  {
    title: "Administrative Staff",
    description:
      "Our administrative staff handles admissions, records, communications, and other administrative functions, ensuring smooth operations of the school.",
  },
  {
    title: "IT Support Team",
    description:
      "Our IT team maintains the school's technology infrastructure, providing technical support to faculty, staff, and students.",
  },
  {
    title: "Maintenance Staff",
    description:
      "Our maintenance team ensures that the school facilities are well-maintained, clean, and safe for all.",
  },
  {
    title: "Library Staff",
    description:
      "Our librarians help students and faculty access resources, promote reading, and maintain our extensive collection of books and digital resources.",
  },
  {
    title: "Health Services",
    description:
      "Our school nurse and health services team provide first aid, health education, and ensure the well-being of our students.",
  },
  {
    title: "Transportation Staff",
    description:
      "Our transportation team ensures safe and timely transportation for students who use the school bus service.",
  },
];

export default function SupportStaff() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
      <SectionHeader
          badge="Behind the Scenes"
          title="Support Staff"
          description="Meet the dedicated professionals who ensure the smooth functioning of our school."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportStaffData.map((staff, index) => (
            <Card key={index}>
              <CardContent>
                <h3 className="text-xl font-bold mb-2">{staff.title}</h3>
                <p className="text-muted-foreground">{staff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
