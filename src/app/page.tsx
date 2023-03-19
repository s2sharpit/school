import Image from 'next/image'
import aboutSchool from "../data/aboutSchool"


export default function Home() {
  return (
    <section className='text-justify'>
      {aboutSchool.map((data, index) => <AboutSchool key={index} data={data} />)}
      {/* <div className="">
        <h2 className="">Gallery</h2>
      </div> */}
    </section>
  )
}


function AboutSchool({ data }: {data: any}) {
  return (
      <div className="w-full mb-6 last:mb-0 group">
          <h3 className="text-2xl font-semibold mb-1 text-blue-700">{data.title}</h3>
          <div className={`${data.img && "pb-8 group-last:pb-0"} space items-center`}>
              {(data.img) && (
              <div className="w-fi float-left inline-block p-1 bg-white rounded-md drop-shadow-2xl mr-5">
                  <Image src={"/aboutSch/" + data.img} width={100} height={100} alt="" className="w-28" />
              </div>)}
              <p className="">
                  {(data.bold) && <b className="text-lg">{data.bold}</b>}
                  {data.content} <br /> {(data.c1) && data.c1}
              </p>
          </div>
      </div>
  )
}