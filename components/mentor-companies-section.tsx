"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Set this to false to show the mentor companies
const BLUR_MENTOR_COMPANIES = false

export function MentorCompaniesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State to control blur effect (initialized from the constant)
  const [isBlurred, setIsBlurred] = useState(BLUR_MENTOR_COMPANIES)

  // Array of mentor companies with logos
  const mentorCompanies = [
    {
      name: "Goldman Sachs",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GS-saHlJmxn9iUnC4kkAqFbbzit9lHS0J.png",
    },
    {
      name: "Google",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google.jpg-o6r9CSfxFGXs5KzybVyPF3xmI2Q4Ne.jpeg",
    },
    {
      name: "McKinsey & Company",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mckinsey.jpg-sgs0agogc5r3mjgSBzOWWzyl4YrmfC.jpeg",
    },
    {
      name: "Pfizer",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pfizer-Logo-qZV904ONvE9mXGtXlQIFqoA2QSEfJC.png",
    },
    {
      name: "Scholastic",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scholastic-Logo-2008-xAWESzJJBBnZjD1TprcI28B3LU1SmC.png",
    },
    {
      name: "J.P. Morgan",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JP-Morgan-Chase-Emblem-sKIHIhVBf1gY0yAEKizKxj48s3uorn.png",
    },
    {
      name: "UPS",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ups-MiYSqeIXvThwvY8rIEKIONiECNqh56.png",
    },
    {
      name: "IBM",
      logo: "/images/ibm-logo.svg",
    },
    {
      name: "Maxentric Technologies",
      logo: "/images/maxentric-logo.png",
    },
    {
      name: "EY",
      logo: "/images/ey-logo.png",
    },
  ]

  return (
    <section id="mentor-companies" className="py-24 bg-deepgreen relative">
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
            Mentor <span className="text-gold">Companies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our mentors come from these leading technology companies to guide you through your hackathon journey.
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
              {mentorCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain filter brightness-90 hover:brightness-100 transition-all max-h-16"
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
                <span className="text-gold">Mentors</span> to be announced soon
              </p>
              <p className="text-sm text-gray-300 mt-2 max-w-xs text-center">
                We're assembling an incredible team of industry experts to mentor you during the hackathon!
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
            Interested in becoming a mentor? Share your expertise and help guide the next generation of innovators.
          </p>

          <div className="flex justify-center">
            <Link href="/mentor-signup">
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 shadow-[0_0_5px_rgba(225,186,67,0.2)] hover:shadow-[0_0_10px_rgba(225,186,67,0.4)]"
              >
                Sign up to be a Mentor
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-400">
            For more information, contact us at{" "}
            <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
              hackathon@darulislah.org
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
