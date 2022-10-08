import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import navData from "../data/navData"
import List from "./List"

export default function Nav() {

    const [val, setVal] = useState(window.scrollY);

    const fScroll = () => {
        const heading = document.getElementById("heading");
        const changeBg = document.getElementById("addBg");
        const homeBtn = document.getElementById("homeBtn")

        setVal(window.scrollY);

        try {
            if (val >= window.innerHeight - 60) {
                heading.classList.remove("lg:hidden");
                changeBg.classList.remove("lg:bg-transparent");
                homeBtn.classList.remove("lg:block")

            } else {
                heading.classList.add("lg:hidden");
                changeBg.classList.add("lg:bg-transparent");
                homeBtn.classList.add("lg:block")
            }

        } catch (err) {
            console.error(err);
        }
    }

    if (window.innerWidth > 500) {
        window.onload = fScroll;
        window.addEventListener("scroll", fScroll);
    }

    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef();

    // console.log(document.body);
    useEffect(() => {
        const closeNav = e => {
            if (e.path[0] !== navRef.current)
                setIsOpen(false);
        };

        document.addEventListener('click', closeNav);

        return () => document.removeEventListener('click', closeNav);
    })

    // isOpen ? document.body.classList.add("bg-black") : document.body.classList.remove("bg-black");

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/school");
    }

    return (
        <nav id="addBg" className="bg-blue-700 lg:bg-transparent z-10 md:flex justify-between fixed w-full h-max bg-gradient-to-b from-[#041F3E]/80 to-[#041F3E]/0 items-center">
            <div onClick={handleSearch} className="font-semibold text-white py-3 px-4 w-fit lg:px-10 cursor-pointer">
                <h1 id="heading" className=" lg:hidden text-lg lg:text-3xl">B. S. Senior Secondary School</h1>
                <span id="homeBtn" className="hidden lg:block ">Home</span>
            </div>
            <div ref={navRef} onClick={() => setIsOpen(prev => !prev)} className={"menu-btn flex z-10 md:hidden absolute top-0 right-0 justify-center items-center p-6 " + (isOpen && 'open')}>
                <div className="ham"></div>
            </div>
            <ul className={"overflow-y-scroll md:overflow-hidden text-lg md:text-base right-0 md:translate-x-0 absolute md:relative md:flex h-screen md:h-fit py-10 rounded-b-3xl duration-300 transition-all text-white bg-blue-600 md:bg-transparent w-48 md:w-auto lg:w-3/5 text-center justify-between lg:px-10 md:py-2 space-y-5 md:space-y-0 " + (!isOpen && 'translate-x-48')}>
                {navData.map((nData, index) => <List key={index} data={nData} />)}
            </ul>

        </nav>
    )

}