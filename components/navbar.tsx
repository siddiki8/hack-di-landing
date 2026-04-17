"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-deepgreen/80 backdrop-blur-md border-b border-deepgreen-100" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/hackdilogo.png" alt="Hack DI Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold tracking-tighter">
                <span className="text-gold">hack</span>
                <span className="text-white">DI</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-gray-300 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-300 hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/winners" className="text-gray-300 hover:text-white transition-colors">
                  Winners
                </Link>
              </li>
              <li>
                <Link href="/sponsor-info" className="text-gray-300 hover:text-white transition-colors">
                  Sponsor Info
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <div className="relative inline-block">
              {/* Subtle breathing glow for navbar button */}
              <div className="absolute -inset-0.5 rounded-lg bg-gold/20 blur-sm animate-breathing-glow opacity-75"></div>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="relative border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)] bg-transparent"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-deepgreen/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#sponsors"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="#schedule"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/winners"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Winners
            </Link>
            <Link
              href="/sponsor-info"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Sponsor Info
            </Link>
            <div className="pt-2">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-lg bg-gold/20 blur-sm animate-breathing-glow opacity-75"></div>
                <Link href="/register" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full relative border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
