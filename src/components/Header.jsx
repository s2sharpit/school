import Nav from "./Nav";

export default function Header() {
    return (

        <header className="min-h-[23vh] sm:min-h-[40vh] lg:min-h-screen">
            <div className="">
            <Nav />
            </div>
            <div className="relative min-h-[23vh] sm:min-h-[40vh] lg:min-h-screen bg-[linear-gradient(#0000001a,#00000080,#0000001a),url('/img/schoolPhoto1.jpg')] bg-no-repeat bg-contain sm:bg-cover bg-fixed">
                {/* <video autoPlay loop muted src="/schoolVideo.mp4" className="fixed"></video> */}
                <div className="hidden lg:block fixed font-semibold top-1/4 text-center w-full my-16 text-white space-y-2 bg-black/40backdrop-blur-md">
                    <h1 className="text-7xl mx-24">B. S. Senior Secondary School</h1>
                    <h4 className="text-5xl">Salempur Khadar, Yamuna Nagar</h4>
                    {/* <i className="text-2xl font-semibold">Affiliated to CBSE, New Delhi upto 10+2 level <br />
                        Affiliation No. 531917 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; School No. 41917</i> */}
                    {/* <h1 className="text-6xl">B. S. Senior Secondary School</h1> */}
                </div>
            </div>
        </header>

    )
}