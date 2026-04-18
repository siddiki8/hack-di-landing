"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

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
            Registration Opening Soon
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-cream/10 p-10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-coral" />
              <p className="font-mono text-xs uppercase tracking-wider text-coral">// status: pending</p>
            </div>

            <h3 className="text-xl font-bold text-cream mb-4">September 12–13, 2026 · Teaneck, NJ</h3>
            <p className="text-cream/70 mb-8 max-w-xl">
              We're finalizing the details for Hack DI 2026. Registration, team formation, and mentor applications
              will go live soon — drop us a line or follow along on Instagram to catch the launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/winners"
                className="group inline-flex items-center justify-center h-11 bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral/80"
              >
                Relive 2025 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:hackathon@darulislah.org"
                className="inline-flex items-center justify-center h-11 border border-cream/30 px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:border-coral hover:text-coral"
              >
                Get Notified
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
