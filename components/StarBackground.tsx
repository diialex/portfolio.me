'use client'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function StarBackground() {
  return (
    // position: fixed lo ancla a la pantalla, -z-50 lo manda detrás de absolutamente todo
    <div className="fixed inset-0 -z-50 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars 
          radius={50} 
          depth={50} 
          count={3000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
      </Canvas>
    </div>
  )
}
