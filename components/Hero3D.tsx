'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function CyberModel() {
  const { scene } = useGLTF('/flipperz0.glb')
  const modelRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!modelRef.current) return
    const targetX = (state.pointer.x * Math.PI) / 4
    const targetY = (state.pointer.y * Math.PI) / 4
    modelRef.current.rotation.y += 0.05 * (targetX - modelRef.current.rotation.y)
    modelRef.current.rotation.x += 0.05 * (-targetY - modelRef.current.rotation.x)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <primitive 
        object={scene} 
        ref={modelRef} 
        scale={50}
        position={[0, 0, 0]} 
      />
    </Float>
  )
}

export default function HeroScene() {
  return (
    // cambiado h-screen por h-full para que ocupe el contenedor padre
    <div className="h-full w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={3} color="#00ffcc" />
        <directionalLight position={[-5, -5, 5]} intensity={3} color="#ff00ff" />
        <CyberModel />
        <OrbitControls />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}