import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import React from "react";

export default function Principal() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30">
    <div className="container mx-auto px-4">
      <SectionHeader badge="From the Principal's Desk" title="Principal's Message" />
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md border-4 border-white">
            <Image
              src="/img/principal.jpg"
              alt="Smt. Shashi Bala - Principal"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt6 text-center bg-white p-4 rounded-lg shadow-sm -mt-10 mx-4 relative">
            <h3 className="text-xl font-bold text-gray-900">Smt. Shashi Bala</h3>
            <p className="text-primary font-medium">Principal</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-sm text-muted-foreground">Ph.D. in Education</p>
              <p className="text-sm text-muted-foreground">25+ Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">Dear Parents, Students, and Visitors,</p>

            <p className="text-lg leading-relaxed">
              It is with great pleasure that I welcome you to the official website of B. S. Sr. Sec. School,
              Salempur Khadar. As the Principal, I am honored to lead an institution that has been a beacon of
              educational excellence since its establishment in 1985.
            </p>

            <p className="text-lg leading-relaxed">
              At B. S. Sr. Sec. School, we believe that education goes beyond textbooks and classrooms. Our aim is
              to nurture well-rounded individuals who are not only academically proficient but also possess strong
              moral values, social consciousness, and leadership qualities. We strive to create an environment where
              curiosity is encouraged, creativity is fostered, and critical thinking is developed.
            </p>

            <p className="text-lg leading-relaxed">
              Our dedicated faculty members are committed to providing personalized attention to each student,
              recognizing their unique talents and helping them overcome challenges. We believe in a collaborative
              approach to education, where teachers, parents, and students work together to achieve common goals.
            </p>

            <p className="text-lg leading-relaxed">
              The world is evolving rapidly, and we are preparing our students to adapt to these changes while
              staying rooted in timeless values. Our curriculum integrates traditional learning with modern
              pedagogical approaches and technology to ensure that our students are well-equipped for the future.
            </p>

            <p className="text-lg leading-relaxed">
              I invite you to explore our website to learn more about our programs, facilities, and achievements.
              Should you have any questions or wish to visit our campus, please do not hesitate to contact us.
            </p>

            <p className="text-lg leading-relaxed">
              Together, let us embark on this exciting journey of learning and growth.
            </p>

            <p className="text-lg leading-relaxed">Warm regards,</p>

            <div className="mt-6">
              <p className="text-xl font-bold text-primary">Smt. Shashi Bala</p>
              <p className="text-muted-foreground">Principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
