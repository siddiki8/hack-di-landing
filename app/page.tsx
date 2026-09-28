import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { EventAboutSection } from "@/components/event-about-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const WinnersPreviewSection = dynamic(
  () => import("@/components/winners-preview-section").then((m) => m.WinnersPreviewSection),
  { ssr: true },
)
const DonationSection = dynamic(
  () => import("@/components/donation-section").then((m) => m.DonationSection),
  { ssr: true },
)

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream text-forest">
      <Navbar />
      <main>
        <HeroSection />
        <WinnersPreviewSection />
        <EventAboutSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  )
}
