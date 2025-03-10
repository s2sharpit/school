import Mission from "./Mission";

export default function page() {
  return (
    <main className="max-w-7xl mx-auto py-8 pt-24 w-11/12 grid gap-6">

    <section className="">
      <h1 className="text-3xl font-bold text-center text-blue-800">
        Our History
      </h1>
      <p className="">
        B. S. Senior Secondary School, Salempur Khadar, was established on April
        1, 2001, with a vision to provide quality education to students from
        rural and urban areas. Over the years, the school has grown from a
        modest institution to a well-reputed senior secondary school affiliated
        with CBSE. The school has continuously upgraded its infrastructure,
        faculty, and curriculum to ensure students receive the best academic and
        co-curricular exposure.
        <br />
        Over the years, the school has continuously upgraded its infrastructure,
        faculty, and teaching methodologies to keep pace with modern education
        standards. Our alumni have gone on to excel in various professional
        fields, making us proud of our legacy.
      </p>
    </section>
    <section className="">
      <h1 className="text-3xl font-bold text-center text-blue-800">
        Our Vision
      </h1>
      <p className="italic">
        "To nurture young minds with knowledge, values, and skills, empowering them to become responsible global citizens and lifelong learners"
      </p>
    </section>
    <Mission />
    </main>
  );
}
