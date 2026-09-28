import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Trophy } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "2026 Winners | Hack DI",
  description: "Meet Barakah, Awn, and Dishd, the winning projects and teams from Hack DI 2026 at Darul Islah.",
}

const winners = [
  {
    id: "barakah",
    rank: "01",
    place: "First place",
    name: "Barakah",
    category: "Community mutual aid",
    image: "/images/barakah.jpeg",
    teamImage: "/images/barakahteam.jpeg",
    team: "Ameer Hassan and Belal Ezat",
    intro: "Barakah makes everyday help easier to find and coordinate within the Muslim community.",
    paragraphs: [
      "Instead of letting requests get lost in crowded group chats, people can ask for rides, groceries, or other assistance in plain language and get matched with trusted nearby helpers.",
      "The judges were especially impressed by its polished UI and UX. From setup through requesting help, the experience was designed to be easy to understand for nontechnical and elderly users. It also includes smart matching, trust tiers, local maps, alerts, and task escalation.",
      "Behind the experience is a cross platform React Native stack, with Claude Haiku used for natural language parsing and request matching.",
    ],
    link: null,
  },
  {
    id: "awn",
    rank: "02",
    place: "Second place",
    name: "Awn",
    category: "Community mutual aid",
    image: "/images/awn.jpeg",
    teamImage: "/images/awnteam.jpg",
    team: "Azan Abbasi and Haziq Ali Sohail",
    intro: "Awn connects people who need help with the volunteers best suited to provide it.",
    paragraphs: [
      "A person can describe what they need in natural language, without relying on a busy WhatsApp group or the same few community organizers. Awn then finds volunteers who can help with needs ranging from janazah assistance and transportation to tutoring, elder care, and tech support.",
      "The team built AI request structuring and screening, plus vector embeddings and semantic matching. That lets Awn consider relevant experience, language, gender preference, and location along with the meaning of the request.",
    ],
    link: "https://tryawn.vercel.app/",
  },
  {
    id: "dishd",
    rank: "03",
    place: "Third place",
    name: "Dishd.",
    category: "Halal food discovery",
    image: "/images/dishd.jpeg",
    teamImage: "/images/dishdteam.jpeg",
    team: "Tahsan Ahmed and Kayden Alpas",
    intro: "Dishd helps people discover, rate, and buy from halal home based food businesses.",
    paragraphs: [
      "For anyone looking beyond familiar restaurant options, Dishd offers a way to find home cooks without searching through Facebook Marketplace and WhatsApp groups. It brings discovery, ratings, and commerce into one place.",
      "The judges praised its excellent design and the depth and thoughtfulness of its features.",
    ],
    link: "https://dishd-chi.vercel.app/cook",
  },
] as const

export default function Winners2026Page() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-forest">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="border-b border-forest/10 py-20 md:py-28">
          <div className="container mx-auto px-5 md:px-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral">// recap · year=2026 · status=shipped</p>
            <h1 className="mb-6 max-w-4xl font-mono text-4xl font-bold tracking-tight md:text-6xl">
              Hack DI <span className="text-coral">2026</span><br />Winners.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-forest/70">
              On September 5–6, builders gathered at Darul Islah to turn community needs into working products. Meet the three teams that rose to the top.
            </p>
            <div className="surface-shadow-coral max-w-2xl border border-forest/20 bg-white/70">
              <div className="flex items-center gap-2 border-b border-forest/10 bg-forest/5 px-4 py-2">
                <span className="h-3 w-3 rounded-full bg-coral/60" />
                <span className="h-3 w-3 rounded-full bg-forest/30" />
                <span className="h-3 w-3 rounded-full bg-forest/20" />
                <span className="ml-2 font-mono text-[10px] tracking-wider text-forest/40">bash — podium.log</span>
              </div>
              <div className="space-y-1 px-5 py-5 font-mono text-sm">
                <p className="text-forest/50">$ hack-di winners --year=2026</p>
                <p><span className="text-terminal">✓</span> 01 <span className="text-forest">Barakah</span></p>
                <p><span className="text-terminal">✓</span> 02 <span className="text-forest">Awn</span></p>
                <p><span className="text-terminal">✓</span> 03 <span className="text-forest">Dishd.</span></p>
                <p className="pt-2 text-coral">Alhamdulillah. Keep building.</p>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Winner sections" className="border-b border-cream/10 bg-forest text-cream">
          <div className="container mx-auto flex flex-wrap gap-x-8 gap-y-3 px-5 py-6 md:px-10">
            {winners.map((winner) => (
              <a key={winner.id} href={`#${winner.id}`} className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream/80 hover:text-coral">
                <span className="text-coral">{winner.rank}</span> {winner.name}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </nav>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-5 md:px-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral">// the projects</p>
            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">Built for the community</h2>
            <div className="space-y-16">
              {winners.map((winner, index) => (
                <article id={winner.id} key={winner.id} className="scroll-mt-28 overflow-hidden border border-forest/15 bg-white/50 surface-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-forest/10 bg-forest/5 px-5 py-3 font-mono text-xs uppercase tracking-wider">
                    <span className="inline-flex items-center gap-2 text-coral"><Trophy className="h-4 w-4" /> {winner.place}</span>
                    <span className="text-forest/50">{winner.category}</span>
                  </div>
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-forest/10 bg-cream lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-r">
                      <Image src={winner.image} alt={`${winner.name} project interface`} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                    </div>
                    <div className="flex flex-col justify-center p-7 md:p-10">
                      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-coral">$ cat ./projects/{winner.id}</p>
                      <h3 className="mb-5 font-mono text-4xl font-bold tracking-tight md:text-5xl">{winner.name}</h3>
                      <p className="mb-5 text-lg font-medium leading-relaxed">{winner.intro}</p>
                      <div className="space-y-4 text-sm leading-relaxed text-forest/70 md:text-base">
                        {winner.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                      {winner.link && (
                        <a href={winner.link} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex w-fit items-center gap-2 border border-forest px-4 py-2 font-mono text-xs uppercase tracking-wider text-forest transition-colors hover:border-coral hover:text-coral">
                          <ExternalLink className="h-4 w-4" /> Open project <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="grid border-t border-forest/10 bg-cream/60 md:grid-cols-[minmax(220px,0.8fr)_1.2fr]">
                    <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/8]">
                      <Image src={winner.teamImage} alt={`${winner.name} team presenting at Hack DI 2026`} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center border-t border-forest/10 p-6 md:border-t-0 md:border-l md:p-8">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-coral">// team</p>
                      <p className="text-xl font-semibold text-forest">{winner.team}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest py-20 text-cream">
          <div className="container mx-auto px-5 md:px-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral">// thank_you</p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">Thank you for building with us.</h2>
            <p className="mb-8 max-w-2xl leading-relaxed text-cream/70">To every team, mentor, volunteer, judge, and supporter who made Hack DI 2026 possible: jazakum Allah khair.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/winners" className="inline-flex h-11 items-center gap-2 border border-cream/40 px-5 font-mono text-xs uppercase tracking-wider text-cream hover:border-coral hover:text-coral">2025 recap <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/" className="inline-flex h-11 items-center gap-2 border border-cream/40 px-5 font-mono text-xs uppercase tracking-wider text-cream hover:border-coral hover:text-coral"><ArrowLeft className="h-4 w-4" /> Back home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
