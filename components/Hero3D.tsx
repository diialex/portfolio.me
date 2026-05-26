'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, useGLTF, OrbitControls, Stage } from '@react-three/drei'
//import { EffectComposer, Bloom, ChromaticAberration, Scanline } from '@react-three/postprocessing'
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
    <Float speed={1} rotationIntensity={0} floatIntensity={0.1}>
      <primitive object={scene} ref={modelRef} scale={1.5} position={[0, -0.05, 0]} />
    </Float>
  )
}

export default function HeroScene() {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      {/* ⚠️ CAMBIO CRÍTICO: DPR={1}. Forzamos baja resolución para no saturar WebGL */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={1} gl={{ antialias: true }}>
        
        {/* ⚠️ Stage nos da luces y sombras automáticas y muy eficientes */}
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <HologramGlobe />
        </Stage>
        
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />

        {/* ⚠️ COMENTAMOS LOS EFECTOS DE POST-PROCESADO EN PRODUCCIÓN PARA EL GLOBO */}
        {/* <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} mipmapBlur />
          <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={new THREE.Vector2(0.002, 0.002)} />
          <Scanline blendFunction={BlendFunction.OVERLAY} density={1.5} opacity={0.1} />
        </EffectComposer> */}
      </Canvas>
    </div>
  )
}