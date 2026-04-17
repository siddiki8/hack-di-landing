"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-cream overflow-hidden pt-16">
      {/* Floating hex/code ticker background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none select-none font-mono text-[10px] leading-6 text-forest break-all px-4">
        {Array.from({ length: 300 }).map((_, i) => (
          <span key={i}>{["0x1a3d", "ff4d3b", "hack()", "sudo ", "bash$ ", "def  ", "func ", "true ", "null ", "0xf5f"][i % 10]}{" "}</span>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-forest/20 bg-white/60 backdrop-blur-sm mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
              <div className="w-3 h-3 rounded-full bg-coral/60" />
              <div className="w-3 h-3 rounded-full bg-forest/30" />
              <div className="w-3 h-3 rounded-full bg-forest/20" />
              <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">bash — 80×24</span>
            </div>
            <div className="px-5 py-5 font-mono text-sm space-y-1">
              <p className="text-forest/50">$ ./hack-di --init 2025</p>
              <p className="text-terminal">✓ Participants loaded: <span className="text-forest">30+</span></p>
              <p className="text-terminal">✓ Prize pool initialized: <span className="text-forest">$3,000</span></p>
              <p className="text-terminal">✓ Mentors connected: <span className="text-forest">10+ orgs</span></p>
              <p className="text-terminal">✓ Duration: <span className="text-forest">24 hours</span></p>
              <p className="text-coral mt-2">Event completed successfully. <span className="animate-terminal-blink">▊</span></p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-4xl md:text-6xl font-bold tracking-tight text-forest mb-6"
          >
            Learn.{" "}
            <span className="text-coral">Build.</span>{" "}
            Innovate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-forest/70 text-lg max-w-xl mb-8"
          >
            Darul Islah's first-ever hackathon was a huge success. Over 30 participants built amazing projects for
            the Muslim community in just 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/winners"
              className="inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral"
            >
              View Winners <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center h-11 border border-forest px-6 font-mono text-xs uppercase tracking-wider text-forest transition-colors hover:border-coral hover:text-coral"
            >
              Learn More
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-mono text-xs text-forest/40 mt-8 tracking-wider"
          >
            // June 28–29, 2025 · Darul Islah Community Center · Completed Successfully
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-8 border-t border-forest/10 pt-8"
        >
          {[
            { value: "24h", label: "Duration" },
            { value: "$3k", label: "Prize Pool" },
            { value: "30+", label: "Participants" },
            { value: "10+", label: "Mentor Orgs" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-bold text-forest">{stat.value}</p>
              <p className="font-mono text-xs uppercase tracking-wider text-forest/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
