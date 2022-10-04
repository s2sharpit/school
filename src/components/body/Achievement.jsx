export default function Achievement() {
    return (
        <div className="">
            <h1 className="text-3xl font-semibold text-center">Achievements</h1>
            {/* <div class="lg:absolute lg:left-8 lg:top-40 p-5 m-5 mt-10 lg:mt-4 text-justify lg:text-white  max-w-sm border-solid bg-black/10 border-black lg:border-white rounded-3xl border-[1px]">
                <h2 class="text-xl font-bold text-center">Our Vision & Mission</h2><br class="" />
                <h3 class="font-semibold text-lg">Vision</h3>
                <p>Collaboration and trust empower our school community, allowing all students to achieve their full potential.
                </p><br />
                <h3 class="font-semibold text-lg">Mission</h3>
                <p>We strive to make children confident and creative builders of their future. We stress the all-round
                    development of each child like spiritual, moral, intellectual, social, emotional and physical.</p>
            </div> */}
            <iframe class="h-[60vw] md:h-[30vw] p-10 w-full md:w-1/2" src="https://www.youtube.com/embed/8TVIhQcTCv0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div class="md:flex my-10 justify-between m-5 md:m-10 md:space-x-10">
                <img src="img/Result.jpeg" alt="" class="w-fit my-10 lg:m-0 md:w-1/2" />
                <img class="w-fit my-10 lg:m-0 md:w-1/2" src="./img/AdmissionBroucher.png" alt="Admission Broucher" />
            </div>
        </div>
    )
}