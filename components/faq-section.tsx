"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FaqItem[] = [
    {
      question: "Who can participate in Hack DI?",
      answer:
        "Hack DI is open to everyone! Whether you're a student, professional, or hobbyist, as long as you're passionate about technology and innovation, you're welcome to join.",
    },
    {
      question: "Do I need to have a team to participate?",
      answer:
        "No, you don't need to have a team beforehand. We'll have a team formation session at the beginning of the event where you can meet other participants and form teams. You can also participate solo if you prefer.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "You should bring your laptop, charger, any hardware you plan to use for your project, and personal items like toiletries and a change of clothes if you plan to stay overnight. We'll provide food, drinks, and a comfortable hacking space.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, there is a fee of $10.00 so that you may reserve your spot.",
    },
    {
      question: "What kind of projects can I build?",
      answer:
        "You can build any type of project that interests you! We encourage innovative solutions to the challenge we will provide, but there are no strict limitations on the type of project you can create.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! We have exciting prizes for the winning teams in various categories. Details about the prizes will be announced during the opening ceremony.",
    },
    {
      question: "I'm new to coding. Can I still participate?",
      answer:
        "Hack DI is a learning experience for everyone. We'll have mentors available to help you, and we encourage participants of all skill levels to join and learn from each other.",
    },
    {
      question: "How will projects be judged?",
      answer:
        "Projects will be judged based on innovation, technical complexity, design, and potential impact. Our panel of judges includes industry experts and community leaders.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-deepgreen relative">
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
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything you need to know about Hack DI.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 bg-deepgreen-50/30 backdrop-blur-sm rounded-lg border border-deepgreen-100 hover:border-gold/50 transition-colors flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-400 transition-transform duration-200",
                    openIndex === index ? "transform rotate-180" : "",
                  )}
                />
              </button>

              {openIndex === index && (
                <div className="p-4 bg-deepgreen-50/20 rounded-b-lg border-x border-b border-deepgreen-100 mt-px">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
