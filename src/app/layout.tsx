import Header from '@/components/Header'
import './globals.css'
import newsData from '../data/newsData'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'B. S. Senior Secondary School',
  description: 'An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.',
  authors: [{ name: 's2sharpit' }, { name: 'Tushar Saini', url: 'https://s2sharpit.me' }],
  keywords: ['b. s. senior secondary school', 'salmepur khadar', 'school', 'cbse', 'education', 'bharat', 's2sharpit'],
  publisher: 's2sharpit',
  openGraph: {
    title: 'B. S. Senior Secondary School',
    description: 'An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.',
    url: 'https://bsseniorsecondaryschool.in',
    siteName: 'B. S. Senior Secondary School',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-color`}>
        <Header />
        <div className="flex flex-col lg:flex-row justify-between px-8 md:px-12 lg:px-16 gap-4 lg:gap-16 pb-8">
          <div className="order-2 lg:order-none flex flex-col lg:py-10 sm:flex-row lg:flex-col gap-14 mx-auto">
            <Link href={"/admission_form.pdf"}><Image className=' lg:w-80 rounded-lg' src={'/img/admission_img.jpg'} alt='admission_img' width={600} height={800} /></Link>
            <div className="border-solid w-full md:h-80 sm:w-full md:w-3/4 lg:w-80 bg-blue-50 border-neutral-300 rounded-lg border-[1px] space-y-2 pb-7">
              <h3 className="rounded-t-lg p-2 text-center bg-blue-200">NEWS & UPDATES</h3>
              <ul className="list-disc pl-7 space-y-2">
                {newsData.map((data: any, index: number) => <li key={index}>{data.li}</li>)}
              </ul>
            </div>
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}