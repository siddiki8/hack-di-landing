import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MentorSignupForm } from "@/components/mentor-signup-form"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock,
  Code2,
  GitPullRequest,
  Briefcase,
  Users,
  Calendar,
  MapPin,
} from "lucide-react"

export const metadata = {
  title: "Mentor Signup | Hack DI 2026",
  description: "Apply to mentor at Hack DI 2026. Join our community and help guide the next generation of builders.",
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
  { value: "~3h", label: "Your Commitment" },
  { value: "24h", label: "Event Duration" },
]

const eventConfig = [
  { icon: <Calendar className="h-4 w-4" />, label: "Dates", value: "September 12–13, 2026" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Darul Islah · Teaneck, NJ" },
  { icon: <Clock className="h-4 w-4" />, label: "Commitment", value: "~3-hour block, flexible" },
  { icon: <Users className="h-4 w-4" />, label: "Expected", value: "75–125 participants" },
]

export default function MentorSignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-forest">
      <Navbar />

      <main className="flex-grow pt-16">
        <section className="relative overflow-hidden border-b border-forest/10 bg-cream py-20 md:py-24">
          <div className="container mx-auto px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.8fr)] lg:items-start">
              <div className="max-w-3xl">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral/80">
                  // mentors · year=2026 · status=open
                </p>
                <h1 className="font-mono text-4xl font-bold tracking-tight text-forest md:text-6xl">
                  Mentor the <span className="text-coral">next cohort</span> and join the build floor.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-forest/72">
                  If you are a working engineer, designer, PM, founder, or operator, this form puts you directly into
                  our mentor intake queue. Pick how you want to help and we will handle the follow-up.
                </p>

                <div className="mt-10 max-w-2xl border border-forest/15 bg-white/70 shadow-[10px_10px_0_0_rgba(255,122,69,0.12)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-forest/10 bg-forest/5 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-coral/70" />
                    <div className="h-3 w-3 rounded-full bg-forest/25" />
                    <div className="h-3 w-3 rounded-full bg-forest/15" />
                    <span className="ml-2 font-mono text-[10px] tracking-wider text-forest/35">
                      bash - mentor-signup.log
                    </span>
                  </div>
                  <div className="space-y-1 px-5 py-5 font-mono text-sm text-forest/75">
                    <p className="text-forest/45">$ hack-di mentors --apply --year=2026</p>
                    <p className="text-terminal">✓ intake_mode: <span className="text-forest">online-form</span></p>
                    <p className="text-terminal">✓ commitment: <span className="text-forest">~3-hour block, flexible</span></p>
                    <p className="text-terminal">✓ location: <span className="text-forest">Darul Islah · Teaneck, NJ</span></p>
                    <p className="text-terminal">✓ mentor_ops: <span className="text-forest">WhatsApp coordination + schedule follow-up</span></p>
                    <p className="mt-2 text-coral">[READY] form intake active <span className="animate-pulse">▊</span></p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="#apply"
                    className="group inline-flex h-11 items-center justify-center bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-forest"
                  >
                    Jump To Form
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-forest/45">
                    Scroll down to apply
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {proof.map((item) => (
                    <div key={item.label} className="border border-forest/12 bg-white/50 p-5">
                      <p className="font-mono text-3xl font-bold text-forest">{item.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-coral/80">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-forest/15 bg-white/65 p-6 shadow-[10px_10px_0_0_rgba(4,13,14,0.06)] backdrop-blur-sm md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-coral/80">// event.config</p>
                <div className="mt-6 grid gap-3">
                  {eventConfig.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 border border-forest/10 bg-cream px-4 py-4">
                      <div className="mt-0.5 text-coral">{item.icon}</div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest/45">{item.label}</p>
                        <p className="mt-1 text-sm font-medium text-forest/85">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border border-coral/20 bg-coral/8 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral">What to expect</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-forest/75">
                    <li>One mentor form per person. We will follow up with scheduling once submissions are reviewed.</li>
                    <li>Choose multiple contribution modes if you want to mentor, workshop, recruit, or support financially.</li>
                    <li>Your commitment is flexible — plan for a ~3-hour block during the event.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="border-y border-coral/15 bg-coral py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-10">
            <MentorSignupForm />
          </div>
        </section>

        <section className="border-y border-forest/10 bg-white/35 py-20">
          <div className="container mx-auto px-5 md:px-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral/80">// role.spec</p>
            <h2 className="text-3xl font-bold tracking-tight text-forest md:text-4xl">
              Where mentors usually create the most lift
            </h2>
            <p className="mt-4 max-w-2xl text-forest/65">
              This is not a keynote circuit. The highest-impact mentors usually unblock teams quickly, share operating
              context, and help participants make better tradeoffs under time pressure.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {mentorRoles.map((role) => (
                <div key={role.num} className="border border-forest/12 bg-white/65 p-8 shadow-[10px_10px_0_0_rgba(255,122,69,0.08)]">
                  <p className="font-mono text-sm text-coral">{role.num}</p>
                  <div className="mt-4 flex items-center gap-2 text-coral">{role.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-forest">{role.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-forest/65">{role.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral/80">// still deciding?</p>
            <h2 className="text-3xl font-bold tracking-tight text-forest md:text-4xl">
              See what last year's mentors helped teams ship.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/winners"
                className="group inline-flex h-11 items-center justify-center bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:bg-forest"
              >
                <Users className="mr-2 h-4 w-4" />
                2025 Recap
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center border border-forest/20 px-6 font-mono text-xs uppercase tracking-wider text-forest/70 transition-colors hover:border-coral hover:text-coral"
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
