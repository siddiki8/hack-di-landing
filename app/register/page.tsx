import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, CheckCircle2, Camera } from "lucide-react"

const REGISTRATION_URL = "https://www.zeffy.com/en-US/ticketing/hack-di--2026"

export const metadata = {
  title: "Register | Hack DI 2026",
  description: "Register for Hack DI 2026 — September 5–6 at Darul Islah. $3,000 prize pool.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative pt-16">
        <div className="container relative z-10 mx-auto px-5 md:px-10 py-24">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4 text-center">
              // register
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-mono text-forest tracking-tight">
              Registration <span className="text-coral">Is Open</span>
            </h1>
            <p className="text-forest/60 text-center max-w-xl mx-auto mb-12">
              Hack DI 2026 runs September 5–6, 9 AM to 12 PM the next day. Claim your spot and join the build.
            </p>

            <div className="surface-shadow mb-8 border border-forest/10 bg-white/60 p-10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="h-5 w-5 text-coral" />
                <p className="font-mono text-xs uppercase tracking-wider text-coral">
                  // status: live · September 5–6, 2026
                </p>
              </div>

              <div className="font-mono text-sm text-forest/80 space-y-1 mb-8 border-l-2 border-coral/40 pl-4">
                <p className="text-forest/50">$ hack-di register --year=2026</p>
                <p className="text-terminal">✓ registration endpoint deployed</p>
                <p className="text-forest/70">  ├─ dates: <span className="text-forest">Sept 5–6, 9 AM–12 PM</span></p>
                <p className="text-forest/70">  └─ prize_pool: <span className="text-coral">$3,000</span></p>
                <p className="text-coral">[READY] awaiting your ticket... <span className="animate-terminal-blink">▊</span></p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral"
                >
                  Register on Zeffy <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/winners"
                  className="inline-flex items-center justify-center h-11 border border-forest px-6 font-mono text-xs uppercase tracking-wider text-forest transition-colors hover:border-coral hover:text-coral"
                >
                  See 2025 Recap
                </Link>
              </div>
            </div>

            <div className="text-sm text-forest/50 text-center space-y-2">
              <p>
                Questions?{" "}
                <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline">
                  hackathon@darulislah.org
                </a>
              </p>
              <p className="inline-flex items-center gap-1">
                Follow{" "}
                <a
                  href="https://instagram.com/hackdarulislah"
                  className="text-coral hover:underline inline-flex items-center gap-1 ml-1"
                >
                  <Camera className="h-4 w-4" /> @hackdarulislah
                </a>{" "}
                <span className="ml-1">for updates</span>
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest/60 hover:text-coral transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
