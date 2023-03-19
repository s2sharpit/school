import Header from '@/components/Header'
import './globals.css'
import barData from '../data/leftBar'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'B. S. Senior Secondary School',
  description: 'An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.',
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
        <div className="flex flex-col lg:flex-row justify-between px-8 md:px-12 lg:px-20 gap-4 lg:gap-16 pb-8">
          <div className="order-2 lg:order-none flex flex-col lg:py-10 sm:flex-row lg:flex-col gap-14 mx-auto">
            {/* <img src="/img/Logo.png" alt="school logo" className="m-auto" /> */}
            {barData.map((data: any, index: number) => <LeftBar key={index} data={data} />)}
          </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}


function LeftBar({ data }: { data: any }) {
  return (
    <div className="border-solid w-[calc(100% - 80px)] lg:w-80 bg-blue-50 border-neutral-300 rounded-lg border-[1px] space-y-2 pb-7">
      <h1 className="rounded-t-lg p-2 text-blue-700 text-2xl text-center bg-blue-200 font-bold">{data.title}</h1>
      <p className="px-7 text-justify">{data.content}</p>
    </div>
  )
}