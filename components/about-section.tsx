"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Network,
  FileText,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Building2,
  User,
  Users,
  Shield,
  DollarSign,
} from "lucide-react"

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    { num: "01", title: "Code", description: "Build innovative solutions using cutting-edge technologies." },
    { num: "02", title: "Collaborate", description: "Work with talented developers, designers, and entrepreneurs." },
    { num: "03", title: "Create", description: "Turn your ideas into reality with mentorship and resources." },
    { num: "04", title: "Compete", description: "Win prizes and recognition for your innovative solutions." },
  ]

  const hackathonBenefits = [
    { icon: <DollarSign className="h-5 w-5" />, title: "Prize Pool", description: "$3,000", highlight: true },
    { icon: <Network className="h-5 w-5" />, title: "Mentor Networking", description: "Connect with industry professionals" },
    { icon: <FileText className="h-5 w-5" />, title: "Resume Support", description: "Get feedback on your resume" },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Technical Instruction", description: "Learn from expert-led workshops" },
    { icon: <Briefcase className="h-5 w-5" />, title: "Portfolio Project", description: "Build something for your resume" },
    { icon: <ShoppingBag className="h-5 w-5" />, title: "Swag", description: "Take home exclusive hackathon merchandise" },
    { icon: <Building2 className="h-5 w-5" />, title: "Corporate Sponsors", description: "Backed by leading tech companies" },
    { icon: <User className="h-5 w-5" />, title: "Recruitment Opportunities", description: "Get noticed by potential employers" },
    { icon: <Users className="h-5 w-5" />, title: "Sisters Accommodations", description: "Women mentors, chaperones, and sister-only spaces" },
  ]

  return (
    <section id="about" className="bg-cream">
      {/* Dark forest mission band */}
      <div ref={ref} className="bg-forest py-24">
        <div className="container mx-auto px-5 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
          >
            // about
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-cream mb-6 tracking-tight"
          >
            About hack_DI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-cream/70 max-w-2xl text-lg"
          >
            Hack DI is a 24-hour hackathon at Darul Islah where participants collaborate to build innovative solutions
            to real-world problems. Whether you're a seasoned developer or just starting out, Hack DI provides the
            perfect platform to learn, create, and connect.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 border border-cream/10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-forest-600 p-8 border border-cream/10 hover:bg-forest-500 transition-colors"
              >
                <p className="font-mono text-coral text-sm mb-4">{feature.num}</p>
                <h3 className="text-cream text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-cream/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits grid */}
      <div ref={featuresRef} className="py-24">
        <div className="container mx-auto px-5 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4"
          >
            // benefits
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-forest mb-12 tracking-tight"
          >
            What You'll Get
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathonBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 border border-forest/10 hover:border-forest/30 hover:bg-forest/5 transition-colors"
              >
                <div className={`p-2 flex-shrink-0 ${benefit.highlight ? "bg-coral/10 text-coral" : "bg-forest/10 text-forest"}`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-forest mb-1">{benefit.title}</h3>
                  <p className={benefit.highlight ? "text-coral text-xl font-bold font-mono" : "text-forest/60 text-sm"}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-3 p-4 border border-forest/10 bg-forest/5"
          >
            <Shield className="h-4 w-4 text-forest flex-shrink-0" />
            <p className="text-sm text-forest/70">
              <span className="font-semibold text-forest">Your safety is our priority:</span> We provide paid security
              personnel overnight for all participants.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
