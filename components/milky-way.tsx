"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import type { Mesh } from "three"
import { MilkyWayMaterial } from "@/shaders/MilkyWayShader"

function MilkyWayEffect({
  isHovering,
  hoverIntensityRef,
  mousePosition,
}: {
  isHovering: boolean
  hoverIntensityRef: React.MutableRefObject<number>
  mousePosition: React.MutableRefObject<{ x: number; y: number }>
}) {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<MilkyWayMaterial | null>(null)
  const { viewport } = useThree()

  useEffect(() => {
    materialRef.current = new MilkyWayMaterial()
    if (meshRef.current) {
      meshRef.current.material = materialRef.current
    }
  }, [])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      // Update time for animation
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()

      // Update hover intensity for scatter effect
      materialRef.current.uniforms.uHover.value = hoverIntensityRef.current

      // Update mouse position for interactive effects
      materialRef.current.uniforms.uMouse.value = [mousePosition.current.x, mousePosition.current.y]
    }
  })

  // Make the mesh fill the entire viewport with proper aspect ratio
  const scale = Math.max(viewport.width, viewport.height) * 1.5

  return (
    <mesh ref={meshRef} scale={[scale, scale, 1]} position={[0, 0, 0]}>
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  )
}

interface MilkyWayProps {
  parentRef?: React.RefObject<HTMLDivElement>
}

export function MilkyWay({ parentRef }: MilkyWayProps) {
  const [isHovering, setIsHovering] = useState(false)
  const hoverIntensityRef = useRef(0)
  const mousePosition = useRef({ x: 0.5, y: 0.5 })
  const requestRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)

  // Set up global mouse move tracking if we have a parent reference
  useEffect(() => {
    if (!parentRef?.current) return

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        // Check if mouse is within the container bounds
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          // Calculate normalized coordinates (0 to 1)
          mousePosition.current = {
            x: (e.clientX - rect.left) / rect.width,
            y: 1 - (e.clientY - rect.top) / rect.height, // Invert Y for shader coordinates
          }

          // Ensure hover state is active
          if (!isHovering) {
            setIsHovering(true)
          }
        } else if (isHovering) {
          // Mouse left the container
          setIsHovering(false)
        }
      }
    }

    // Add event listener to the parent element
    const parent = parentRef.current
    parent.addEventListener("mousemove", handleGlobalMouseMove)

    return () => {
      parent.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [parentRef, isHovering])

  // Track mouse position for interactive effects (fallback for direct events)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mousePosition.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height, // Invert Y for shader coordinates
      }
    }
  }

  // Handle touch events for mobile interaction
  const handleTouchMove = (e: React.TouchEvent) => {
    if (containerRef.current && e.touches[0]) {
      const rect = containerRef.current.getBoundingClientRect()
      mousePosition.current = {
        x: (e.touches[0].clientX - rect.left) / rect.width,
        y: 1 - (e.touches[0].clientY - rect.top) / rect.height,
      }

      // Ensure hover state is active during touch
      if (!isHovering) {
        setIsHovering(true)
      }
    }
  }

  // Smoothly animate hover intensity for scatter effect
  useEffect(() => {
    const animate = () => {
      // Use full intensity (1.0) to match original behavior
      const targetIntensity = isHovering ? 1.0 : 0.0
      const currentIntensity = hoverIntensityRef.current

      // Smooth transition with the same easing as original
      if (Math.abs(targetIntensity - currentIntensity) > 0.01) {
        hoverIntensityRef.current += (targetIntensity - currentIntensity) * 0.05
      } else {
        hoverIntensityRef.current = targetIntensity
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current as number)
  }, [isHovering])

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onTouchMove={handleTouchMove}
      style={{ touchAction: "none" }}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={[1, 2]} // Responsive pixel ratio
      >
        <MilkyWayEffect isHovering={isHovering} hoverIntensityRef={hoverIntensityRef} mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}
