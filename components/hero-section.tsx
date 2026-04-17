"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Function to scroll to the about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] z-0" />

      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deepgreen via-deepgreen-100/20 to-deepgreen animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-tl from-gold/10 via-transparent to-deepgreen/80" />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-deepgreen via-deepgreen/70 to-transparent z-[1]" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-mono">
              <span className="block text-gold">&lt;hack_DI/&gt;</span>
              <span className="block">Learn. Build. Innovate.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-lg mt-6"
          >
            Darul Islah's first-ever hackathon was a huge success! Over 30 participants built amazing projects for the
            Muslim community in just 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            {/* View Winners button */}
            <div className="relative inline-block">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 rounded-lg bg-gold/30 blur-md animate-breathing-glow"></div>

              <Link href="/winners">
                <Button
                  size="lg"
                  className={cn(
                    "relative bg-gold hover:bg-gold-600 text-black font-medium",
                    "shadow-[0_0_10px_rgba(225,186,67,0.3)] hover:shadow-[0_0_20px_rgba(225,186,67,0.5)]",
                    "transition-all duration-300 ease-in-out",
                  )}
                >
                  View Winners <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-deepgreen-200 hover:bg-deepgreen-100 bg-transparent"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-gray-400 mt-6"
          >
            June 28-29, 2025 • Darul Islah Community Center • ✅ Completed Successfully
          </motion.div>
        </div>
      </div>
    </section>
  )
}
