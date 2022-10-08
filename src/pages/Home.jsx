import schoolData from "../data/aboutSchool"
import AboutSchool from "../components/body/AboutSchool"

export default () => {
    return (
        <div className="flex flex-col bg-[linear-gradient(#0000001a,#00000080),url(/img/Logo.png)]bgfixedbg-no-repeatbg-center w-full border-[1px]rounded-2xlborder-blackborder-solidbg-blue-100 text-justify gap-16">
            <div className="flex order-2 lg:order-none justify-center gap-7 lg:gap-x-24 flex-wrap font-semibold text-white">
                <button className="border-solid border-2 border-red-600 w-48 py-3 rounded-md bg-red-600 hover:bg-white hover:text-black transition">Pay Fee Online</button>
                <button className="border-solid border-2 border-green-600 w-48 py-3 rounded-md bg-green-600 hover:bg-white hover:text-black transition">Know About School</button>
                <button className="border-solid border-2 border-blue-600 w-48 py-3 rounded-md bg-blue-600 hover:bg-white hover:text-black transition">Get in Touch</button>
            </div>
            {schoolData.map((schoolD, index) => <AboutSchool key={index} data={schoolD} />)}
            {/* <video autoPlay controls src="schoolVideo.mp4" className="rounded-xl"></video> */}
            {/* <Achievement /> */}
        </div>
    )
}