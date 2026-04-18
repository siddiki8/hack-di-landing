"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const BLUR_MENTOR_COMPANIES = false

export function MentorCompaniesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isBlurred, setIsBlurred] = useState(BLUR_MENTOR_COMPANIES)

  const mentorCompanies = [
    { name: "Goldman Sachs", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GS-saHlJmxn9iUnC4kkAqFbbzit9lHS0J.png" },
    { name: "Google", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google.jpg-o6r9CSfxFGXs5KzybVyPF3xmI2Q4Ne.jpeg" },
    { name: "McKinsey & Company", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mckinsey.jpg-sgs0agogc5r3mjgSBzOWWzyl4YrmfC.jpeg" },
    { name: "Pfizer", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pfizer-Logo-qZV904ONvE9mXGtXlQIFqoA2QSEfJC.png" },
    { name: "Scholastic", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scholastic-Logo-2008-xAWESzJJBBnZjD1TprcI28B3LU1SmC.png" },
    { name: "J.P. Morgan", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JP-Morgan-Chase-Emblem-sKIHIhVBf1gY0yAEKizKxj48s3uorn.png" },
    { name: "UPS", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ups-MiYSqeIXvThwvY8rIEKIONiECNqh56.png" },
    { name: "IBM", logo: "/images/ibm-logo.svg" },
    { name: "Maxentric Technologies", logo: "/images/maxentric-logo.png" },
    { name: "EY", logo: "/images/ey-logo.png" },
  ]

  return (
    <section id="mentor-companies" className="py-24 bg-cream">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // mentors
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight"
        >
          Mentor Companies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-forest/60 max-w-2xl mb-12"
        >
          Our mentors come from these leading technology companies to guide you through your hackathon journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-forest/10 p-8 relative overflow-hidden"
        >
          <div className={cn("transition-all duration-500", isBlurred ? "blur-md select-none" : "")}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
              {mentorCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={140}
                    height={70}
                    sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 140px"
                    loading="lazy"
                    className="object-contain max-h-14 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {isBlurred && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/90 z-10">
              <EyeOff className="h-10 w-10 text-forest/30 mb-4" />
              <p className="font-mono text-forest text-sm text-center">
                <span className="text-coral">Mentors</span> to be announced soon
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
            Interested in becoming a mentor?{" "}
            <Link href="/mentor-signup" className="text-coral hover:underline">
              Sign up here
            </Link>
          </p>
          <p className="text-forest/60 text-sm">
            Contact:{" "}
            <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline">
              hackathon@darulislah.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
