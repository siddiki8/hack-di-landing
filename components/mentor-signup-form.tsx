"use client"

import { useEffect } from "react"

export function MentorSignupForm() {
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-deepgreen-50/10 backdrop-blur-sm p-6 rounded-lg border border-deepgreen-100">
      <div data-tf-live="01JRF0T506XNV0N03YA7RJ51SV" className="w-full min-h-[600px]"></div>
    </div>
  )
}
