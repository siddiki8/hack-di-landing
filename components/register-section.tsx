"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function RegisterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="register" className="py-24 bg-deepgreen-50 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-deepgreen/80 via-deepgreen-50 to-deepgreen/80" />

      <div ref={ref} className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            Hack DI 2025 <span className="text-gold">Complete!</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thank you to everyone who participated in our inaugural hackathon! Stay tuned for future events.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-deepgreen/50 backdrop-blur-sm p-12 rounded-lg border border-deepgreen-100 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Alhamdulillah for a Successful Event!</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Over 30 participants from multiple states came together to build innovative solutions for the Muslim
              community. Check out the amazing winning projects and stay connected for future hackathons!
            </p>

            {/* View Winners button */}
            <div className="relative inline-block">
              {/* Animated glow effect */}
              <div className="absolute -inset-1 rounded-lg bg-gold/30 blur-md animate-breathing-glow"></div>

              <Link href="/winners">
                <Button
                  size="lg"
                  className={cn(
                    "relative bg-gold hover:bg-gold-600 text-black font-medium text-lg px-8 py-6 h-auto",
                    "shadow-[0_0_10px_rgba(225,186,67,0.3)] hover:shadow-[0_0_20px_rgba(225,186,67,0.5)]",
                    "transition-all duration-300 ease-in-out",
                  )}
                >
                  View Winners <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <p className="text-gray-400 mt-6">
              Interested in future events? Contact us at{" "}
              <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
                hackathon@darulislah.org
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
