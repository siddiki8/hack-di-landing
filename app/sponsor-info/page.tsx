import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Clock,
} from "lucide-react"

export const metadata = {
  title: "Sponsor Information | Hack DI 2026",
  description: "Sponsorship opportunities for Hack DI 2026, Darul Islah's 24-hour hackathon.",
}

const tiers = [
  {
    name: "Bronze",
    price: "$250",
    tagline: "Get your logo in the room.",
    featured: false,
    benefits: [
      "Logo on website and banners",
      "Verbal thank-you at ceremonies",
      "Social media mention",
    ],
  },
  {
    name: "Silver",
    price: "$750",
    tagline: "Put your brand in participants' hands.",
    featured: false,
    benefits: [
      "Logo on T-shirts",
      "Swag bag inclusion",
      "Table at venue",
      "Everything in Bronze",
    ],
  },
  {
    name: "Gold",
    price: "$1,500",
    tagline: "Recruit directly and host your own workshop.",
    featured: true,
    benefits: [
      "Resume book access",
      "Email blast feature",
      "Host a workshop",
      "Everything in Silver",
    ],
  },
  {
    name: "Platinum",
    price: "$3,000",
    tagline: "Premier partner · 1000+ Jummah audience reach.",
    featured: false,
    benefits: [
      "Premium booth",
      "Jummah pitch (1,000+ audience)",
      "Premier sponsor recognition",
      "Everything in Gold",
    ],
  },
]

const eventConfig = [
  { icon: <Calendar className="h-4 w-4" />, label: "Dates", value: "September 12–13, 2026" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Darul Islah · Teaneck, NJ" },
  { icon: <Users className="h-4 w-4" />, label: "Expected", value: "75–125 participants" },
  { icon: <Clock className="h-4 w-4" />, label: "Deadline", value: "August 28, 2026" },
]

const proof = [
  { value: "50+", label: "Devs in 2025" },
  { value: "10+", label: "Mentor Orgs" },
  { value: "$3k", label: "2025 Prize Pool" },
  { value: "24h", label: "Duration" },
]

export default function SponsorInfoPage() {
  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              // sponsors · year=2026
            </p>
            <h1 className="font-mono text-4xl md:text-6xl font-bold text-forest tracking-tight mb-6">
              Sponsor the <span className="text-coral">Next Build</span>.
            </h1>
            <p className="text-forest/70 text-lg max-w-2xl mb-10">
              Hack DI is Darul Islah's 24-hour hackathon — the one place where high school and college devs
              from the Muslim community ship real projects together. 2025 was sold out. 2026 is bigger.
            </p>

            {/* Terminal */}
            <div className="border border-forest/20 bg-white/70 backdrop-blur-sm max-w-2xl">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-forest/30" />
                <div className="w-3 h-3 rounded-full bg-forest/20" />
                <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">bash — pitch.log</span>
              </div>
              <div className="px-5 py-5 font-mono text-sm space-y-1">
                <p className="text-forest/50">$ hack-di pitch --to=sponsor</p>
                <p className="text-terminal">✓ audience: <span className="text-forest">early-career Muslim devs</span></p>
                <p className="text-terminal">✓ reach: <span className="text-forest">75–125 on-site · 1000+ via Jummah</span></p>
                <p className="text-terminal">✓ proof: <span className="text-forest">50+ devs · $3k awarded in 2025</span></p>
                <p className="text-terminal">✓ tax_deductible: <span className="text-forest">true (501c3)</span></p>
                <p className="text-coral mt-2">ROI: brand + recruiting + barakah ▊</p>
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

        {/* Event details grid */}
        <section className="py-20">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// event.config</p>
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-10 tracking-tight">Event Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 border border-forest/10">
              {eventConfig.map((s) => (
                <div key={s.label} className="bg-cream p-6">
                  <div className="flex items-center gap-2 text-coral mb-3">
                    {s.icon}
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{s.label}</span>
                  </div>
                  <p className="font-mono text-base font-bold text-forest">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="py-20 bg-forest/5">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              // tiers · pick(one_of_four)
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              Sponsorship Tiers
            </h2>
            <p className="text-forest/60 max-w-2xl mb-12">
              Each tier inherits every benefit from the ones below it. Custom partnerships welcome — just ask.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative border bg-cream flex flex-col ${
                    t.featured ? "border-coral shadow-[4px_4px_0_0] shadow-coral/20" : "border-forest/15"
                  }`}
                >
                  {t.featured && (
                    <div className="absolute -top-3 left-4 bg-coral text-cream px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em]">
                      most popular
                    </div>
                  )}
                  <div className="p-6 border-b border-forest/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest/50 mb-2">
                      tier/{t.name.toLowerCase()}
                    </p>
                    <h3 className="font-mono text-2xl font-bold text-forest mb-1">{t.name}</h3>
                    <p className="font-mono text-3xl font-bold text-coral mb-3">{t.price}</p>
                    <p className="text-forest/60 text-sm leading-relaxed">{t.tagline}</p>
                  </div>
                  <ul className="p-6 space-y-3 flex-grow">
                    {t.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-forest/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:hackathon@darulislah.org?subject=Sponsor%20Interest%20-%20${t.name}%20Tier`}
                    className="group mx-6 mb-6 inline-flex items-center justify-center h-10 bg-forest font-mono text-[11px] uppercase tracking-wider text-cream hover:bg-coral transition-colors"
                  >
                    Start {t.name}
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-forest/60 text-sm mt-8 text-center">
              Darul Islah is a 501(c)(3) nonprofit · all contributions are tax-deductible.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24">
          <div className="container mx-auto px-5 md:px-10">
            <div className="border border-forest/15 bg-white/60 backdrop-blur-sm p-8 md:p-12 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// contact</p>
              <h2 className="text-2xl md:text-3xl font-bold text-forest mb-6 tracking-tight">
                Let's build the 2026 sponsor stack.
              </h2>
              <p className="text-forest/70 mb-8 max-w-xl">
                Talk to Hasan Arain directly. Happy to put together a custom package if none of the tiers
                fit what you're after.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-forest/5 text-forest">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest/50 mb-1">
                      phone
                    </p>
                    <p className="font-mono text-forest">(201) 960-5959</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-forest/5 text-forest">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest/50 mb-1">
                      email
                    </p>
                    <a href="mailto:hackathon@darulislah.org" className="font-mono text-coral hover:underline">
                      hackathon@darulislah.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hackathon@darulislah.org?subject=Hack%20DI%202026%20Sponsorship"
                  className="group inline-flex items-center justify-center h-11 bg-forest px-6 font-mono text-xs uppercase tracking-wider text-cream hover:bg-coral transition-colors"
                >
                  Reach Out <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center h-11 border border-forest px-6 font-mono text-xs uppercase tracking-wider text-forest hover:border-coral hover:text-coral transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
