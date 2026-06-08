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
      title: "Simulación: Auditoría Infraestructura Aeroespacial",
      type: "Academic Security Audit",
      status: "AUDIT_COMPLETED",
      statusColor: "text-green-500",
      description: "Diseño y ejecución de una simulación de auditoría de seguridad integral basada en un escenario de empresa aeroespacial. Evaluación teórica de segmentación de redes, políticas de control de identidad (MFA), fortificación perimetral y ejecución práctica de análisis forense y extracción de metadatos (FOCA, Exiftool) para prevención de fuga de información (DLP).",
      tech: ["ISO 27001", "ENS", "Network Security", "Forense Digital", "OSINT"],
      accent: "border-red-500/50 hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
    },
    {
      id: "PRJ-02",
      title: "Arquitectura SaaS Ciberresiliente",
      type: "Cloud Security Architecture",
      status: "PROTOTYPE_DEPLOYED",
      statusColor: "text-cyan-400",
      description: "Diseño conceptual y prototipado de una arquitectura de software como servicio (SaaS) orientada a dotar de capacidades de ciberresiliencia a pequeñas y medianas empresas. Proyecto desarrollado bajo presión durante el Hackathon de Ciberseguridad de INCIBE.",
      tech: ["SaaS Architecture", "Ciberresiliencia", "Cloud Security", "Fast-Prototyping"],
      accent: "border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
    },
    {
      id: "PRJ-03",
      title: "Sistema Inteligente ODS (NLP)",
      type: "AI & Data Mining Pipeline",
      status: "MODEL_DEPLOYED",
      statusColor: "text-purple-400",
      description: "Trabajo de Fin de Grado. Motor de análisis semántico basado en IA para evaluar la alineación de proyectos documentales masivos con los ODS. Implementación de pipelines de limpieza de datos, extracción de entidades y entrenamiento de modelos predictivos de clasificación textual.",
      tech: ["Python", "Procesamiento de Lenguaje Natural", "Scikit-Learn", "TF-IDF / LSA"],
      accent: "border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
    },
    {
      id: "PRJ-04",
      title: "Meteor Madness (NASA Space Apps)",
      type: "Real-Time Data Visualization",
      status: "SYS.ONLINE",
      statusColor: "text-green-500",
      description: "Simulador interactivo 3D que modela impactos de asteroides y trayectorias espaciales en tiempo real. Desarrollado durante el NASA International Space Apps Challenge, el sistema consume, filtra y renderiza la API NEO (Near Earth Object) de la NASA para transformar Big Data aeroespacial en información visual accesible.",
      tech: ["Python", "Three.js", "APIs REST", "Data Processing", "WebGL"],
      accent: "border-yellow-500/50 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]"
    },
    {
      id: "PRJ-05",
      title: "Turtlebot ROS2: Autonomous Nav",
      type: "Robotics & Hardware Control",
      status: "SIMULATION_ACTIVE",
      statusColor: "text-yellow-500",
      description: "Desarrollo de controladores lógicos para hardware robótico integrando sistemas de evasión de colisiones (Collision Avoidance) y planificación algorítmica de rutas (Path Planning). Procesamiento de señales de sensores láser (LiDAR) para la toma de decisiones autónomas en entornos controlados.",
      tech: ["ROS2", "Python", "Robótica", "Path Planning", "Procesamiento de Señales"],
      accent: "border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]"
    }
  ];

  useGSAP(() => {
    // Usamos gsap.fromTo para garantizar que los estilos iniciales no se queden atascados
    gsap.fromTo('.project-card', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Se activa cuando el top del contenedor llega al 85% de la pantalla
          toggleActions: "play none none reverse" // Asegura que la animación se reproduzca y se revierta al subir
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  return (
    <div id="projects" className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-green-800/50 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>active_deployments.sh
      </h2>
      
      {/* Grid de 1 columna en móvil, 2 columnas en pantallas grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card bg-[#050908] border p-6 rounded-sm transition-all duration-300 flex flex-col h-full ${project.accent}`}
          >
            {/* Cabecera de la tarjeta: ID y Estado */}
            <div className="flex justify-between items-start mb-4 border-b border-gray-800 pb-2">
              <span className="text-gray-500 text-xs font-mono tracking-widest">
                {project.id} // {project.type}
              </span>
              <span className={`${project.statusColor} text-xs font-bold font-mono animate-pulse tracking-widest`}>
                [{project.status}]
              </span>
            </div>

            {/* Título y Descripción */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Matriz de Tecnologías */}
            <div className="mt-auto">
              <p className="text-gray-600 text-xs font-bold tracking-widest mb-2 font-mono uppercase">
                REQUIRED_MODULES:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="bg-green-900/10 border border-green-800/50 text-cyan-400 text-xs px-2 py-1 rounded-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}