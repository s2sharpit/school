import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-t-border-color/10 bg-[url(../../public/img/schoolPhoto1.jpg)] bg-fixed bg-cover bg-center text-white "
    >
      <div className="bg-black/80">
        <div className="flex justify-center md:justify-between lg:justify-center gap-20 md:gap-12 xl:gap-32 px-8 md:px-12 lg:px-16 py-8">
          <figure className="hidden sm:block max-w-60 self-center">
            <Image
              src="/img/school_logo.png"
              alt="Logo"
              width={180}
              height={180}
              className="w-full"
            />
            <figcaption className="font-semibold text-center">
              B. S. Senior Secondary School
            </figcaption>
          </figure>
          <div className="max-w-xs">
            <h1 className="font-bold md:font-semibold text-center md:text-left text-xl md:text-3xl ">
              Get In Touch
            </h1>
            <br />
            <h2 className="font-semibold text-lg">Address</h2>
            <p>
              Near Salempur Khadar, Darpur
              <br />
              Road, Khanpura, Haryana 135103
            </p>
            <br />
            <h2 className="font-semibold text-lg">Phone No</h2>
            <p>89014-37877, 96719-83678</p>
            <br />
            <h2 className="font-semibold text-lg">Email</h2>
            <p>bsmschoolsalempur@gmail.com</p>
          </div>
          <iframe
            className="hidden md:block w-1/3 max-w-lg max-h-96 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.393252121848!2d77.37588311743946!3d30.282864532095566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1d555c43260d%3A0x126c1c35443be638!2sB.S.Senior%20Secondary%20School%2C%20Salempur%20Khadar!5e0!3m2!1sen!2sin!4v1679299029221!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
        <hr className="max-md:hidden border-body-color border-t mx-10" />
        <div className="md:flex text-center md:text-sm justify-center md:justify-between p-2 md:px-10 space-y-5 md:space-y-0">
          <div className="md:order-2 md:flex space-x-3">
            Designed by &nbsp;
            <Link
              href="https://s2sharpit.tech"
              className="text-blue-500"
              target="_blank"
            >
              @s2sharpit
            </Link>
          </div>
          <hr className="md:hidden border-border/10 m-3 border-t-2" />
          <div className="sm:flex justify-center text-sm md:order-1 space-x-3">
            <span className="">Copyright © {new Date().getFullYear()}</span>
            <span className="order-2">All right reserved.</span>
            <div className="order-1">Sewa Bharti Shiksha Samiti.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
