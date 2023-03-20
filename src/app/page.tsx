import Image from 'next/image'
import aboutSchool from "../data/aboutSchool"


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


function AboutSchool({ data }: {data: any}) {
  return (
      <div className="w-full group">
          <h3 className="">{data.title}</h3>
          <div>
              {(data.img) && (
                  <Image src={"/aboutSch/" + data.img} width={100} height={100} alt="" className="w-28 float-left mr-5 rounded-md bg-white drop-shadow-2xl p-1" />
              )}
              <p className="">
                  {(data.bold) && <b className="text-lg">{data.bold}</b>}
                  {data.content} <br /> {(data.c1) && data.c1}
              </p>
          </div>
      </div>
  )
}