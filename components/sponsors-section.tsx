"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { EyeOff, ExternalLink } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const BLUR_SPONSORS = true

export function SponsorsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isBlurred, setIsBlurred] = useState(BLUR_SPONSORS)

  const sponsors = [
    { name: "Replit", logo: "/images/replit-logo.png" },
  ]

  return (
    <section id="sponsors" className="py-24 bg-cream">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // sponsors
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight"
        >
          Our Sponsors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-forest/60 max-w-2xl mb-12"
        >
          Hack DI is made possible by the generous support of our sponsors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="surface-shadow relative overflow-hidden border border-forest/10 bg-white/60 p-12"
        >
          <div className={cn("transition-all duration-500", isBlurred ? "blur-md select-none" : "")}>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    width={280}
                    height={140}
                    sizes="(max-width: 640px) 80vw, 280px"
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {isBlurred && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/90 z-10">
              <EyeOff className="h-10 w-10 text-forest/30 mb-4" />
              <p className="font-mono text-forest/70 text-sm text-center">
                <span className="text-coral">Sponsors</span> to be announced soon
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="text-forest/60 text-sm">
            Interested in sponsoring?{" "}
            <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline">
              hackathon@darulislah.org
            </a>
          </p>
          <Link
            href="/sponsor-info"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest border border-forest px-4 py-2 hover:border-coral hover:text-coral transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            Sponsorship Info
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
