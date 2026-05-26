'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ModelIcon from './ModelIcon';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// 1. EL MOLDE: Le decimos a TypeScript qué forma tiene una tarjeta.
// El interrogante (?) significa que el modelo 3D es opcional.
type SkillCategory = {
  title: string;
  skills: string[];
  accent: string;
  bgHover: string;
  modelPath?: string;
  modelScale?: number;
};

export default function SkillsMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. LA ASIGNACIÓN: Le decimos que este array usa el molde SkillCategory[]
  const skillCategories: SkillCategory[] = [
    {
      title: "Ciberseguridad & Auditoría",
      skills: ["Nmap", "Wireshark (Tshark)", "Magerit", "LOPD", "OSINT", "Análisis Malware", "Iptables", "Análisis de Riesgos"],
      accent: "text-red-400 border-red-500",
      bgHover: "hover:border-red-500",
      modelPath: "/portfolio.me/flipperz0.glb",
      modelScale: 15 
    },
    {
      title: "Sistemas & Redes",
      skills: ["Linux (Parrot, Ubuntu 24)", "Bash Scripting", "ROS2", "Arduino", "VirtualBox"],
      accent: "text-cyan-400 border-cyan-500",
      bgHover: "hover:border-cyan-500",
    },
    {
      title: "Lenguajes de Programación",
      skills: ["C", "Java", "Python", "PHP", "JavaScript", "Ruby", "CUDA"],
      accent: "text-yellow-400 border-yellow-500",
      bgHover: "hover:border-yellow-500",
    },
    {
      title: "Frameworks & Herramientas",
      skills: ["Laravel", "FastAPI", "Hibernate", "Struts2", "JDBC", "Maven", "Selenium", "jMeter", "Jenkins", "Doxygen", "Matlab-Simulink"],
      accent: "text-purple-400 border-purple-500",
      bgHover: "hover:border-purple-500",
    },
    {
      title: "Bases de Datos",
      skills: ["MongoDB", "Qdrant (Vectorial)", "MySQL", "Oracle"],
      accent: "text-green-400 border-green-500",
      bgHover: "hover:border-green-500",
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Jenkins", "GitHub Actions (Basic)"],
      accent: "text-blue-400 border-blue-500",
      bgHover: "hover:border-blue-500",
    },
    {
      title: "Arquitectura Software",
      skills: ["MVC", "Web Services", "Integración Cliente-Servidor"],
      accent: "text-orange-400 border-orange-500",
      bgHover: "hover:border-orange-500",
    },
    {
      title: "Gestión de Proyectos",
      skills: ["Metodologías Ágiles", "Microsoft Project", "Gantt"],
      accent: "text-gray-400 border-gray-500",
      bgHover: "hover:border-gray-500",
    }
  ];

  useGSAP(() => {
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div id="skills" className="w-screen relative left-1/2 -translate-x-1/2 px-6 md:px-12 lg:px-24" ref={containerRef}>
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-b border-gray-800 pb-4">
          <span className="text-cyan-500 mr-2">~/</span>capabilities_matrix.sh
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`skill-card group relative p-8 min-h-[30px] border border-gray-800 bg-black/60 transition-colors duration-300 w-full md:w-[47%] lg:w-[23%] flex flex-col justify-start overflow-hidden ${cat.bgHover}`}
            >
              <div className="relative z-10">
                 <div className={`text-sm font-bold tracking-widest mb-6 border-b border-gray-800 pb-3 ${cat.accent} transition-colors duration-300`}>
                  [{cat.title.toUpperCase()}]
                 </div>
                 
                 <div className="flex flex-wrap gap-3">
                   {cat.skills.map((skill, i) => (
                     <span 
                       key={i} 
                       className="text-xs font-mono text-gray-400 bg-gray-900/50 border border-gray-800 px-3 py-1.5 group-hover:text-gray-200 group-hover:border-gray-600 transition-colors duration-300"
                     >
                       {skill}
                     </span>
                   ))}
                 </div>
              </div>

              {/* Si hay modelPath opcional, lo renderiza */}
              {cat.modelPath && (
                <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  <ModelIcon path={cat.modelPath} scale={cat.modelScale || 1} sizeClass="w-52 h-52" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}