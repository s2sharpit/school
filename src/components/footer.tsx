import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import navigation from "@/data/navigation"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white">
                <Image src="/school_logo.png?height=100&width=100" alt="School Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight tracking-wide">B. S. Sr. Sec. School</p>
                <p className="text-xs text-gray-400">Salempur Khadar, Yamunanagar</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering minds, building futures. Excellence in education since 1985.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {navigation.slice(0,-1).map(item => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/primary" className="text-gray-400 hover:text-white">
                  Primary Education
                </Link>
              </li>
              <li>
                <Link href="/academics/secondary" className="text-gray-400 hover:text-white">
                  Secondary Education
                </Link>
              </li>
              <li>
                <Link href="/academics/senior-secondary" className="text-gray-400 hover:text-white">
                  Senior Secondary
                </Link>
              </li>
              <li>
                <Link href="/academics/extracurricular" className="text-gray-400 hover:text-white">
                  Extracurricular Activities
                </Link>
              </li>
              <li>
                <Link href="/academics/sports" className="text-gray-400 hover:text-white">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>B. S. Sr. Sec. School, Salempur Khadar, Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:info@bsschool.edu" className="hover:text-white transition-colors">
                  info@bsschool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} B. S. Sr. Sec. School. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

