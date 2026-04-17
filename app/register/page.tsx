"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram } from "lucide-react"
import { useEffect } from "react"

export default function RegisterPage() {
  // This useEffect is needed to ensure the iframe script loads properly
  useEffect(() => {
    // If there are any scripts that need to be loaded for the iframe, they can be added here
    // For most iframes this isn't necessary, but it's good practice for complex embeds
  }, [])

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
              Register for <span className="text-gold">Hack DI</span>
            </h1>

            <div className="h-px w-24 bg-gold/50 mx-auto my-8"></div>

            <p className="text-xl text-gray-300 mb-12 text-center">
              Secure your spot for an unforgettable weekend of innovation, learning, and collaboration.
            </p>

            <div className="bg-deepgreen-50/10 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100 mb-8">
              {/* Zeffy Registration Form */}
              <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "600px" }}>
                <iframe
                  title="Hack DI Registration Form"
                  style={{
                    position: "absolute",
                    border: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.zeffy.com/embed/ticketing/di-hackathon--2025"
                  allowPaymentRequest
                  allowTransparency={true}
                ></iframe>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-deepgreen-100/20 flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="mt-12 text-sm text-gray-400 text-center">
              <p>
                Have questions? Contact us at{" "}
                <a href="mailto:hackathon@darulislah.org" className="text-gold hover:underline">
                  hackathon@darulislah.org
                </a>
              </p>
              <p className="mt-2">
                Follow us on{" "}
                <a
                  href="https://instagram.com/hackdarulislah"
                  className="text-gold hover:underline flex items-center gap-1 inline-flex"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>{" "}
                for updates
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
