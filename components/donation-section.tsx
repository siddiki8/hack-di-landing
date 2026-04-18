"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, ExternalLink } from "lucide-react"

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
          <div className="surface-shadow border border-forest/10 bg-white/60 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-coral" />
              <h3 className="text-lg font-bold text-forest">Make a Donation</h3>
            </div>
            <p className="text-forest/60 text-sm mb-6 max-w-xl">
              Donations are processed through Darul Islah, a 501(c)(3) nonprofit. All contributions are
              tax-deductible and directly fund the hackathon.
            </p>
            <a
              href="https://www.darulislah.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral"
            >
              Donate via darulislah.org <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
