import Image from 'next/image'
import aboutSchool from "@/data/aboutSchool"


export default function Home() {
  return (
    <section className=''>
      {aboutSchool.map((data, index) => <AboutSchool key={index} data={data} />)}
      {/* <div className="">
        <h2 className="">Gallery</h2>
      </div> */}
    </section>
  )
}

// aboutSchool, mission, director's message, principal's message
function AboutSchool({ data }: {data: any}) {
  return (
      <div className="w-full group">
          <h3 className="">{data.title}</h3>
          <div>
              {(data.img) && (
                <figure className='float-left mr-5 w-28 rounded-md bg-white drop-shadow-2xl p-1'>
                  <Image src={"/aboutSch/" + data.img} width={100} height={100} alt="" className="w-full" />
                  <figcaption className='text-center text-xs mt-1 font-medium'>{data.name}</figcaption>
                </figure>
              )}
              <p className="">
                  {(data.bold) && <b className="text-lg">{data.bold}</b>}
                  {data.content} <br /> {(data.c1) && data.c1}
              </p>
          </div>
      </div>
  )
}