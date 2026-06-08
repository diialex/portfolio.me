'use client'
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<any>(null);

  const timelineEvents = [
    {
      date: "[FEB 2026]",
      title: "3º Puesto CTF - SecAdmin",
      subtitle: "Competición de Ciberseguridad | Sevilla",
      description: "Tercera posición en competición técnica de ciberseguridad ofensiva y defensiva.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Participación en el Capture The Flag (CTF) de la conferencia SecAdmin. Resolución de retos en entornos controlados bajo presión, aplicando técnicas de pentesting, esteganografía, criptografía y análisis forense. Demostración de trabajo en equipo y pensamiento lateral para la resolución de vulnerabilidades complejas.",
      tags: ["CTF", "Offensive Security", "Forense Digital", "Teamwork"]
    },
    {
      date: "[OCT - NOV 2025]",
      title: "Hackathons: NASA & INCIBE",
      subtitle: "Space Apps Challenge | Hackathon Ciberseguridad INCIBE",
      description: "Desarrollo de simuladores espaciales y diseño de arquitecturas de ciberresiliencia SaaS para PYMES.",
      iconColor: "bg-cyan-500",
      glow: "shadow-[0_0_10px_#06b6d4]",
      extendedDetails: "Participación intensiva en dos de los hackathons más importantes a nivel nacional e internacional. En el NASA Space Apps Challenge, desarrollo de la web interactiva 'Meteor Madness' consumiendo APIs de la NASA en tiempo real. Posteriormente, en el evento de INCIBE en Oviedo, diseño y conceptualización de una arquitectura SaaS enfocada en dotar de ciberresiliencia a pequeñas y medianas empresas.",
      tags: ["Hackathon", "Ciberresiliencia", "SaaS", "Fast-Prototyping"]
    },
    {
      date: "[SEP - NOV 2025]",
      title: "Programa Sputnik",
      subtitle: "Talento Joven | Red Sputnik",
      description: "Seleccionado como talento de alto potencial para formación en liderazgo y tecnologías exponenciales.",
      iconColor: "bg-yellow-500",
      glow: "shadow-[0_0_10px_#eab308]",
      extendedDetails: "Inmersión en un ecosistema de innovación junto a emprendedores y líderes tecnológicos. Entrenamiento enfocado en el desarrollo de soft skills, liderazgo, visión de negocio y un entendimiento profundo del impacto de las tecnologías exponenciales en el tejido empresarial y la sociedad civil.",
      tags: ["Liderazgo", "Soft Skills", "Innovación", "Tecnologías Exponenciales"]
    },
    {
      date: "[JUL 2025]",
      title: "Cyber Bootcamp Google-UMA",
      subtitle: "Programa de Alto Rendimiento | Top 100 Nacional",
      description: "Entrenamiento táctico intensivo en ciberseguridad ofensiva, defensiva y DevSecOps impartido por expertos del sector.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Seleccionado entre los 100 mejores perfiles de España. Formación de élite abarcando hacking ético, criptografía post-cuántica, seguridad en infraestructuras 5G, análisis de malware (estático y dinámico), seguridad hardware e identidad digital. Participación destacada en simulaciones CTF internas.",
      tags: ["DevSecOps", "Análisis de Malware", "Hacking Ético", "Hardware Security"]
    },
    {
      date: "[2023 - 2024]",
      title: "Programa Erasmus+",
      subtitle: "Università di Bologna | Italia",
      description: "Inmersión académica internacional. Especialización en minería de datos, inteligencia artificial y sistemas distribuidos.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#a855f7]",
      extendedDetails: "Residencia de 9 meses en Italia. Adaptación a un entorno académico multicultural de alta exigencia en la universidad más antigua de Europa. Perfeccionamiento del idioma italiano (nivel B2). Cursé asignaturas críticas como Machine/Deep Learning, Data & Text Mining, y Distributed Systems, trabajando con equipos internacionales.",
      tags: ["Adaptabilidad", "Data Science", "Sistemas Distribuidos", "Italiano B2"]
    },
    {
      date: "[2018 - 2026]",
      title: "Grado en Ingeniería Informática",
      subtitle: "Universidad Pablo de Olavide (UPO)",
      description: "Mención en Sistemas de Información. Formación integral en arquitectura de software, infraestructura y seguridad.",
      iconColor: "bg-green-500",
      glow: "shadow-[0_0_10px_#22c55e]",
      extendedDetails: "Base sólida en lenguajes de programación, arquitectura de redes, auditoría de sistemas, bases de datos e inteligencia artificial. Fuerte implicación en la comunidad tecnológica universitaria, participando como Voluntario en la PyConES 2025 y concursante en el oGathon Sevilla. Desarrollo de capacidades analíticas y resolución de problemas complejos.",
      tags: ["Sistemas de Información", "Comunidad IT", "Ingeniería de Software", "PyConES"]
    }
  ];

  useGSAP(() => {
    const nodes = gsap.utils.toArray('.timeline-node');
    nodes.forEach((node: any) => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div id="experience" className="w-full" ref={containerRef}>
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-green-800/50 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>system_logs.log
      </h2>
      
      <div className="relative border-l border-green-800/50 ml-3 space-y-12">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className="relative pl-8 group timeline-node cursor-pointer"
            onClick={() => setActiveEvent(event)}
          >
            <div 
              className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${event.iconColor} ${event.glow} group-hover:scale-150 transition-transform duration-300`} 
            />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
              <span className="text-sm font-bold text-gray-500 tracking-wider font-mono">
                {event.date}
              </span>
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                {event.title}
              </h3>
            </div>
            
            <h4 className="text-md text-cyan-400/80 mb-3 italic">
              {event.subtitle}
            </h4>
            
            <p className="text-gray-300 leading-relaxed text-sm bg-green-900/10 p-4 border border-green-800/30 rounded-r-lg group-hover:border-cyan-500/50 group-hover:bg-cyan-900/10 transition-all duration-300">
              {event.description}
            </p>
            
            <span className="text-cyan-500/0 group-hover:text-cyan-500 text-xs mt-2 block transition-all font-bold font-mono">
              [ CLICK TO EXPAND_LOGS ]
            </span>
          </div>
        ))}
      </div>

      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-[#050908] border border-cyan-800/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden rounded-lg">
            
            <div className="bg-cyan-900/20 border-b border-cyan-800/50 px-4 py-3 flex justify-between items-center">
              <span className="text-cyan-400 text-sm font-mono tracking-widest font-bold">
                ~/logs/view_event.sh
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEvent(null);
                }}
                className="text-gray-400 hover:text-red-500 font-bold text-xl leading-none transition-colors"
              >
                [X]
              </button>
            </div>

            <div className="p-6 md:p-8">
              <span className="text-cyan-500 font-bold tracking-widest text-sm mb-1 block font-mono">
                {activeEvent.date}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {activeEvent.title}
              </h2>
              <h3 className="text-gray-400 italic mb-6 border-b border-gray-800 pb-4">
                {activeEvent.subtitle}
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8">
                {activeEvent.extendedDetails}
              </p>

              <div>
                <p className="text-gray-500 text-sm font-bold tracking-widest mb-3 uppercase font-mono">SYS.TAGS:</p>
                <div className="flex flex-wrap gap-2">
                  {activeEvent.tags.map((tag: string, idx: number) => (
                    <span 
                      key={idx} 
                      className="bg-gray-900 border border-gray-700 text-cyan-400 text-xs px-3 py-1.5 rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}