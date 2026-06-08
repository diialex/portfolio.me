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
      id: "SYS.MECHANICS",
      title: "Mecánica & Bricolaje",
      description: "Restauración y mantenimiento de mi motocicleta custom. Manejo de maquinaria pesada (radiales, taladros, bombas de agua) y experiencia práctica en obra civil y reformas.",
      accent: "border-gray-400",
      textAccent: "text-gray-300",
      modelPath: "/portfolio.me/robohand_voxel.glb",
      modelScale: 0.07
    },
    {
      id: "SYS.AUDIO",
      title: "Música y Sistemas",
      description: "Afición casual por la guitarra, trompeta y batería. Hice mi propio home-studio con tarjeta de sonido, sistema 5.1 y paneles acústicos.",
      accent: "border-purple-500",
      textAccent: "text-purple-400",
      modelPath: "/portfolio.me/a_neon_pixel_guitare.glb",
      modelScale: 0.045
    },
    {
      id: "SYS.LOGIC",
      title: "Algoritmia & Lógica",
      description: "Miembro del Club de Algoritmia de Sevilla. Entrenando la resolución de problemas y el pensamiento junto al ajedrez y cubo de Rubik.",
      accent: "border-cyan-500",
      textAccent: "text-cyan-400",
      modelPath: "/portfolio.me/rubiks_cube.glb",
      modelScale: 0.01
    },
    {
      id: "SYS.KINETICS",
      title: "Movimiento & Resistencia",
      description: "Powerlifting, boxeo, calistenia, baloncesto y skateboarding. Disciplina y constancia para mantener el hardware biológico a punto y desconectar de las pantallas.",
      accent: "border-orange-500",
      textAccent: "text-orange-400",
      modelPath: "/portfolio.me/chemical_pot.glb",
      modelScale: 0.06
    },
    {
      id: "SYS.MAKER",
      title: "Fabricación Digital & Óptica",
      description: "Impresión 3D (desde el diseño CAD hasta la extrusión), fotografía y edición (Lightroom/Premiere). Llevando ideas del plano digital a la realidad física.",
      accent: "border-green-500",
      textAccent: "text-green-400",
      modelPath: "/portfolio.me/David_Retro.glb",
      modelScale: 0.45
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
    <div id="hobbies" className="w-screen relative left-1/2 -translate-x-1/2 px-6 md:px-12 lg:px-24" ref={containerRef}>
      
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-800 pb-4">
          <span className="text-cyan-500 mr-2">~/</span>off_grid_modules.exe
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {activities.map((act, index) => (
            <div 
              key={index} 
              className="hobby-card group relative bg-black/60 border border-gray-800 p-8 lg:p-10 overflow-hidden hover:bg-gray-900/40 transition-colors duration-300 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 w-full lg:w-[47%]"
            >
              <div className={`absolute top-0 left-0 w-1 h-full ${act.accent} opacity-50 group-hover:opacity-100 transition-all`} />
              
              <div className="pl-6 flex-1 z-10">
                <span className={`text-sm font-bold tracking-widest ${act.textAccent} mb-3 block opacity-70`}>
                  [{act.id}]
                </span>
                <h3 className="text-2xl font-semibold text-gray-100 mb-3 group-hover:text-white transition-colors">
                  {act.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {act.description}
                </p>
              </div>

              {act.modelPath && (
                <div className="shrink-0 flex items-center justify-center relative z-10 w-full xl:w-auto mt-6 xl:mt-0 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-500 xl:mr-4">
                   <ModelIcon path={act.modelPath} scale={act.modelScale} sizeClass="w-40 h-40 lg:w-48 lg:h-48" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}