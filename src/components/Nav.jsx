import { useState } from "react";
import navData from "../data/navData"
import List from "./List"

export default function Nav() {

    const [val, setVal] = useState(window.scrollY);
    const fScroll = () => {
        const heading = document.getElementById("heading");
        const changeBg = document.getElementById("addBg");
        
        setVal(window.scrollY);

        try {
            if (val >= window.innerHeight - 60) {
                heading.classList.remove("lg:invisible");
                changeBg.classList.remove("lg:bg-transparent");
            } else {
                heading.classList.add("lg:invisible");
                changeBg.classList.add("lg:bg-transparent");
            }

        } catch (err) {
            console.error(err);
        }
    }

    if (window.innerWidth > 500) {
        window.onload = fScroll;
        window.addEventListener("scroll", fScroll);
    }


    const sFun = () => {
        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.classList.toggle('open');
        document.querySelector('#showNav').classList.toggle('hidden');

    }

    return (
        <nav id="addBg" className="bg-blue-700 lg:bg-transparent z-10 lg:flex justify-between fixed w-full h-max rounded-b-3xl lg:rounded-b-none lg:bg-gradient-to-b from-[#041F3E]/80 to-[#041F3E]/0">
            <h1 id="heading" className="text-xl text-white lg:text-3xl font-semibold py-3 px-5 lg:px-10 lg:invisible">B. S. Senior Secondary School</h1>
            <div onClick={sFun} className="menu-btn flex z-10 md:hidden absolute top-0 right-0 justify-center items-center w-9 h-8 m-3">
                <div className="ham"></div>
            </div>
            <ul id="showNav" className="hidden text-lg mx-auto w-full relative lg:flex h-scren lg:h-fit py-10 border-solid border-black border-2 rounded-b-3xl lg:border-none lg:text-white bg-blue-100 lg:bg-transparent md:w-3/5 text-center justify-between px-10 lg:py-2 space-y-5 lg:space-y-0">
                {navData.map((nData, index) => <List key={index} data={nData} />)}
            </ul>

        </nav>
    )

}