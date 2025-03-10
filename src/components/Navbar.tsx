'use client'
import Link from "next/link"
import navData from "@/data/navData"
import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import HamSvg from "./HamSvg";

export default function Navbar() {

    const navRef = useRef<HTMLDivElement>(null);
    const [nav, setNav] = useState(false);

    const handleClose = useCallback((e: MouseEvent) => {
        if (navRef.current && !navRef.current?.contains(e.target as Node)) {
            setNav(false);
        }
    }, [navRef]);

    useEffect(() => {
        window.addEventListener("scroll", () => setNav(false));
        window.addEventListener("click", handleClose);
    }, [handleClose, nav])

    const handleClick = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView();
    }, []);

    return (
        <nav className="fixed top-1 left-[1%] right-[1%] z-50 rounded-md  h-max items-center px-6 max-md:pr-4 shadow-header bg-blue-950/80 backdrop-blur-xs text-blue-50 md:flex md:justify-between">
            <div className="flex justify-between">

            <Link href={"/"} onClick={() => handleClick("header")} className="flex items-center gap-2">
            <Image src="/img/school_logo.png" width={40} height={40} alt="school logo" className="max-sm:hidden" />
            <span className="text-lg md:text-xl lg:text-2xl fontsemibold text-gray-300 hover:text-slate-100">B. S. Senior Secondary School</span>
            </Link>
            <div ref={navRef} onClick={() => setNav(prev => !prev)} className={`${nav && 'opened'} menu-btn flex z-10 md:hidden justify-center items-center py-1`}>
                <HamSvg />
            </div>
            </div>

            <div className={`${!nav ? 'max-md:h-0 max-md:invisible': 'max-md:h-[26rem] max-h-[calc(100vh-4rem)] max-md:overflow-y-scroll max-md:border-t'} overflow-hidden duration-300 transition-[height] w-[98%] md:w-3/5 left-[1%] right-[1%]`}>
            <ul className="text-center py-4 md:flex justify-between max-md:space-y-5">

                {navData.map((data, index) =>
                    <li key={index} className="group">
                        <Link href={`/${data.li}`} className={`${data.nested && "pointer-events-none"} capitalize flex items-end justify-center text-gray-300 hover:text-slate-100`}>
                            {data.li.replace('-', ' ')} {data.nested && <MdOutlineKeyboardArrowDown className="text-xl" />}
                        </Link>
                        {data.nested &&
                            <div className={`md:scale-0 group-hover:h-auto group-hover:scale-100 group-hover:block md:hidden md:absolute text-left bg-blue-950/90 p-2 shadow-header md:w-40 rounded-md transition-all duration-700 mx-auto md:-translate-x-1/4`}>
                                {(data.nested).map((d, i) => <Link key={i} href={`/${data.li}/${d.ls}`} className="block capitalize w-full text-center p-2 hover:bg-blue-900/70 rounded-md transition duration-300">{d.ls.replace('-', ' ')}</Link>)}
                            </div>
                        }
                    </li>
                )}
                <li className="cursor-pointer capitalize" onClick={() => handleClick("contact")}>contact</li>
                                </ul>
            </div>

        </nav>
    )
}