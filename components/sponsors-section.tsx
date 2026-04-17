"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { EyeOff, ExternalLink } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Set this to true to blur the sponsors, false to show them
const BLUR_SPONSORS = false

export function SponsorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State to control blur effect (initialized from the constant)
  const [isBlurred, setIsBlurred] = useState(BLUR_SPONSORS)

  // Simple array of sponsor logos
  const sponsors = [
    {
      name: "Replit",
      logo: "/images/replit-logo.png",
    },
  ]

  return (
    <section id="sponsors" className="py-24 bg-deepgreen relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-deepgreen/80 via-deepgreen to-deepgreen/80" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Our <span className="text-gold">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hack DI is made possible by the generous support of our sponsors.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-deepgreen-50/10 backdrop-blur-sm p-8 rounded-lg border border-deepgreen-100 relative overflow-hidden"
        >
          {/* Blurred content */}
          <div className={cn("transition-all duration-500", isBlurred ? "blur-md select-none" : "")}>
            <div className="flex justify-center items-center">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={300}
                    height={150}
                    className="object-contain filter brightness-100 hover:brightness-110 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Overlay message when blurred */}
          {isBlurred && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-deepgreen/60 backdrop-blur-sm z-10">
              <EyeOff className="h-12 w-12 text-gold mb-4 opacity-80" />
              <p className="text-xl font-mono text-center text-white">
                <span className="text-gold">Sponsors</span> to be announced soon
              </p>
              <p className="text-sm text-gray-300 mt-2 max-w-xs text-center">
                We're partnering with amazing companies to bring you an unforgettable hackathon experience!
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16 space-y-6"
        >
          <p className="text-lg text-gray-400">
            Interested in sponsoring Hack DI? Contact us at{" "}
            <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
              hackathon@darulislah.org
            </a>
          </p>

          <div className="flex justify-center">
            <Link href="/sponsor-info">
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)] flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Sponsorship Information
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
