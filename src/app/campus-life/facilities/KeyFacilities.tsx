import ImgCard from "@/components/ImgCard";
import Section, { Accent } from "@/components/ui/Section";
import Title from "@/components/ui/Title";

const facilities = [
  {
    title: "Physics Laboratory",
    desc: "Advanced physics lab with modern apparatus for hands-on experiments and research.",
    imgSrc: "/facilities/physics-lab.jpg",
  },
  {
    title: "Chemistry Laboratory",
    desc: "Well-equipped chemistry lab for practical experiments and chemical analysis.",
    imgSrc: "/facilities/chemistry-lab.jpg",
  },
  {
    title: "Biology Laboratory",
    desc: "State-of-the-art biology lab with microscopes and specimen collections for biological studies.",
    imgSrc: "/facilities/biology-lab.jpg",
  },
  // {
  //   title: "Computer Labs",
  //   desc: "High-tech computer labs with internet access for IT-based learning.",
  //   imgSrc: "/facilities/computer-lab.jpg",
  // },
  // {
  //   title: "Library & Resource Center",
  //   desc: "A vast collection of books, journals, and e-learning materials.",
  //   imgSrc: "/facilities/library.jpg",
  // },
  {
    title: "Auditorium & Seminar Halls",
    desc: "A spacious multi-purpose hall for events, cultural programs, and workshops.",
    imgSrc: "/facilities/auditorium.jpg",
  },
  // {
  //   title: "Cafeteria & Dining Facilities",
  //   desc: "Hygienic and nutritious meals served in a clean environment.",
  //   imgSrc: "/facilities/cafeteria.jpg",
  // },
  // {
  //   title: "Security & Safety",
  //   desc: "CCTV surveillance, strict entry protocols, and dedicated staff ensure campus security.",
  //   imgSrc: "/facilities/security.jpg",
  // },
];

export default function KeyFacilities() {
  return (
    <Section>
      <Title>🏫 Key Facilities at Our Campus</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {facilities.map((item, index) => (
          <ImgCard key={index} index={index} {...item} />
        ))}
      </div>

      <Section.Note>
        Our modern infrastructure supports an{" "}
        <Accent>engaging and effective learning experience</Accent>!
      </Section.Note>
    </Section>
  );
}
