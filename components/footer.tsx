import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest border-t border-cream/10">
      <div className="container mx-auto px-5 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                darul_islah
              </span>
              <span className="font-mono text-sm font-semibold text-coral">
                .hack()
              </span>
            </Link>
            <p className="text-cream/50 text-sm">
              A 24-hour hackathon where innovation meets community. Build, learn, and connect with fellow tech
              enthusiasts.
            </p>
            <Link
              href="https://instagram.com/hackdarulislah"
              className="inline-flex items-center gap-2 text-cream/50 hover:text-coral transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-mono text-xs">@hackdarulislah</span>
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// links</p>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#sponsors", label: "Sponsors" },
                { href: "/#schedule", label: "Schedule" },
                { href: "/#faq", label: "FAQ" },
                { href: "/mentor-signup", label: "Mentor Signup" },
                { href: "/winners", label: "Winners" },
                { href: "/sponsor-info", label: "Sponsor Info" },
                { href: "/#donate", label: "Donate" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/50 hover:text-cream transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral mb-4">// contact</p>
            <ul className="space-y-2 text-cream/50 text-sm">
              <li>Darul Islah Community Center</li>
              <li>320 Fabry Terrace</li>
              <li>Teaneck, NJ</li>
              <li>
                <a href="mailto:hackathon@darulislah.org" className="text-coral hover:underline">
                  hackathon@darulislah.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/30 text-sm font-mono">
            &copy; {new Date().getFullYear()} Hack DI. All rights reserved.
          </p>
          <p className="text-cream/30 text-sm mt-4 md:mt-0">Designed with love by the Hack DI Team</p>
        </div>
      </div>
    </footer>
  )
}
