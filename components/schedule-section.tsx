"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Clock, EyeOff } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Set this to false to show the schedule
const BLUR_SCHEDULE = false

export function ScheduleSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State to control blur effect (initialized from the constant)
  const [isBlurred, setIsBlurred] = useState(BLUR_SCHEDULE)

  const schedule = [
    {
      day: "Day 1 - June 28, 2025",
      events: [
        { time: "8:00 AM - 9:00 AM", title: "Registration & Check-in", description: "Get your badge and swag" },
        { time: "9:00 AM - 9:15 AM", title: "Opening Ceremony", description: "Welcome address and kickoff" },
        { time: "9:30 AM", title: "Coding Begins", description: "Start building your projects" },
        {
          time: "10:00 AM - 11:00 AM",
          title: "App Development Workshop",
          description: "Learn essential app development skills",
        },
        { time: "12:00 PM - 1:00 PM", title: "Lunch", description: "Refuel and network" },
        { time: "1:15 PM - 2:45 PM", title: "Dhuhr Prayer", description: "Prayer break" },
        {
          time: "2:45 PM - 3:30 PM",
          title: "API Integration & LLMs Workshop",
          description: "Learn to work with APIs and large language models",
        },
        { time: "4:30 PM - 5:15 PM", title: "Resume Workshop", description: "Optimize your resume for tech careers" },
        { time: "6:30 PM", title: "Asr Prayer", description: "Prayer break" },
        { time: "7:00 PM", title: "Dinner", description: "Evening meal" },
        { time: "8:40 PM", title: "Maghrib Prayer", description: "Prayer break" },
        { time: "10:30 PM", title: "Isha Prayer & Khatirah", description: "Prayer and short talk" },
        { time: "12:00 AM", title: "Midnight Games", description: "Fun activities to keep the energy going" },
      ],
    },
    {
      day: "Day 2 - June 29, 2025",
      events: [
        { time: "4:30 AM", title: "Fajr Prayer", description: "Morning prayer" },
        { time: "7:00 AM", title: "Breakfast", description: "Start your day right" },
        { time: "9:00 AM", title: "Project Submission Deadline", description: "Hacking ends, submit your projects" },
        {
          time: "9:00 AM - 12:00 PM",
          title: "Presentations & Judging",
          description: "Present your projects to the judges",
        },
        { time: "12:00 PM", title: "Awards & Closing Ceremony", description: "Winners announced and final remarks" },
      ],
    },
  ]

  return (
    <section id="schedule" className="py-24 bg-deepgreen-50 relative">
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
            Event <span className="text-gold">Schedule</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's what to expect during our action-packed 2-day hackathon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="bg-deepgreen/50 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100 relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-gold mr-2" />
                <h3 className="text-xl font-bold">{day.day}</h3>
              </div>

              {/* Blurred content */}
              <div className={cn("space-y-4 transition-all duration-500", isBlurred ? "blur-md select-none" : "")}>
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={cn(
                      "border-l-2 pl-4 py-2 hover:border-gold transition-colors",
                      event.title.includes("Prayer") ? "border-gold/70" : "border-deepgreen-100",
                    )}
                  >
                    <div className="flex items-center text-sm text-gray-400 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.description}</p>
                  </div>
                ))}
              </div>

              {/* Overlay message when blurred */}
              {isBlurred && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-deepgreen/60 backdrop-blur-sm z-10">
                  <EyeOff className="h-12 w-12 text-gold mb-4 opacity-80" />
                  <p className="text-xl font-mono text-center text-white">
                    <span className="text-gold">Schedule</span> to be announced soon
                  </p>
                  <p className="text-sm text-gray-300 mt-2 max-w-xs text-center">
                    We're finalizing the details for an amazing hackathon experience!
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
