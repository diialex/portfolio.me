'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "PRJ-01",
      title: "Controlador Robótico Autónomo",
      stack: "ROS2 | Python | LaserScan",
      desc: "Implementación de un controlador *path-following* para Turtlebot. Procesamiento en tiempo real de escaneos láser para evasión dinámica de colisiones y navegación autónoma en entornos cerrados.",
      link: "#"
    },
    {
      id: "PRJ-02",
      title: "Sistema Inteligente NLP (ODS)",
      stack: "Python | IA | NLP | Data",
      desc: "Desarrollo de un sistema de Inteligencia Artificial utilizando Procesamiento de Lenguaje Natural para procesar documentación de proyectos y medir algorítmicamente su alineación con objetivos de la NASA y los ODS.",
      link: "#"
    },
    {
      id: "PRJ-03",
      title: "FlipCrypt: Firmware Custom",
      stack: "C | Hardware | Criptografía",
      desc: "Modificación a bajo nivel de un Flipper Zero actuando como gestor de credenciales cifrado. Fusión de los aplicativos Password Management y FlipCrypt para mejorar el soporte de caracteres y la seguridad on-device.",
      link: "#"
    }
  ];

  useGSAP(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div id="projects" className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>active_deployments.sh
      </h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="project-card group relative bg-black border border-gray-800 hover:border-cyan-500 transition-colors duration-500 p-1 pl-6"
          >
            {/* Barra lateral decorativa */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800 group-hover:bg-cyan-500 transition-colors duration-500 shadow-[0_0_10px_rgba(6,182,212,0)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            
            <div className="bg-gray-900/30 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <span className="text-cyan-500 text-xs font-bold tracking-widest mb-2 block">
                  [{project.id}]
                </span>
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white mb-2">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-gray-400 mb-4 bg-black/50 inline-block px-2 py-1 border border-gray-800">
                  {project.stack}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {project.desc}
                </p>
              </div>
              
              <a 
                href={project.link} 
                className="shrink-0 px-6 py-2 border border-gray-700 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 bg-black transition-all cursor-pointer z-10"
              >
                [ VIEW_SOURCE ]
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
