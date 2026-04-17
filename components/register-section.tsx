"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
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
            Hack DI 2025 Complete!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-cream/10 p-10"
          >
            <h3 className="text-xl font-bold text-cream mb-4">Alhamdulillah for a Successful Event!</h3>
            <p className="text-cream/70 mb-8 max-w-xl">
              Over 30 participants from multiple states came together to build innovative solutions for the Muslim
              community. Check out the amazing winning projects and stay connected for future hackathons!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/winners"
                className="inline-flex items-center justify-center h-11 bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral/80"
              >
                View Winners <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <p className="text-cream/40 text-sm mt-8">
              Interested in future events?{" "}
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
