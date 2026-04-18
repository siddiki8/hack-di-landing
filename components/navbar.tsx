"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/mentor-signup", label: "Mentor" },
  { href: "/sponsor-info", label: "Sponsor" },
  { href: "/#faq", label: "FAQ" },
  { href: "/winners", label: "[2025 Recap]", highlight: true as const },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm border-forest/10"
          : "bg-cream border-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/hackdilogo.png"
              alt="Hack DI"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
            <span className="flex items-baseline font-mono">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                darul_islah
              </span>
              <span className="text-sm font-semibold text-coral">.hack()</span>
            </span>
          </Link>

        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-wider transition-colors",
                (link as { highlight?: boolean }).highlight
                  ? "text-coral hover:text-coral/70"
                  : "text-forest/80 hover:text-coral",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="inline-flex h-9 items-center bg-forest px-5 font-mono text-xs uppercase tracking-wider text-cream transition-colors duration-300 hover:bg-coral"
          >
            Register Now
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/register"
            className="inline-flex h-9 items-center bg-forest px-4 font-mono text-[11px] uppercase tracking-wider text-cream transition-colors hover:bg-coral"
          >
            Register
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-forest"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-forest/10 bg-cream md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 font-mono text-xs uppercase tracking-wider hover:text-coral active:text-coral",
                    (link as { highlight?: boolean }).highlight ? "text-coral" : "text-forest/80",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
