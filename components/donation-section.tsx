"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DonationWidget } from "./donation-widget"
import { Heart } from "lucide-react"

export function DonationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="donate" className="py-24 bg-deepgreen relative">
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
            Support <span className="text-gold">Hack DI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your donation helps us create an amazing hackathon experience for all participants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-deepgreen-50/10 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-gold mr-2" />
              <h3 className="text-xl font-bold">Make a Donation</h3>
            </div>
            <DonationWidget />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
