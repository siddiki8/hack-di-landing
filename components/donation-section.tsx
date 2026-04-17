"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DonationWidget } from "./donation-widget"
import { Heart } from "lucide-react"

export function DonationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="donate" className="py-24 bg-cream">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // donate
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight"
        >
          Support Hack DI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-forest/60 max-w-2xl mb-12"
        >
          Your donation helps us create an amazing hackathon experience for all participants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl"
        >
          <div className="border border-forest/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-coral" />
              <h3 className="text-lg font-bold text-forest">Make a Donation</h3>
            </div>
            <DonationWidget />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
