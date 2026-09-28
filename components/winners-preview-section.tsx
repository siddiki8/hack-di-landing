import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const winners = [
  { place: "01", label: "First place", name: "Barakah", image: "/images/barakah.jpeg", summary: "Everyday mutual aid, matched with trusted neighbors." },
  { place: "02", label: "Second place", name: "Awn", image: "/images/awn.jpeg", summary: "Find the right volunteer for the help you need." },
  { place: "03", label: "Third place", name: "Dishd.", image: "/images/dishd.jpeg", summary: "Discover and support verified halal home cooks." },
]

export function WinnersPreviewSection() {
  return (
    <section id="winners" className="bg-forest/5 py-24">
      <div className="container mx-auto px-5 md:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral">// 2026.podium</p>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-forest md:text-4xl">Meet the 2026 winners</h2>
            <p className="max-w-2xl text-forest/65">Three teams built thoughtful tools for everyday life in the Muslim community.</p>
          </div>
          <Link href="/winners/2026" className="group inline-flex w-fit items-center gap-2 border-b border-coral pb-1 font-mono text-xs uppercase tracking-wider text-forest hover:text-coral">
            Read their stories <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {winners.map((winner) => (
            <Link key={winner.place} href={`/winners/2026#${winner.name.toLowerCase().replace(".", "")}`} className="surface-shadow-sm group overflow-hidden border border-forest/15 bg-cream transition-colors hover:border-coral/60">
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image src={winner.image} alt={`${winner.name} project preview`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="border-t border-forest/10 p-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-coral">{winner.place} / {winner.label}</p>
                <h3 className="mb-2 font-mono text-2xl font-bold text-forest">{winner.name}</h3>
                <p className="text-sm leading-relaxed text-forest/65">{winner.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
