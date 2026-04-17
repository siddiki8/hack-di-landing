"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DonationWidgetProps {
  className?: string
}

export function DonationWidget({ className }: DonationWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // postMessage handler can be added here if the donation platform supports it
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("w-full overflow-hidden", className)}>
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
