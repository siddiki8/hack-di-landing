import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-deepgreen border-t border-deepgreen-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/hackdilogo.png" alt="Hack DI Logo" width={50} height={50} className="mr-2" />
              <span className="text-xl font-bold tracking-tighter">
                <span className="text-gold">hack</span>
                <span className="text-white">DI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              A 2-day hackathon where innovation meets community. Build, learn, and connect with fellow tech
              enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/hackdarulislah"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/winners" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Winners
                </Link>
              </li>
              <li>
                <Link href="#register" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/sponsor-info" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Sponsor Info
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Darul Islah Community Center</li>
              <li className="text-gray-400 text-sm">320 Fabry Terrace</li>
              <li className="text-gray-400 text-sm">Teaneck, NJ</li>
              <li>
                <Link
                  href="mailto:hackathon@darulislah.org"
                  className="text-gold hover:text-gold-300 transition-colors text-sm"
                >
                  hackathon@darulislah.org
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-deepgreen-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Hack DI. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">Designed with 💛 by the Hack DI Team</p>
        </div>
      </div>
    </footer>
  )
}
