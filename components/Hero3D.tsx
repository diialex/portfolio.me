'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Scanline } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'

function HologramGlobe() {
  const { scene } = useGLTF('/portfolio.me/earth_globe_hologram.glb')
  const modelRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (!modelRef.current) return
    // ÚNICA ROTACIÓN: El eje Y (horizontal). El proyector se queda anclado.
    modelRef.current.rotation.y += 0.002
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={0.2}>
      {/* ⚠️ EL CENTRADO: Si sigue descentrado, ajusta el segundo valor de position (ej: -2, -3, o 1) */}
      <primitive object={scene} ref={modelRef} scale={1.5} position={[0, 0.5, 0]} />
    </Float>
  )
}

export default function HeroScene() {
  return (
    // Quitamos el bg-black de aquí para que el div sea transparente
    <div className="h-screen w-full relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#00ffcc" />
        <directionalLight position={[-5, -5, 5]} intensity={2} color="#ff00ff" />
        
        <HologramGlobe />
        
        {/* Bloqueamos los ángulos para que la cámara no pueda ir por debajo ni por encima del proyector */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.2} // Fija el ángulo ligeramente por encima del horizonte
          maxPolarAngle={Math.PI / 2.2}
        />
        
        <Environment preset="city" />

        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} mipmapBlur />
          <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={new THREE.Vector2(0.002, 0.002)} />
          <Scanline blendFunction={BlendFunction.OVERLAY} density={1.5} opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}