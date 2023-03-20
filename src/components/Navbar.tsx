import Link from "next/link"
import navData from "../data/navData"
import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar() {

    const navRef = useRef<HTMLDivElement>(null);
    const [nav, setNav] = useState(false);

    const handleClose = useCallback((e: any) => {
        if (navRef.current && !navRef.current?.contains(e.target)) {
            setNav(false);
        }
    }, [navRef]);

    useEffect(() => {
        window.addEventListener("scroll", () => setNav(false));
        window.addEventListener("click", handleClose);
    }, [handleClose, nav])

    const handleClickClose = useCallback((event: any, id: string) => {
        document.getElementById(id)?.scrollIntoView();
    }, []);

    return (
        <nav className="z-10 md:flex justify-between fixed w-full h-max items-center py-4 px-8 lg:px-16 shadow-header bg-body-color">
            <Link href={"/"} className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-700">B. S. Senior Secondary School</Link>
            <div ref={navRef} onClick={() => setNav(prev => !prev)} className={`${nav && 'open'} menu-btn flex z-10 md:hidden absolute top-0 right-0 justify-center items-center p-6`}>
                <div className="ham"></div>
            </div>

            <ul className={`${!nav && 'max-md:-mr-48'} flexjustify-betweenmin-w-fitw-1/2font-medium overflow-x-hidden max-md:overflow-y-scroll right-0 absolute md:static md:flex h-[calc(100vh-60px)] max-md:mt-4 max-md:pt-4 md:h-max duration-300 transition-all max-md:bg-container-color w-48 md:w-1/2 text-center justify-between  max-md:space-y-5`}>
                {navData.map((data, index) =>
                    <li key={index} className="group">
                        <Link href={data.li} className={`${data.nested && "pointer-events-none"} capitalize`}>
                            {data.li}
                            {/* <span className="spLink h-0.5 w-0 transition-all duration-200 bg-white"></span> */}
                        </Link>
                        {data.nested &&
                            <div className={`md:scale-0 group-hover:scale-100 group-hover:block md:hidden md:absolute text-left bg-container-color shadow-header md:pt10 w-40 rounded-md transition-all duration-700 mx-auto md:-translate-x-1/4`}>
                                {(data.nested).map((d, i) => <Link key={i} href={"/" + data.li + "/" + d.ls} className="block capitalize w-full text-center py-4 px-2 hover:bg-body-color rounded-md transition duration-300">{d.name}</Link>)}
                            </div>
                        }
                    </li>
                )}
                <li className="cursor-pointer capitalize" onClick={event => handleClickClose(event, "contact")}>Contact</li>
            </ul>

        </nav>
    )
}