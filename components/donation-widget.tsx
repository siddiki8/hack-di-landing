"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DonationWidgetProps {
  className?: string
}

export function DonationWidget({ className }: DonationWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Adjust iframe height based on content if needed
    const handleResize = () => {
      if (iframeRef.current) {
        // You can add message listener here if the donation platform supports postMessage
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("w-full rounded-lg overflow-hidden shadow-lg", className)}>
      <iframe
        ref={iframeRef}
        src="https://donation.masjidal.com/DarulIslah/campaign/hackathon/"
        className="w-full border-0"
        height="600"
        title="Hack DI Donation"
        allow="payment"
        loading="lazy"
      ></iframe>
    </div>
  )
}
