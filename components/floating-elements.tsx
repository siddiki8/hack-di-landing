"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Terminal, Cpu, Database, Server, Wifi } from "lucide-react"

// Define the types of floating elements
type ElementType = "icon" | "code" | "particle"

interface FloatingElement {
  id: number
  type: ElementType
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  delay: number
  icon?: JSX.Element
  code?: string
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Generate random elements — fewer on mobile, none on reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const mobile = window.matchMedia("(max-width: 767px)").matches

    const icons = [
      <Code key="code" />,
      <Terminal key="terminal" />,
      <Cpu key="cpu" />,
      <Database key="database" />,
      <Server key="server" />,
      <Wifi key="wifi" />,
    ]

    const codeSnippets = [
      "function hack() { }",
      "<Hack />",
      "npm run build",
      "git push origin",
      "const ai = new AI()",
      "sudo apt-get",
      "ssh root@server",
      "docker-compose up",
    ]

    const newElements: FloatingElement[] = []

    // Generate icon elements (fewer on mobile)
    const iconCount = mobile ? 3 : 6
    for (let i = 0; i < iconCount; i++) {
      newElements.push({
        id: i,
        type: "icon",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 20,
        rotation: Math.random() * 360,
        speed: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        icon: icons[i % icons.length],
      })
    }

    // Generate code elements (fewer on mobile)
    const codeCount = mobile ? 4 : 8
    for (let i = 0; i < codeCount; i++) {
      newElements.push({
        id: i + iconCount,
        type: "code",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 12,
        rotation: Math.random() * 20 - 10,
        speed: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        code: codeSnippets[i % codeSnippets.length],
      })
    }

    // Generate particle elements (fewer on mobile)
    const particleCount = mobile ? 8 : 20
    for (let i = 0; i < particleCount; i++) {
      newElements.push({
        id: i + iconCount + codeCount,
        type: "particle",
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        rotation: Math.random() * 360,
        speed: Math.random() * 30 + 20,
        delay: Math.random() * 5,
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
            opacity: 0,
            rotate: element.rotation,
          }}
          animate={{
            x: `${element.x}vw`,
            y: `${element.y}vh`,
            opacity: element.type === "particle" ? [0, 0.8, 0] : [0, 0.8, 0.8, 0],
            rotate: element.rotation + (Math.random() > 0.5 ? 360 : -360),
          }}
          transition={{
            duration: element.speed,
            delay: element.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {element.type === "icon" && (
            <div className="text-green-400/60 backdrop-blur-sm" style={{ fontSize: `${element.size}px` }}>
              {element.icon}
            </div>
          )}

          {element.type === "code" && (
            <div
              className="font-mono text-green-400/70 whitespace-nowrap backdrop-blur-sm px-2 py-1 rounded"
              style={{ fontSize: `${element.size}px` }}
            >
              {element.code}
            </div>
          )}

          {element.type === "particle" && (
            <div
              className="rounded-full bg-green-400/50"
              style={{ width: `${element.size}px`, height: `${element.size}px` }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
