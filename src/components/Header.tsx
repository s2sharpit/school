'use client'
import Image from "next/image";
import Navbar from "./Navbar";
import imgData from "../data/imgData";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

export default function Header() {
    return (
        <header className="relative mb-40">
            <Navbar />
            <div className="pt-28 flex justify-between">
                <div className="mt-16 mb-24 mx-20 space-y-6">
                    <h1 className="text-4xl font-bold">Discover the <span className="text-blue-700">Best Education</span> Opportunities at Our School!</h1>
                    {/* <h1 className="text-4xl font-bold">Join Our School and Empower Your Future Today!</h1> */}
                    {/* <h1 className="text-2xl font-bold">Discover the Dynamic Learning Experience at B. S. Sen. Sec. School</h1> */}
                    <p className="">An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.</p>
                </div>
                <Image className="rounded-tl-[5rem] shadow-header" src={'/img/school.jpg'} width={600} height={600} alt="schooPic" />
            </div>
            <div className="absolute -bottom-28 w-full px-20">
                <div className="h-52 rounded-lg backdrop-blur-sm shadow-header pt-4">

                <Swiper className="h-full"
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                            // slidesPerGroup: 2,
                        },
                        769: {
                            slidesPerView: 6,
                            // slidesPerGroup: 2,
                        },
                    }}
                    >
                    
                    {imgData.map((data: any, index: number) =>
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                <Image src={"/achievers/topper_" + (index + 1) + ".jpeg"} alt="" width={120} height={120} className="rounded-lg  bg-white" />
                                <span className="text-center">{data.name}<br />{data.session}</span>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                    </div>
            </div>
        </header>
    )
}