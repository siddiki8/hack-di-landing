import { Code2, HeartHandshake, Lightbulb, Users } from "lucide-react"

const highlights = [
  { number: "01", icon: Code2, title: "Build", description: "Teams turned real community needs into working projects." },
  { number: "02", icon: Users, title: "Collaborate", description: "Developers and designers worked side by side at Darul Islah." },
  { number: "03", icon: Lightbulb, title: "Learn", description: "Mentors and workshops helped ideas become usable products." },
  { number: "04", icon: HeartHandshake, title: "Give back", description: "The winning projects focused on practical ways to serve others." },
]

export function EventAboutSection() {
  return (
    <section id="about" className="bg-forest py-24 text-cream">
      <div className="container mx-auto px-5 md:px-10">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-coral">// about.hack_di</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">A weekend of building together.</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-cream/70">
          Hack DI brings the community together at Darul Islah in Teaneck to build technology around real problems. In 2026, teams brought that mission to life with products for mutual aid and halal food discovery.
        </p>
        <div className="mt-14 grid gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <div key={highlight.number} className="bg-forest p-7">
                <p className="mb-5 font-mono text-xs text-coral">{highlight.number}</p>
                <Icon className="mb-4 h-6 w-6 text-coral" aria-hidden="true" />
                <h3 className="mb-2 text-xl font-semibold">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-cream/60">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
