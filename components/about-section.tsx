"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Users,
  Lightbulb,
  Trophy,
  Network,
  FileText,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Building2,
  User,
  Shield,
  DollarSign,
} from "lucide-react"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: "Code",
      description: "Build innovative solutions using cutting-edge technologies.",
    },
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: "Collaborate",
      description: "Work with talented developers, designers, and entrepreneurs.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-gold" />,
      title: "Create",
      description: "Turn your ideas into reality with mentorship and resources.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-gold" />,
      title: "Compete",
      description: "Win prizes and recognition for your innovative solutions.",
    },
  ]

  const hackathonBenefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Prize Pool",
      description: "$3,000",
      highlight: true,
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Mentor Networking",
      description: "Connect with industry professionals",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Resume Support",
      description: "Get feedback on your resume",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Technical Instruction",
      description: "Learn from expert-led workshops",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Portfolio Project",
      description: "Build something for your resume",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Swag",
      description: "Take home exclusive hackathon merchandise",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Corporate Sponsors",
      description: "Backed by leading tech companies",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Recruitment Opportunities",
      description: "Get noticed by potential employers",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Sisters Accommodations",
      description: "Women mentors, chaperones, and sister-only spaces",
    },
  ]

  return (
    <section id="about" className="py-24 bg-deepgreen relative">
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
            About <span className="text-gold">hack_DI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hack DI is a 24-hour hackathon at Darul Islah where participants collaborate to build innovative solutions
            to real-world problems. Whether you're a seasoned developer or just starting out, Hack DI provides the
            perfect platform to learn, create, and connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-deepgreen-50/30 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100 hover:border-gold/50 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Benefits Section */}
        <div ref={featuresRef} className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              What You'll <span className="text-gold">Get</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hack DI offers more than just a coding competition. Here's what you can expect:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-deepgreen-50/20 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100 hover:border-gold/50 transition-colors flex items-start"
              >
                <div className={`mr-4 p-3 rounded-full ${benefit.highlight ? "bg-gold/20" : "bg-deepgreen-100/30"}`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                  <p className={`${benefit.highlight ? "text-gold text-2xl font-bold" : "text-gray-400"}`}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 bg-deepgreen-50/10 backdrop-blur-sm p-4 rounded-lg border border-deepgreen-100 flex items-center"
          >
            <Shield className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
            <p className="text-sm text-gray-400">
              <span className="font-medium">Your safety is our priority:</span> We provide paid security personnel
              overnight for all participants.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Join us for an unforgettable weekend of innovation, learning, and fun. No matter your skill level, there's a
            place for you at Hack DI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
