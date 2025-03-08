"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header
      id="header"
      className="relative flex justify-center bg-[url(../../public/img/school_building.jpg)] bg-contain bg-fixed "
    >
      <div className="d:pt-28 flex justify-between gap-x-9 bg-black/30 bg-gradient-to-rfrom-black/30via-transparentto-transparent">
        <Image
          src="/img/school_building.jpg"
          alt="school building"
          width={5000}
          height={4000}
          className="invisible"
        />
        <div className="absolute font-serif bottom-6 left-12 text-5xl/tight text-white ">
          <h1 className="">
            Welcome to <br /> B. S. Sr. Sec. School <br /> Salempur Khadar,{" "}
            <br /> Yamunanagar
          </h1>
        </div>
      </div>
    </header>
  );
}
