"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import imgData from "@/data/imgData";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

export default function Header() {
  return (
    <header id="header" className="relative mb-40">
      <Navbar />
      <div className="pt-14 md:pt-28 flex justify-between gap-x-9">
        <div className="mt-12 lg:mt-16 ml-12 lg:ml-16 space-y-4 lg:space-y-6 max-md:hidden">
          <h1 className="text-2xl lg:text-4xl font-bold text-balance">
            Discover the <span className="text-blue-700">Best Education</span>{" "}
            Opportunities at Our School!
          </h1>
          {/* <h1 className="text-4xl font-bold">Join Our School and Empower Your Future Today!</h1> */}
          {/* <h1 className="text-2xl font-bold">Discover the Dynamic Learning Experience at B. S. Sen. Sec. School</h1> */}
          <p className="">
            An affiliated school from CBSE, New Delhi situated in Salempur
            Khadar, Yamunanagar.
          </p>
        </div>
        <Image
          className="md:rounded-tl-[5rem] shadow-header md:w-1/2 h-fit"
          src={"/img/building.jpg"}
          width={900}
          height={900}
          alt="schooPic"
        />
      </div>
      <div className="absolute -bottom-32 md:-bottom-28 w-full px-8 md:px-16">
        <div className="h-52 rounded-lg backdrop-blur-sm shadow-header pt-4">
          <Swiper
            className="h-full"
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
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              512: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
                slidesPerGroup: 2,
              },
              769: {
                slidesPerView: 4,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 6,
                slidesPerGroup: 2,
              },
            }}
          >
            {imgData.map((data: any, index: number) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center drop-shadow-2xl">
                  <Image
                    src={
                      "/achievers/topper_" +
                      (index < 7 ? index + 1 : index - 6) +
                      ".jpeg"
                    }
                    alt=""
                    width={120}
                    height={120}
                    className="rounded-lg  bg-container-color p-1"
                  />
                  <span className="text-center">
                    {data.name}
                    <br />
                    {data.session}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
}
