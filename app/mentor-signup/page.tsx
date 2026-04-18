import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Code2,
  GitPullRequest,
  Briefcase,
  Users,
  Mail,
  Instagram,
  Calendar,
  MapPin,
} from "lucide-react"

export const metadata = {
  title: "Mentor Signup | Hack DI 2026",
  description: "Mentor applications for Hack DI 2026 open soon.",
}

const mentorRoles = [
  {
    num: "01",
    icon: <Code2 className="h-5 w-5" />,
    title: "Unblock Teams",
    body: "Pair with a team for an hour when they hit a wall — API auth, deploy config, whatever's on fire.",
  },
  {
    num: "02",
    icon: <GitPullRequest className="h-5 w-5" />,
    title: "Review Code",
    body: "Casual PR reviews. Nudge good patterns early, flag tech debt, celebrate clean diffs.",
  },
  {
    num: "03",
    icon: <Briefcase className="h-5 w-5" />,
    title: "Share the Road",
    body: "Career chats over chai. Resume reviews. Tell them what you wish someone had told you.",
  },
]

const proof = [
  { value: "10+", label: "Mentor Orgs" },
  { value: "50+", label: "Devs Mentored" },
  { value: "4–6h", label: "Your Commitment" },
  { value: "24h", label: "Event Duration" },
]

const eventConfig = [
  { icon: <Calendar className="h-4 w-4" />, label: "Dates", value: "September 12–13, 2026" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Darul Islah · Teaneck, NJ" },
  { icon: <Clock className="h-4 w-4" />, label: "Commitment", value: "Pick a 4-hour block" },
  { icon: <Users className="h-4 w-4" />, label: "Expected", value: "75–125 participants" },
]

export default function MentorSignupPage() {
  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
                // mentors · year=2026
              </p>
              <h1 className="font-mono text-4xl md:text-6xl font-bold text-forest tracking-tight mb-6">
                Mentor the <span className="text-coral">Next Cohort</span>.
              </h1>
              <p className="text-forest/70 text-lg max-w-2xl mb-10">
                Applications are opening soon. If you're a working engineer, designer, or PM — come spend a
                weekend helping Muslim devs ship their first real project. Low lift, huge impact.
              </p>

              {/* Terminal */}
              <div className="border border-forest/20 bg-white/70 backdrop-blur-sm max-w-2xl">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
                  <div className="w-3 h-3 rounded-full bg-coral/60" />
                  <div className="w-3 h-3 rounded-full bg-forest/30" />
                  <div className="w-3 h-3 rounded-full bg-forest/20" />
                  <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">
                    bash — mentors.log
                  </span>
                </div>
                <div className="px-5 py-5 font-mono text-sm space-y-1">
                  <p className="text-forest/50">$ hack-di mentors --apply --year=2026</p>
                  <p className="text-terminal">✓ event_date: <span className="text-forest">September 12–13, 2026</span></p>
                  <p className="text-terminal">✓ 2025_snapshot: <span className="text-forest">10+ mentor orgs · 50+ devs</span></p>
                  <p className="text-terminal">✓ commitment: <span className="text-forest">4–6 hours · your choice of block</span></p>
                  <p className="text-terminal">✓ prior_mentors: <span className="text-forest">auto-queued · we'll ping you first</span></p>
                  <p className="text-coral mt-2">
                    [HINT] applications opening soon · reach out now <span className="animate-terminal-blink">▊</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof stats */}
        <section className="py-12 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-8">
              // proof · 2025.stats
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {proof.map((p) => (
                <div key={p.label}>
                  <p className="font-mono text-3xl md:text-4xl font-bold text-cream mb-1">{p.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-coral">{p.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/winners"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream border-b border-coral pb-1 hover:text-coral transition-colors"
              >
                View the 2025 build log <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* What mentors do */}
        <section className="py-20 bg-forest/5">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// role.spec</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              What a Mentor Actually Does
            </h2>
            <p className="text-forest/60 max-w-2xl mb-12">
              Not a lecture. Not a keynote. Just 4–6 hours of showing up for teams that need you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mentorRoles.map((r) => (
                <div key={r.num} className="border border-forest/10 bg-cream p-8 hover:bg-white transition-colors">
                  <p className="font-mono text-coral text-sm mb-4">{r.num}</p>
                  <div className="flex items-center gap-2 text-forest mb-3">
                    {r.icon}
                    <h3 className="text-xl font-bold text-forest">{r.title}</h3>
                  </div>
                  <p className="text-forest/60 text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event details grid */}
        <section className="py-12 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-8">// event.config</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
              {eventConfig.map((s) => (
                <div key={s.label} className="bg-forest p-6">
                  <div className="flex items-center gap-2 text-coral mb-3">
                    {s.icon}
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{s.label}</span>
                  </div>
                  <p className="font-mono text-base font-bold text-cream">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we're looking for */}
        <section className="py-24">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// who</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              Who We're Looking For
            </h2>
            <p className="text-forest/60 max-w-2xl mb-12">
              Anyone doing the work, professionally. You don't need to be staff+ at Google. You need to have
              shipped things, and be willing to answer questions for a few hours.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ul className="space-y-3">
                {[
                  "Working engineers (any language, any stack)",
                  "Product designers & UX folks",
                  "PMs, founders, and technical leads",
                  "Sisters: we especially need you — women mentors for our sister-only spaces",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-forest/80">
                    <span className="text-coral font-mono mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border border-forest/15 bg-white/60 backdrop-blur-sm p-8 self-start">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// apply</p>
                <h3 className="font-mono text-2xl font-bold text-forest mb-3">
                  Ready to mentor?
                </h3>
                <p className="text-forest/70 leading-relaxed mb-6">
                  Email us directly. Prior mentors — you're already on the list, we'll ping you first.
                </p>
                <a
                  href="mailto:hackathon@darulislah.org?subject=Mentor%20Interest%20-%20Hack%20DI%202026"
                  className="group w-full inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream hover:bg-coral transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email to Mentor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              // still deciding?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-8 tracking-tight">
              See what last year's mentors helped build.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/winners"
                className="group inline-flex items-center justify-center h-11 bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream hover:bg-coral/80 transition-colors"
              >
                <Users className="mr-2 h-4 w-4" />
                2025 Recap
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://instagram.com/hackdarulislah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 border border-cream/40 px-6 font-mono text-xs uppercase tracking-wider text-cream hover:border-coral hover:text-coral transition-colors"
              >
                <Instagram className="mr-2 h-4 w-4" />
                @hackdarulislah
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-11 font-mono text-xs uppercase tracking-wider text-cream/60 hover:text-coral transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
