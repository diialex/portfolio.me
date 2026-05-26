'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ModelIcon from './ModelIcon';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function OffGridActivities() {
  const containerRef = useRef<HTMLDivElement>(null);

  const activities = [
    {
      id: "SYS.KINEMATICS",
      title: "Biomecánica & Combate",
      description: "Powerlifting, boxeo y calistenia. La disciplina, constancia y el trabajo bajo presión llevados al mundo físico.",
      accent: "border-orange-500",
      textAccent: "text-orange-400",
      modelPath: "/portfolio.me/chemical_pot.glb",
      modelScale: 0.06 // Escalado aumentado para el nuevo visor grande
    },
    {
      id: "SYS.MECHANICS",
      title: "Ingeniería Mecánica",
      description: "Mantenimiento, restauración y modificación de motocicleta custom propia. Operaciones a bajo nivel sin depender de talleres.",
      accent: "border-gray-400",
      textAccent: "text-gray-300",
      modelPath: "/portfolio.me/robohand_voxel.glb",
      modelScale: 0.07 // Escalado aumentado
    },
    {
      id: "SYS.WAVEFORMS",
      title: "Procesamiento Acústico",
      description: "Interpretación de guitarra y trompeta. Experiencia en sincronización y trabajo en equipo en bandas locales.",
      accent: "border-purple-500",
      textAccent: "text-purple-400",
      modelPath: "/portfolio.me/a_neon_pixel_guitare.glb",
      modelScale: 0.045 // Ajusta este número
    },
    {
      id: "SYS.ALGORITHMS",
      title: "Algoritmia & Flujo",
      description: "Skateboarding, Ajedrez y Cubo de Rubik (resolución < 1 min). Reconocimiento de patrones y memoria muscular.",
      accent: "border-cyan-500",
      textAccent: "text-cyan-400",
      modelPath: "/portfolio.me/rubiks_cube.glb",
      modelScale: 0.01 // Ajusta este número
    },
    {
      id: "SYS.OPTICS",
      title: "Óptica & Fabricación",
      description: "Fotografía, edición digital (Lightroom/Premiere) e impresión 3D. Creación de piezas desde el modelado hasta la extrusión plástica.",
      accent: "border-green-500",
      textAccent: "text-green-400",
      modelPath: "/portfolio.me/David_Retro.glb",
      modelScale: 0.45 // Ajusta este número
    }
  ];

  useGSAP(() => {
    gsap.from('.hobby-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        toggleActions: "play none none reverse"
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div id="hobbies" className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>off_grid_modules.exe
      </h2>
      
      {/* ⚠️ CAMBIO CLAVE: Cambiamos grid por flex-col para ocupar filas horizontales */}
      <div className="flex flex-col gap-4 w-full">
        {activities.map((act, index) => (
          <div 
            key={index} 
            className="hobby-card group relative bg-black/60 border border-gray-800 p-8 overflow-hidden hover:bg-gray-900/40 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full"
          >
            <div className={`absolute top-0 left-0 w-1 h-full ${act.accent} opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_currentColor] transition-all`} />
            
            {/* El texto ahora tiene max-w-3xl para que no se estire de forma infinita en pantallas ultra-anchas */}
            <div className="pl-4 flex-1">
              <span className={`text-xs font-bold tracking-widest ${act.textAccent} mb-2 block opacity-70`}>
                [{act.id}]
              </span>
              <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-white transition-colors">
                {act.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                {act.description}
              </p>
            </div>

            {/* Renderizado del modelo flotante con dimensiones ampliadas (w-40 h-40) */}
            {act.modelPath && (
              <div className="shrink-0 relative z-10 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500 md:mr-4">
                 <ModelIcon path={act.modelPath} scale={act.modelScale} sizeClass="w-36 h-36 md:w-40 md:h-40" />
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}