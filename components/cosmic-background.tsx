"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import { MilkyWayMaterial } from "@/shaders/MilkyWayShader"

function CosmicEffect() {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<MilkyWayMaterial | null>(null)

  useEffect(() => {
    materialRef.current = new MilkyWayMaterial()
    if (meshRef.current) {
      meshRef.current.material = materialRef.current
    }
  }, [])

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2, 32, 32]} />
    </mesh>
  )
}

export function CosmicBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }} dpr={[1, 2]}>
        <CosmicEffect />
      </Canvas>
    </div>
  )
}
