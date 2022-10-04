import LeftBar from "./body/LeftBar"
import barData from "../data/leftBar"
import schoolData from "../data/aboutSchool"
import AboutSchool from "./body/AboutSchool"

export default () => {
    return (
        <div className="drop-shadow-none bg-blue-50 flex flex-col md:flex-row justify-between p-10 gap-14">
            <div className="w5/6 space-y-14">
                {barData.map((barD, index) => <LeftBar key={index} data={barD} />)}
            </div>
            <div className="bg-[linear-gradient(#0000001a,#00000080),url(/img/Logo.png)]bgfixedbg-no-repeatbg-center w2/3 border-[1px]rounded-2xlborder-blackborder-solidbg-blue-100 text-justify space-y-16">
                {schoolData.map((schoolD, index) => <AboutSchool key={index} data={schoolD} />)}
            {/* <video autoPlay controls src="schoolVideo.mp4" className="rounded-xl"></video> */}
            </div>
            {/* <Achievement /> */}
        </div>
    )
}