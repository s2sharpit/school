import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import navigation from "@/data/navigation";

const socialLinks = [
  // { icon: Facebook, href: "#", label: "Facebook" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const programs = [
  { name: "Primary Education", href: "/academics/primary" },
  { name: "Secondary Education", href: "/academics/secondary" },
  { name: "Senior Secondary", href: "/academics/senior-secondary" },
  { name: "Extracurricular Activities", href: "/academics/extracurricular" },
  { name: "Sports", href: "/academics/sports" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
            <figure className="grid place-items-center w-fit">
              <div className="relative h-56 w-56">

                <Image src="/school_logo.png" alt="School Logo" fill className="object-cover" />
              </div>
                <figcaption>
                <p className="font-bold text-lg leading-tight tracking-wide">B. S. Sr. Sec. School</p>
                <p className="text-xs text-gray-400">Salempur Khadar, Yamunanagar</p>

                </figcaption>
            </figure>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.slice(0,-1).map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-gray-400 hover:text-white">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-8 w-8 mt-0.5" />
                <span>B. S. Sr. Sec. School, Salempur KhadarKhadar, Darpur Road, Haryana 135103, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+91 89014 37877</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <a href="mailto:bsmschoolsalempur@gmail.com" className="hover:text-white transition-colors">
                  bsmschoolsalempur@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-400 text-sm border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p >
            &copy; {new Date().getFullYear()} B. S. Sr. Sec. School. All rights reserved.
          </p>
          <div>
            <span>Developed by </span>
            <Link href="https://s2sharpit.tech" className="hover:text-white transition-colors">
              @s2sharpit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
