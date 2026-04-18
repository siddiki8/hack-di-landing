import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Trophy, Medal, Award, ExternalLink, Users, MapPin, Calendar, DollarSign, Heart, Camera, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "2025 Recap | Hack DI",
  description: "The full recap of Hack DI 2025 — Darul Islah's first-ever hackathon, winners, and event highlights.",
}

export default function WinnersPage() {
  const winners = [
    {
      place: "01",
      placeLabel: "1st Place",
      icon: <Trophy className="h-5 w-5" />,
      project: "meemm",
      description:
        'A Muslim "X — the everything app." It\'s a directory of mosques and Muslim businesses, integrated with location-based tweets. The UI blends elements of Apple Maps and X/Twitter.',
      link: "https://www.meemm.me/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1st.jpg-wqdy1lrzBXhDAhVSviOUvk0AdGXNg0.jpeg",
      imageAlt: "1st place winners from meemm team presenting their project",
    },
    {
      place: "02",
      placeLabel: "2nd Place",
      icon: <Medal className="h-5 w-5" />,
      project: "Quran Quest",
      description:
        'A "Duolingo" for daily Quran reading. Tracks, gamifies, and socializes Quran interaction — leaderboards, friend requests, streaks, full Quran uploaded, and a social system for comments and reflections.',
      link: "https://hackdi-d09ee.web.app/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2nd.jpg-86gPr13IIJXfbRuhPzJKHWFms3ZltR.jpeg",
      imageAlt: "2nd place winners from Quran Quest team presenting their project",
    },
    {
      place: "03",
      placeLabel: "3rd Place",
      icon: <Award className="h-5 w-5" />,
      project: "mqt3",
      description:
        "A directory guiding Muslim shopping choices based on Islamic principles. An evolution of the boycott directory concept — halal scores and insights on asceticism and anti-materialism per company or industry search.",
      link: "https://hackdi-e8ga.vercel.app/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd.jpg-qjLjxNS9XU3TazV4YLtXHoIDqSsVeb.jpeg",
      imageAlt: "3rd place winners from mqt3 team presenting their project",
    },
  ]

  const stats = [
    { icon: <Calendar className="h-4 w-4" />, label: "Dates", value: "June 28–29, 2025" },
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Darul Islah · Teaneck, NJ" },
    { icon: <Users className="h-4 w-4" />, label: "Attendance", value: "50+ participants" },
    { icon: <DollarSign className="h-4 w-4" />, label: "Prize Pool", value: "$3,000 awarded" },
  ]

  return (
    <div className="min-h-screen bg-cream text-forest flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">
              // recap · year=2025
            </p>
            <h1 className="font-mono text-4xl md:text-6xl font-bold text-forest tracking-tight mb-6">
              Hack DI <span className="text-coral">2025</span>
              <br />
              Build Log.
            </h1>
            <p className="text-forest/70 text-lg max-w-2xl mb-10">
              Our first hackathon shipped on June 28–29, 2025. 50+ devs, 24 hours, three winners, and a community
              that showed up in force. Here's the full changelog.
            </p>

            {/* Terminal */}
            <div className="surface-shadow-coral max-w-2xl border border-forest/20 bg-white/70 backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-forest/30" />
                <div className="w-3 h-3 rounded-full bg-forest/20" />
                <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">bash — recap.log</span>
              </div>
              <div className="px-5 py-5 font-mono text-sm space-y-1">
                <p className="text-forest/50">$ hack-di --history --year=2025</p>
                <p className="text-terminal">✓ event_status: <span className="text-forest">completed</span></p>
                <p className="text-terminal">✓ participants: <span className="text-forest">50+ (multi-state)</span></p>
                <p className="text-terminal">✓ projects_shipped: <span className="text-forest">multiple</span></p>
                <p className="text-terminal">✓ prize_pool_awarded: <span className="text-forest">$3,000</span></p>
                <p className="text-terminal">✓ mentor_orgs: <span className="text-forest">10+</span></p>
                <p className="text-coral mt-2">alhamdulillah. see build log below ↓</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event details grid */}
        <section className="py-12 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-8">// event.config</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-forest p-6">
                  <div className="flex items-center gap-2 text-coral mb-3">
                    {s.icon}
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{s.label}</span>
                  </div>
                  <p className="font-mono text-lg font-bold text-cream">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Winners podium */}
        <section className="py-24">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// winners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              Top-of-Stack Projects
            </h2>
            <p className="text-forest/60 max-w-2xl mb-12">
              Three teams topped the leaderboard. Each one shipped something real — and most are still live today.
            </p>

            <div className="space-y-10">
              {winners.map((w, i) => (
                <div
                  key={w.place}
                  className="surface-shadow border border-forest/15 bg-white/50 backdrop-blur-sm transition-colors hover:border-coral/40"
                >
                  <div className="flex items-center justify-between px-5 py-2 border-b border-forest/10 bg-forest/5">
                    <div className="flex items-center gap-3 text-forest/60 font-mono text-[11px] tracking-wider">
                      <span className="text-coral">{w.icon}</span>
                      <span>rank = {w.place}</span>
                      <span className="text-forest/30">·</span>
                      <span className="uppercase">{w.placeLabel}</span>
                    </div>
                    <span className="font-mono text-[10px] text-forest/40 tracking-wider hidden sm:inline">
                      project/{w.project.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 relative aspect-[4/3] lg:aspect-auto border-b lg:border-b-0 lg:border-r border-forest/10 overflow-hidden">
                      <Image
                        src={w.image || "/placeholder.svg"}
                        alt={w.imageAlt}
                        fill
                        priority={i === 0}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    <div className="lg:col-span-3 p-6 md:p-8">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-coral mb-3">
                        $ cat ./project/name
                      </p>
                      <h3 className="font-mono text-3xl font-bold text-forest mb-4">
                        {w.project}
                        <span className="text-coral">()</span>
                      </h3>
                      <p className="text-forest/70 leading-relaxed mb-6">{w.description}</p>
                      <Link
                        href={w.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest border border-forest px-4 py-2 hover:border-coral hover:text-coral transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Open Project
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 bg-forest/5">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// highlights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-12 tracking-tight">
              What Happened That Weekend
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  icon: <Users className="h-5 w-5" />,
                  title: "50+ Devs",
                  body: "Beginners to senior engineers coded side-by-side. No gatekeeping.",
                },
                {
                  num: "02",
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Multi-State",
                  body: "Participants traveled in from Kentucky and Virginia to be there.",
                },
                {
                  num: "03",
                  icon: <Heart className="h-5 w-5" />,
                  title: "24 Hours",
                  body: "One sprint, one ummah-first mission, one incredible closing ceremony.",
                },
              ].map((h) => (
                <div key={h.num} className="surface-shadow-sm border border-forest/10 bg-cream p-8 transition-colors hover:bg-white">
                  <p className="font-mono text-coral text-sm mb-4">{h.num}</p>
                  <div className="flex items-center gap-2 text-forest mb-3">
                    {h.icon}
                    <h3 className="text-xl font-bold text-forest">{h.title}</h3>
                  </div>
                  <p className="text-forest/60 text-sm leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>

            <div className="surface-shadow-sm mt-10 border border-forest/10 bg-cream p-8">
              <p className="text-forest/70 leading-relaxed max-w-3xl">
                Participants were given 24 hours to build innovative projects aimed at benefiting the Muslim
                community. The skill level varied from beginners to experienced coders — and it was inspiring to
                see how much they learned and shipped in a single weekend. The turnout and engagement from the
                community were truly encouraging.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section className="py-24">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// social</p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4 tracking-tight">
              From the Feed
            </h2>
            <p className="text-forest/60 max-w-2xl mb-10">
              Photos, post-mortems, and team shout-outs from that weekend.
            </p>

            <div className="surface-shadow mx-auto max-w-xl border border-forest/20 bg-white/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-forest/10 bg-forest/5">
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-forest/30" />
                <div className="w-3 h-3 rounded-full bg-forest/20" />
                <span className="ml-2 font-mono text-[10px] text-forest/40 tracking-wider">
                  @hackdarulislah
                </span>
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <Camera className="h-10 w-10 text-coral mb-4" />
                <p className="text-forest font-medium mb-2">Catch the full recap on Instagram</p>
                <p className="text-forest/60 text-sm mb-6">
                  Reels, photos, and shout-outs to the 2025 teams.
                </p>
                <Link
                  href="https://instagram.com/hackdarulislah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-forest px-6 h-11 font-mono text-xs uppercase tracking-wider text-cream hover:bg-coral transition-colors"
                >
                  <Camera className="h-4 w-4" />
                  Follow @hackdarulislah
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Thank you */}
        <section className="py-24 bg-forest text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// shoutouts</p>
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-8 tracking-tight">
              Thank you.
            </h2>
            <div className="max-w-3xl space-y-5 text-cream/70 text-lg">
              <p>
                To every <span className="text-coral font-medium">mentor</span> who gave their weekend to
                unblock a stuck team — jazakum Allah khair.
              </p>
              <p>
                To every <span className="text-coral font-medium">participant</span> who stayed up to ship — you
                set the bar for 2026.
              </p>
              <p>
                To our <span className="text-coral font-medium">community, volunteers, and sponsors</span> —
                Hack DI 2025 happened because of you. See you again in September.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/sponsor-info"
                className="group inline-flex items-center justify-center h-11 bg-coral px-6 font-mono text-xs uppercase tracking-wider text-cream hover:bg-coral/80 transition-colors"
              >
                Sponsor 2026 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-11 border border-cream/40 px-6 font-mono text-xs uppercase tracking-wider text-cream hover:border-coral hover:text-coral transition-colors"
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
