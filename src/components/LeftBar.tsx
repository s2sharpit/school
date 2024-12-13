import Image from "next/image";
import Link from "next/link";
import newsData from "@/data/newsData";


export default function LeftBar() {
  return (
    <div className="order-2 lg:order-none flex flex-col lg:py-10 sm:flex-row lg:flex-col gap-14 mx-auto">
            <Link href={"/admission_form.pdf"}>
              <Image
                className=" lg:w-80 rounded-lg border border-neutral-300"
                src={"/img/admission_form.jpg"}
                alt="admission_img"
                width={600}
                height={800}
              />
            </Link>
            <div className="border-solid w-full md:h-80 sm:w-full md:w-3/4 lg:w-80 bg-blue-50 border-neutral-300 rounded-lg border space-y-2 pb-7">
              <h3 className="rounded-t-lg p-2 text-center bg-blue-200">
                NEWS & UPDATES
              </h3>
              <ul className="list-disc pl-7 space-y-2">
                {newsData.map((data: any, index: number) => (
                  <li key={index}>{data.li}</li>
                ))}
              </ul>
            </div>
          </div>
  )
}
