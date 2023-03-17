import Image from 'next/image'
import schoolData from "../data/aboutSchool"
import AboutSchool from '@/components/body/AboutSchool'


export default function Home() {
  return (
    <main className='text-justify'>
      {schoolData.map((schoolD, index) => <AboutSchool key={index} data={schoolD} />)}
    </main>
  )
}
