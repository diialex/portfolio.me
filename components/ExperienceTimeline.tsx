'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registramos el plugin para asegurarnos de que GSAP sepa calcular el scroll
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      date: "[MAY 2026]",
      title: "Deploy: digital-command-center",
      subtitle: "Proyecto Personal | Git Main Branch",
      description: "Inicialización y primer push a producción de la arquitectura base para el centro de comando personal. Integración inicial de frontend 3D.",
      iconColor: "bg-cyan-500",
      glow: "shadow-[0_0_10px_#06b6d4]",
    },
    {
      date: "[2026]",
      title: "TFG: Sistema Inteligente ODS",
      subtitle: "Ingeniería Informática | Universidad Pablo de Olavide",
      description: "Desarrollo de un sistema basado en procesamiento de lenguaje natural (NLP) e Inteligencia Artificial para medir la alineación de proyectos con los Objetivos de Desarrollo Sostenible.",
      iconColor: "bg-green-500",
      glow: "shadow-[0_0_10px_#22c55e]",
    },
    {
      date: "[JUL 2024]",
      title: "Cyber Bootcamp Google-UMA",
      subtitle: "Seleccionado Top 100 Nacional",
      description: "Entrenamiento intensivo en Identidad digital, OSINT, DevSecOps, análisis de malware, seguridad de redes, criptografía avanzada y hacking ético.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
    },
    {
      date: "[2023 - 2024]",
      title: "Programa Erasmus+",
      subtitle: "Universidad de Bolonia, Italia",
      description: "Residencia internacional de 9 meses. Perfeccionamiento del idioma italiano (B2) y desarrollo de habilidades de adaptación en un entorno multicultural.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#a855f7]",
    }
  ];

  useGSAP(() => {
    // Seleccionamos todos los bloques individuales usando la clase CSS
    const nodes = gsap.utils.toArray('.timeline-node');

    nodes.forEach((node: any) => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: "top 85%", // Se activa cuando la parte superior del elemento llega al 85% de la pantalla
          toggleActions: "play none none reverse" // Animación fluida de entrada y salida
        },
        x: -50, // Deslizamiento desde la izquierda
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef }); // scope limita la búsqueda de clases a este contenedor

  return (
    <div id="experience" className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>system_logs.log
      </h2>
      
      <div className="relative border-l border-gray-700 ml-3 space-y-12">
        {timelineEvents.map((event, index) => (
          // Añadimos la clase 'timeline-node' para que GSAP pueda engancharse a ella
          <div key={index} className="relative pl-8 group timeline-node">
            <div 
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${event.iconColor} ${event.glow} group-hover:scale-150 transition-transform duration-300`} 
            />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
              <span className="text-sm font-bold text-gray-500 tracking-wider">
                {event.date}
              </span>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                {event.title}
              </h3>
            </div>
            
            <h4 className="text-md text-gray-400 mb-3 italic">
              {event.subtitle}
            </h4>
            
            <p className="text-gray-300 leading-relaxed text-sm bg-black/40 p-4 border border-gray-800/50 rounded-r-lg group-hover:border-gray-600 transition-colors">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}