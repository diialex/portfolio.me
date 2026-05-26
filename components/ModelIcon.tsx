'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function RotatingModel({ path, scale }: { path: string, scale: number }) {
  const { scene } = useGLTF(path)
  const modelRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02
    }
  })

  return (
    <Center>
      <primitive object={scene} ref={modelRef} scale={scale} />
    </Center>
  )
}

// Añadimos 'sizeClass' para poder controlar las dimensiones desde fuera
export default function ModelIcon({ path, scale = 1, sizeClass = "w-28 h-28" }: { path: string, scale: number, sizeClass?: string }) {
  return (
    <div className={`${sizeClass} pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <RotatingModel path={path} scale={scale} />
      </Canvas>
    </div>
  )
}