"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
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
      answer: "Yes, there is a fee of $10.00 so that you may reserve your spot.",
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
    <section id="faq" className="py-24 bg-cream">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // faq
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-forest/60 max-w-2xl mb-12"
        >
          Everything you need to know about Hack DI.
        </motion.p>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-forest/10 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-5 flex justify-between items-start gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-coral mt-0.5 flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-forest group-hover:text-coral transition-colors">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                ) : (
                  <Plus className="h-4 w-4 text-forest/40 group-hover:text-coral flex-shrink-0 mt-0.5 transition-colors" />
                )}
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pb-5 pl-10"
                >
                  <p className="text-forest/60">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
