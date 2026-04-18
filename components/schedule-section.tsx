"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const BLUR_SCHEDULE = true

export function ScheduleSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isBlurred, setIsBlurred] = useState(BLUR_SCHEDULE)

  const schedule = [
    {
      day: "Day 1 — September 12, 2026",
      events: [
        { time: "8:00 AM", title: "Registration & Check-in", tag: "logistics" },
        { time: "9:00 AM", title: "Opening Ceremony", tag: "featured" },
        { time: "9:30 AM", title: "Coding Begins", tag: "featured" },
        { time: "10:00 AM", title: "App Development Workshop", tag: "workshop" },
        { time: "12:00 PM", title: "Lunch", tag: "meal" },
        { time: "1:15 PM", title: "Dhuhr Prayer", tag: "prayer" },
        { time: "2:45 PM", title: "API Integration & LLMs Workshop", tag: "workshop" },
        { time: "4:30 PM", title: "Resume Workshop", tag: "workshop" },
        { time: "6:30 PM", title: "Asr Prayer", tag: "prayer" },
        { time: "7:00 PM", title: "Dinner", tag: "meal" },
        { time: "8:40 PM", title: "Maghrib Prayer", tag: "prayer" },
        { time: "10:30 PM", title: "Isha Prayer & Khatirah", tag: "prayer" },
        { time: "12:00 AM", title: "Midnight Games", tag: "activity" },
      ],
    },
    {
      day: "Day 2 — September 13, 2026",
      events: [
        { time: "4:30 AM", title: "Fajr Prayer", tag: "prayer" },
        { time: "7:00 AM", title: "Breakfast", tag: "meal" },
        { time: "9:00 AM", title: "Project Submission Deadline", tag: "featured" },
        { time: "9:00 AM – 12:00 PM", title: "Presentations & Judging", tag: "featured" },
        { time: "12:00 PM", title: "Awards & Closing Ceremony", tag: "featured" },
      ],
    },
  ]

  const tagColors: Record<string, string> = {
    prayer: "bg-forest text-cream",
    featured: "bg-coral text-cream",
    workshop: "bg-terminal/20 text-forest",
    meal: "bg-forest/10 text-forest",
    logistics: "bg-forest/10 text-forest",
    activity: "bg-forest/10 text-forest",
  }

  return (
    <section id="schedule" className="py-24 bg-forest/5">
      <div ref={ref} className="container mx-auto px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
        >
          // schedule
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight"
        >
          Event Schedule
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-forest/60 max-w-2xl mb-12"
        >
          Here's what to expect during our action-packed 2-day hackathon.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="border border-forest/10 bg-cream relative overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-forest/10 bg-forest/5">
                <h3 className="font-mono text-sm font-semibold text-forest">{day.day}</h3>
              </div>

              <div className={cn("transition-all duration-500", isBlurred ? "blur-md select-none" : "")}>
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex items-start gap-4 px-6 py-3 border-b border-forest/5 last:border-0 hover:bg-forest/5 transition-colors"
                  >
                    <div className="flex items-center gap-1 text-forest/40 min-w-[80px] mt-0.5 flex-shrink-0">
                      <Clock className="h-3 w-3 flex-shrink-0" />
                      <span className="font-mono text-[10px]">{event.time}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2">
                      <p className="text-sm text-forest font-medium">{event.title}</p>
                      <span className={cn("font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 flex-shrink-0", tagColors[event.tag])}>
                        {event.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {isBlurred && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/90 z-10">
                  <EyeOff className="h-10 w-10 text-forest/30 mb-4" />
                  <p className="font-mono text-forest/70 text-sm text-center">
                    <span className="text-coral">Schedule</span> to be announced soon
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
