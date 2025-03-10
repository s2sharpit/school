import Header from "@/components/Header";
import coreValues from "@/data/coreValues";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Header />

      <div className="w-11/12 mx-auto py-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="border p-4 md:p-8 rounded-lg shadow-md bg-blue-100">
              <h1 className="text-xl font-bold mb-4">{value.title}</h1>
              <p className="text-gray-700 text-sm text-justify">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
