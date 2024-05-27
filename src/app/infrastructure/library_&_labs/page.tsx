import Image from "next/image";

const images = [
  {
    img: 1,
    title: "Chemistry Lab",
  },
  {
    img: 2,
    title: "Physics Lab",
  },
  {
    img: 3,
    title: "Biology Lab",
  },
];

export default function LibraryLabs() {
  return (
    <section>
      <div className="">
        <h3>Library</h3>
        <p>
          We have facility for the students to get the habit of reading in
          library. The habit of reading is nurtured from childhood, which moulds
          and enriches the growing minds, shapes their nascent values and
          develops the right perspectives. Reading is timeless and is recognized
          as an art, capable of transforming an individual.
        </p>
      </div>
      <div className="">
        <h3>Labs</h3>
        <p>
          The school has well equipped laboratories for Physics, Chemistry and
          Biology wherein the students are encouraged to learn through
          experiments and understand various concepts beyond their books away
          from the conventional classroom teaching. Every year these labs are
          furnished with the latest instruments, specimens, charts etc.
        </p>
        <p>
          Science lab equipments allow students to interact directly with the
          data gathered. They get a first-hand learning experience by performing
          various experiments on their own. Students are made to use the models
          and understand different scientific theories and concepts, thus making
          teaching and learning easy both for the teachers, as well as for the
          students. There are several scientific theories and concepts that are
          difficult to explain directly from the books.
        </p>
        <p>
          Children develop interest in scientific research in science labs. When
          they observe various things and carry out different experiments, their
          reasoning skills are honed and they start thinking deeply on those
          theories and concepts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image) => (
          <div key={image.img} className="group relative rounded-lg overflow-hidden">
            <Image
              src={`/infrastructure/${image.img}.jpg`}
              width={600}
              height={400}
              alt={image.title}
            />
            <div className="absolute hidden top-0 left-0 right-0 bottom-0 group-hover:bg-black/60 group-hover:grid text-white p-4 place-items-center transition-all">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
