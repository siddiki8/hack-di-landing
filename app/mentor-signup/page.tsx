import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MentorSignupForm } from "@/components/mentor-signup-form"
import { DonationWidget } from "@/components/donation-widget"

export const metadata = {
  title: "Become a Mentor | Hack DI",
  description: "Sign up to become a mentor at Hack DI and help guide the next generation of innovators.",
}

export default function MentorSignupPage() {
  return (
    <div className="min-h-screen bg-deepgreen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepgreen/80 via-deepgreen to-deepgreen/80" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center font-mono">
              Become a <span className="text-gold">Mentor</span>
            </h1>

            <div className="h-px w-24 bg-gold/50 mx-auto my-8"></div>

            <p className="text-xl text-gray-300 mb-12 text-center">
              Share your expertise and help guide the next generation of innovators at Hack DI.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-deepgreen-50/10 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up Form</h2>
                <MentorSignupForm />
              </div>

              <div className="bg-deepgreen-50/10 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Support Hack DI</h2>
                <p className="text-gray-300 mb-6 text-center">
                  Your donation helps us create an amazing hackathon experience for all participants.
                </p>
                <DonationWidget />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
