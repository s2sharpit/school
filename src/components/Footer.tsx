import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-container-color border-t border-t-border-color/10">
            <div className="flex flex-wrap justify-center">
                <figure className="hidden sm:block max-w-60 p-10">
                    <Image src="/img/Logo.png" alt="Logo" width={400} height={400} className="w-full" />
                    <figcaption className="font-semibold text-center">B. S. Senior Secondary School</figcaption>
                </figure>
                <div className="max-w-xs p-10">
                    <h1 className="font-bold md:font-semibold text-center md:text-left text-xl md:text-3xl ">Get In Touch</h1>
                    <br />
                    <h2 className="font-semibold text-lg">Address</h2>
                    <p>Near Salempur Khadar, Darpur Road, Khanpura, Haryana 135103</p><br />
                    <h2 className="font-semibold text-lg">Phone No</h2>
                    <p>+91-94660-69119, 89014-37877</p><br />
                    <h2 className="font-semibold text-lg">Email</h2>
                    <p>bsmschoolsalempur@gmail.com</p>
                </div>
                {/* <iframe className="hidden md:block max-w-lg max-h-96 p-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.393087708677!2d77.37792161463457!3d30.282869214225748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1d555c43260d%3A0x126c1c35443be638!2sB.S.Senior%20Secondary%20School%2C%20Salempur%20Khadar!5e0!3m2!1sen!2sin!4v1598711616585!5m2!1sen!2sin"
            frameBorder="0" style="border:0;width: 40rem; min-height: 20rem;" allowFullScreen="" aria-hidden="false"
            tabIndex="0"></iframe> */}
            </div>
            <hr className="hidden md:block border-border-color/10 border-t-2 mx-10" />
            <div
                className="md:flex text-center md:text-sm justify-center md:justify-between m-2 md:px-10 space-y-5 md:space-y-0">
                <div className="md:order-2 md:flex space-x-3">
                    Designed by &nbsp;<Link href="https://s2sharpit.me" className="text-blue-700" target="_blank">@s2sharpit</Link>
                </div>
                <hr className="md:hidden border-border/10 m-3 border-t-2" />
                <div className="sm:flex justify-center text-sm md:order-1 space-x-3">
                    <span className="">Copyright © 2022</span>
                    <span className="order-2">All right reserved.</span>
                    <div className="order-1">Sewa Bharti Shiksha Samiti.</div>

                </div>
            </div>
        </footer>
    )
}