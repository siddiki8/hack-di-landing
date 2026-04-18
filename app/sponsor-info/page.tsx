import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  Mail,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Clock,
  ChevronDown,
} from "lucide-react"

export const metadata = {
  title: "Sponsor Information | Hack DI 2026",
  description: "Sponsorship opportunities for Hack DI 2026, Darul Islah's 24-hour hackathon.",
}

const tiers = [
  {
    name: "Bronze",
    price: "$250",
    tagline: "Establish your presence and show community support.",
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
    tagline: "Put your brand directly in participants' hands.",
    featured: false,
    benefits: [
      "Logo on T-shirts",
      "Swag bag inclusion",
      "Table at the venue",
      "All Bronze benefits",
    ],
  },
  {
    name: "Gold",
    price: "$1,500",
    tagline: "Recruit top talent and host your own session.",
    featured: true,
    benefits: [
      "Access to participant resume book",
      "Featured email blast",
      "Host a sponsored workshop",
      "All Silver benefits",
    ],
  },
  {
    name: "Platinum",
    price: "$3,000",
    tagline: "Premier partner with Jummah reach of 1,000+.",
    featured: false,
    benefits: [
      "Premium booth placement",
      "Friday Jummah announcement (1,000+ audience)",
      "Premier sponsor recognition across all materials",
      "All Gold benefits",
    ],
  },
]

const eventDetails = [
  { icon: <Calendar className="h-4 w-4" />, label: "Dates", value: "September 12–13, 2026" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Darul Islah · Teaneck, NJ" },
  { icon: <Users className="h-4 w-4" />, label: "Expected Attendance", value: "75–125 builders + 50 mentors" },
  { icon: <Clock className="h-4 w-4" />, label: "Commitment Deadline", value: "August 28, 2026" },
]

const stats = [
  { value: "50+", label: "Developers in 2025" },
  { value: "10+", label: "Mentor Organizations" },
  { value: "$3k", label: "Prize Pool Awarded" },
  { value: "24h", label: "Hackathon Duration" },
]

const whySponsor = [
  "Reach 75–125 early-career developers and 50+ mentors on-site over 24 hours",
  "Tap into a pipeline of developers open to employment, internship, and project work",
  "Exposure to 1,000+ Friday Jummah attendees at the Platinum tier",
  "Direct recruiting access — meet students before they graduate",
  "100% tax-deductible contribution through a 501(c)(3) nonprofit",
]

export default function SponsorInfoPage() {
  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32">
          <div className="container mx-auto px-5 md:px-10">
            <p className="text-sm uppercase tracking-widest text-coral font-semibold mb-4">
              Sponsorship Opportunities · 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-forest tracking-tight mb-6 leading-tight">
              Invest in the Next<br />
              <span className="text-coral">Generation of Builders.</span>
            </h1>
            <p className="text-forest/70 text-lg max-w-2xl mb-10 leading-relaxed">
              Hack DI is a 24-hour hackathon hosted at Darul Islah in Teaneck, NJ — bringing together
              high school and college developers from the Muslim community. In 2025 we sold out. In 2026
              we&apos;re going bigger, and we&apos;d love you with us.
            </p>

            {/* Why sponsor card */}
            <div className="border border-forest/20 bg-white/70 max-w-xl mb-14">
              <div className="px-6 py-4 border-b border-forest/10 bg-forest/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-forest/60">
                  Why sponsor Hack DI?
                </p>
              </div>
              <ul className="px-6 py-5 space-y-3">
                {whySponsor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-forest/80 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-xs uppercase tracking-widest text-forest/40 font-mono">
                Scroll to see packages
              </p>
              <ChevronDown className="h-6 w-6 text-coral animate-bounce" />
            </div>
          </div>
        </section>

        {/* 2025 numbers */}
        <section className="py-14 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-8">
              2025 By the Numbers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-mono text-3xl md:text-4xl font-bold text-cream mb-1">{s.value}</p>
                  <p className="text-xs uppercase tracking-widest text-coral/80">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/winners"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream border-b border-coral pb-1 hover:text-coral transition-colors"
              >
                View the 2025 highlights{" "}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Event details */}
        <section className="py-20">
          <div className="container mx-auto px-5 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">
              Event Details
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-forest mb-10 tracking-tight">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest/10 border border-forest/10">
              {eventDetails.map((s) => (
                <div key={s.label} className="bg-cream p-6">
                  <div className="flex items-center gap-2 text-coral mb-3">
                    {s.icon}
                    <span className="text-[11px] font-semibold uppercase tracking-widest">{s.label}</span>
                  </div>
                  <p className="text-base font-bold text-forest">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship tiers */}
        <section className="py-20 bg-forest/5">
          <div className="container mx-auto px-5 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">
              Sponsorship Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              Choose Your Level
            </h2>
            <p className="text-forest/60 max-w-2xl mb-12 text-base leading-relaxed">
              Every tier includes all the benefits from the levels below it. If none of these fit
              exactly what you have in mind, reach out — we&apos;re happy to build a custom package.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative border bg-cream flex flex-col ${
                    t.featured
                      ? "border-coral shadow-[4px_4px_0_0] shadow-coral/20"
                      : "border-forest/15"
                  }`}
                >
                  {t.featured && (
                    <div className="absolute -top-3 left-4 bg-coral text-cream px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 border-b border-forest/10">
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
                    href={`mailto:hackathon@darulislah.org?subject=Sponsorship%20Interest%20-%20${t.name}%20Package`}
                    className="group mx-6 mb-6 inline-flex items-center justify-center h-10 bg-forest text-[11px] uppercase tracking-wider font-semibold text-cream hover:bg-coral transition-colors"
                  >
                    Inquire About {t.name}
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-forest/50 text-sm mt-8 text-center">
              Darul Islah is a 501(c)(3) nonprofit — all sponsorship contributions are tax-deductible.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24">
          <div className="container mx-auto px-5 md:px-10">
            <div className="border border-forest/15 bg-white/60 p-8 md:p-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-4">
                Get in Touch
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-forest mb-4 tracking-tight">
                Ready to Partner With Us?
              </h2>
              <p className="text-forest/70 mb-8 text-base leading-relaxed">
                Drop us an email and we&apos;ll get back to you quickly. We&apos;re happy to put together a
                custom package or answer any questions about the event.
              </p>

              <div className="flex items-start gap-3 mb-8">
                <div className="p-2 bg-forest/5 text-forest">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-forest/50 mb-1">
                    Email
                  </p>
                  <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline font-semibold">
                    hackathon@darulislah.org
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hackathon@darulislah.org?subject=Hack%20DI%202026%20Sponsorship"
                  className="group inline-flex items-center justify-center h-11 bg-forest px-6 text-xs uppercase tracking-wider font-semibold text-cream hover:bg-coral transition-colors"
                >
                  Send Us an Email{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center h-11 border border-forest px-6 text-xs uppercase tracking-wider font-semibold text-forest hover:border-coral hover:text-coral transition-colors"
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
