"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const REGISTRATION_URL = "https://www.zeffy.com/en-US/ticketing/hackdi--2026"

export function RegisterSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="register" className="py-24 bg-forest">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // register
        </motion.p>

        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-cream mb-6 tracking-tight"
          >
            Get Your Ticket
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="surface-shadow-coral border border-cream/10 p-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-coral" />
              <p className="font-mono text-xs uppercase tracking-wider text-coral">// registration open</p>
            </div>

            <h3 className="text-xl font-bold text-cream mb-4">
              September 5–6, 2026 · 9 AM–12 PM · Teaneck, NJ
            </h3>
            <p className="text-cream/70 mb-8 max-w-xl">
              Spots are limited. Register now for Hack DI 2026 — $3,000 in prizes, industry mentors, workshops,
              and a full weekend of building at Darul Islah.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center h-11 bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral/80"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hackathon@darulislah.org"
                className="inline-flex items-center justify-center h-11 border border-cream/30 px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:border-coral hover:text-coral"
              >
                Questions?
              </a>
            </div>

            <p className="text-cream/40 text-sm mt-8">
              Questions?{" "}
              <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline">
                hackathon@darulislah.org
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
