"use client"

import { useRef, useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const TOKEN_POOL = [
  "0x1a3d", "ff4d3b", "hack()", "sudo ", "bash$ ", "def  ", "func ", "true ", "null ", "0xf5f",
  "// TODO", "const ", "=> {}", "return", "async ", "await ", "0x00f", "fetch(", "init()", "void ",
  "0xdead", "0xbeef", "yield ", "throw ", "catch ", "break ", "while(", "if ( ", "else ", "import",
  "class ", "new {}", "git++ ", "0xcafe", "0xbabe", "npm i ", "exec ", "LGTM  ", "ship ", "push  ",
]

const PAD = " "

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const baseRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const baseSpanRefs = useRef<Array<HTMLSpanElement | null>>([])
  const revealSpanRefs = useRef<Array<HTMLSpanElement | null>>([])
  const positionsRef = useRef<Array<{ x: number; y: number }>>([])
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile + reduced-motion on mount
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)")
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsMobile(mql.matches || prefersReduced.matches)
    const onChange = () => setIsMobile(mql.matches || prefersReduced.matches)
    mql.addEventListener("change", onChange)
    prefersReduced.addEventListener("change", onChange)
    return () => {
      mql.removeEventListener("change", onChange)
      prefersReduced.removeEventListener("change", onChange)
    }
  }, [])

  // Use fewer tokens on mobile (800 vs 3200)
  const bgTokens = useMemo(
    () => {
      const count = isMobile ? 800 : 3200
      return Array.from({ length: count }, (_, i) => TOKEN_POOL[(i * 7 + (i % 13)) % TOKEN_POOL.length])
    },
    [isMobile],
  )

  useEffect(() => {
    const hero = heroRef.current
    const base = baseRef.current
    const reveal = revealRef.current
    if (!hero || !base || !reveal) return

    // Skip interactive animation on mobile / reduced-motion
    if (isMobile) {
      reveal.style.display = "none"
      return
    }

    const measureHeight = () => {
      const rect = hero.getBoundingClientRect()
      const h = hero.offsetHeight
      base.style.height = `${h}px`
      reveal.style.height = `${h}px`
      positionsRef.current = revealSpanRefs.current.map((s) => {
        if (!s) return { x: -10000, y: -10000 }
        const r = s.getBoundingClientRect()
        return {
          x: r.left - rect.left + r.width / 2,
          y: r.top - rect.top + r.height / 2,
        }
      })
    }

    measureHeight()
    const measureTimer = window.setTimeout(measureHeight, 400)
    window.addEventListener("resize", measureHeight)

    let targetX = -600
    let targetY = -600
    let currentX = -600
    let currentY = -600
    let raf = 0
    const lastScramble: Record<number, number> = {}
    const SCRAMBLE_INTERVAL = 160 // ms — slower cycle
    const EASE = 0.07 // slower follow
    const RADIUS = 120
    const R2 = RADIUS * RADIUS

    const onMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    const onLeave = () => {
      targetX = -600
      targetY = -600
    }

    const tick = () => {
      currentX += (targetX - currentX) * EASE
      currentY += (targetY - currentY) * EASE
      reveal.style.setProperty("--mx", `${currentX}px`)
      reveal.style.setProperty("--my", `${currentY}px`)

      const positions = positionsRef.current
      const now = performance.now()
      for (let i = 0; i < positions.length; i++) {
        const p = positions[i]
        const dx = p.x - currentX
        const dy = p.y - currentY
        if (dx * dx + dy * dy < R2) {
          if ((lastScramble[i] || 0) + SCRAMBLE_INTERVAL < now) {
            const t = TOKEN_POOL[Math.floor(Math.random() * TOKEN_POOL.length)] + PAD
            const r = revealSpanRefs.current[i]
            const b = baseSpanRefs.current[i]
            if (r) r.textContent = t
            if (b) b.textContent = t
            lastScramble[i] = now
          }
        }
      }

      raf = requestAnimationFrame(tick)
    }

    hero.addEventListener("pointermove", onMove)
    hero.addEventListener("pointerleave", onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.clearTimeout(measureTimer)
      window.removeEventListener("resize", measureHeight)
      hero.removeEventListener("pointermove", onMove)
      hero.removeEventListener("pointerleave", onLeave)
      cancelAnimationFrame(raf)
    }
  }, [isMobile])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center bg-cream pt-16 overflow-hidden">
      {/* Base layer */}
      <div
        ref={baseRef}
        className="absolute top-0 left-0 w-full pointer-events-none select-none font-mono text-[11px] leading-5 text-forest opacity-[0.07] break-all px-3 py-3 overflow-hidden"
      >
        {bgTokens.map((t, i) => (
          <span
            key={i}
            ref={(el) => {
              baseSpanRefs.current[i] = el
            }}
          >
            {t}
            {PAD}
          </span>
        ))}
      </div>
      {/* Reveal layer */}
      <div
        ref={revealRef}
        className="absolute top-0 left-0 w-full pointer-events-none select-none font-mono text-[11px] leading-5 text-coral break-all px-3 py-3 overflow-hidden"
        style={{
          maskImage:
            "radial-gradient(220px circle at var(--mx, -600px) var(--my, -600px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0) 75%)",
          WebkitMaskImage:
            "radial-gradient(220px circle at var(--mx, -600px) var(--my, -600px), rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0) 75%)",
        }}
      >
        {bgTokens.map((t, i) => (
          <span
            key={i}
            ref={(el) => {
              revealSpanRefs.current[i] = el
            }}
          >
            {t}
            {PAD}
          </span>
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-forest/20 bg-white/70 backdrop-blur-sm mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
              <div className="w-3 h-3 rounded-full bg-coral/60" />
              <div className="w-3 h-3 rounded-full bg-forest/30" />
              <div className="w-3 h-3 rounded-full bg-forest/20" />
              <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">bash — 80×24</span>
            </div>
            <div className="px-5 py-5 font-mono text-sm space-y-1">
              <p className="text-forest/50">$ git checkout hack-di/2026</p>
              <p className="text-forest/40">Switched to branch 'hack-di/2026'</p>
              <p className="text-forest/50">$ npm run init -- --year=2026</p>
              <p className="text-terminal">✓ Restored state from <span className="text-forest">./.hackdi/2025.lock</span></p>
              <p className="text-terminal">  └─ 50+ devs shipped · $3k awarded · alhamdulillah</p>
              <p className="text-terminal">✓ Allocating resources...</p>
              <p className="text-forest/70">  ├─ prize_pool: <span className="text-coral">$???</span></p>
              <p className="text-forest/70">  ├─ duration: <span className="text-forest">24h</span></p>
              <p className="text-forest/70">  └─ start: <span className="text-forest">Sept 12–13, 2026</span></p>
              <p className="text-coral mt-2">[READY] Awaiting git push... <span className="animate-terminal-blink">▊</span></p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-4xl md:text-6xl font-bold tracking-tight text-forest mb-6"
          >
            Learn.{" "}
            <span className="text-coral">Build.</span>{" "}
            Innovate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-forest/70 text-lg max-w-xl mb-8"
          >
            v2.0 is compiling. Last year, 50+ devs spent 24 hours shipping real projects for the Muslim
            community — this year, we're running it back. Bigger prize pool, deeper mentorship, same 24-hour sprint.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/winners"
              className="group inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral"
            >
              See What 2025 Built <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center h-11 border border-forest px-6 font-mono text-xs uppercase tracking-wider text-forest transition-colors hover:border-coral hover:text-coral"
            >
              Learn More
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block font-mono text-xs text-forest/80 bg-cream/80 backdrop-blur-sm mt-8 px-2 py-1 tracking-wider"
          >
            // September 12–13, 2026 · Darul Islah Community Center · Registration opening soon
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-8"
        >
          {[
            { value: "24h", label: "Duration" },
            { value: "$???", label: "Prize Pool" },
            { value: "50+", label: "Devs in 2025" },
            { value: "10+", label: "Mentor Orgs" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-bold text-forest">{stat.value}</p>
              <p className="font-mono text-xs uppercase tracking-wider text-forest/50">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
