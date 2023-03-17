import Link from "next/link"
import navData from "../data/navData"

export default function Navbar() {
    return (
        <nav id="addBg" className="z-10 md:flex justify-between fixed w-full h-max items-center py-4 px-16 shadow-header bg-body-color">
            <h1 className="text-lg lg:text-2xl font-semibold">B. S. Senior Secondary School</h1>
            {/* <div className={"menu-btn flex z-10 md:hidden absolute top-0 right-0 justify-center items-center p-6 " }>
                <div className="ham"></div>
            </div> */}

            <ul className={"flex justify-between min-w-fit w-5/12 font-medium"}>
                {navData.map((data, index) =>
                    <Link href={data.li} key={index} className="z-10 w-fit flex flex-col items-center capitalize">
                        {data.li}
                        {/* <span className="spLink h-0.5 w-0 transition-all duration-200 bg-white"></span> */}
                    </Link>
                )}
            </ul>

        </nav>
    )
}