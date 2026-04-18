import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Clock, Instagram } from "lucide-react"

export const metadata = {
  title: "Register | Hack DI 2026",
  description: "Registration for Hack DI 2026 opens soon. Stay tuned.",
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
              Registration <span className="text-coral">Coming Soon</span>
            </h1>
            <p className="text-forest/60 text-center max-w-xl mx-auto mb-12">
              Hack DI 2026 hits the terminal on September 12–13. We're still wiring up the registration flow —
              check back soon or get pinged when it's live.
            </p>

            <div className="border border-forest/10 bg-white/60 backdrop-blur-sm p-10 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-coral" />
                <p className="font-mono text-xs uppercase tracking-wider text-coral">
                  // status: pending · September 12–13, 2026
                </p>
              </div>

              <div className="font-mono text-sm text-forest/80 space-y-1 mb-8 border-l-2 border-coral/40 pl-4">
                <p className="text-forest/50">$ hack-di register --year=2026</p>
                <p className="text-forest/60">[WAIT] registration endpoint not yet deployed</p>
                <p className="text-forest/60">[INFO] estimated launch: soon™</p>
                <p className="text-coral">[HINT] star us on instagram to catch the drop</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/winners"
                  className="group inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-coral"
                >
                  See 2025 Recap <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:hackathon@darulislah.org"
                  className="inline-flex items-center justify-center h-11 border border-forest px-6 font-mono text-xs uppercase tracking-wider text-forest transition-colors hover:border-coral hover:text-coral"
                >
                  Email to Get Notified
                </a>
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
                  <Instagram className="h-4 w-4" /> @hackdarulislah
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
