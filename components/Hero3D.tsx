'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useTexture, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function HolographicEarth() {
  const earthRef = useRef<THREE.Group>(null!)
  const wireframeRef = useRef<THREE.Mesh>(null!)
  
  // Usamos un mapa oscuro de alto contraste ideal para multiplicar por colores neón
  const earthMap = useTexture('https://unpkg.com/three-globe/example/img/earth-dark.jpg')

  useFrame(() => {
    if (!earthRef.current || !wireframeRef.current) return
    
    // Rotación suave del globo principal
    earthRef.current.rotation.y += 0.002
    
    // La malla de alambre rota un pelín más rápido y en un eje inclinado para dar efecto de "escáner"
    wireframeRef.current.rotation.y += 0.003
    wireframeRef.current.rotation.z += 0.0005
  })

  return (
    <group ref={earthRef} scale={1.4}>
      
      {/* 1. NÚCLEO OSCURO: Evita que veamos la parte trasera del holograma mezclada y sature la imagen */}
      <mesh>
        <sphereGeometry args={[0.98, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 2. CAPA HOLOGRÁFICA (Continentes y Luces) */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={earthMap}
          color="#00ffcc"           // Tono base verde/cian
          emissive="#06b6d4"        // Resplandor cian
          emissiveIntensity={0.8}   // Fuerza del brillo
          transparent={true}
          opacity={0.9}
          blending={THREE.AdditiveBlending} // Fusión mágica: convierte texturas en luz pura
        />
      </mesh>

      {/* 3. CAPA DE RED (Wireframe exterior) */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        
        {/* Iluminación dramática para potenciar el holograma */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 5, 10]} intensity={2} color="#00ffcc" />
        <directionalLight position={[-10, -5, -10]} intensity={0.5} color="#06b6d4" />
        
        <HolographicEarth />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 2.5} // Limita un poco la rotación vertical para no ver los polos distorsionados
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}