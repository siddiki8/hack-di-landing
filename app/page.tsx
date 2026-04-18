import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const MentorCompaniesSection = dynamic(
  () => import("@/components/mentor-companies-section").then((m) => m.MentorCompaniesSection),
  { ssr: true },
)
const ScheduleSection = dynamic(
  () => import("@/components/schedule-section").then((m) => m.ScheduleSection),
  { ssr: true },
)
const SponsorsSection = dynamic(
  () => import("@/components/sponsors-section").then((m) => m.SponsorsSection),
  { ssr: true },
)
const FaqSection = dynamic(
  () => import("@/components/faq-section").then((m) => m.FaqSection),
  { ssr: true },
)
const RegisterSection = dynamic(
  () => import("@/components/register-section").then((m) => m.RegisterSection),
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
        <AboutSection />
        <MentorCompaniesSection />
        <ScheduleSection />
        <SponsorsSection />
        <FaqSection />
        <RegisterSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  )
}
