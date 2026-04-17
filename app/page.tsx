import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { MentorCompaniesSection } from "@/components/mentor-companies-section"
import { ScheduleSection } from "@/components/schedule-section"
import { FaqSection } from "@/components/faq-section"
import { RegisterSection } from "@/components/register-section"
import { DonationSection } from "@/components/donation-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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
