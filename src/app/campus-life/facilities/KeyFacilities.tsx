import { Accent, SectionNote } from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Physics Laboratory",
    description:
      "Advanced physics lab with modern apparatus for hands-on experiments and research.",
    img: "/facilities/physics-lab.jpg",
  },
  {
    title: "Chemistry Laboratory",
    description:
      "Well-equipped chemistry lab for practical experiments and chemical analysis.",
    img: "/facilities/chemistry-lab.jpg",
  },
  {
    title: "Biology Laboratory",
    description:
      "State-of-the-art biology lab with microscopes and specimen collections for biological studies.",
    img: "/facilities/biology-lab.jpg",
  },
  // {
  //   title: "Computer Labs",
  //   description: "High-tech computer labs with internet access for IT-based learning.",
  //   img: "/facilities/computer-lab.jpg",
  // },
  // {
  //   title: "Library & Resource Center",
  //   description: "A vast collection of books, journals, and e-learning materials.",
  //   img: "/facilities/library.jpg",
  // },
  {
    title: "Auditorium & Seminar Halls",
    description:
      "A spacious multi-purpose hall for events, cultural programs, and workshops.",
    img: "/facilities/auditorium.jpg",
  },
  // {
  //   title: "Cafeteria & Dining Facilities",
  //   description: "Hygienic and nutritious meals served in a clean environment.",
  //   img: "/facilities/cafeteria.jpg",
  // },
  // {
  //   title: "Security & Safety",
  //   description: "CCTV surveillance, strict entry protocols, and dedicated staff ensure campus security.",
  //   img: "/facilities/security.jpg",
  // },
];

export default function KeyFacilities() {
  return (
    <section className="space-y-10">
      <Title>🏫 Key Facilities at Our Campus</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.map((facility, index) => (
          <div
            key={index}
            className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg flex flex-col"
          >
            <div className="relative h-52 w-full rounded-lg overflow-hidden">
              <Image
                src={facility.img}
                alt={facility.title}
                className="object-cover"
                fill
                sizes="100vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mt-4">
              <CheckCircle className="w-6 h-6 text-green-600" />{" "}
              {facility.title}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{facility.description}</p>
          </div>
        ))}
      </div>
      <SectionNote>
        Our modern infrastructure supports an{" "}
        <Accent>engaging and effective learning experience</Accent>!
      </SectionNote>
    </section>
  );
}
