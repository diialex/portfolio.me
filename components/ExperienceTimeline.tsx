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
      date: "[2026]",
      title: "CyberTalent Hackathon & CTF",
      subtitle: "Competición de Ciberseguridad Ofensiva",
      description: "Resolución de retos avanzados de criptografía, forense de drones e interceptación de comunicaciones.",
      iconColor: "bg-orange-500",
      glow: "shadow-[0_0_10px_#f97316]",
      extendedDetails: "Participación destacada en el CTF de CyberTalent. Resolución de desafíos orientados a entornos críticos y aeroespaciales: análisis forense de sistemas aéreos no tripulados (Drone Autopsy / Blackbox), ingeniería inversa de cifrados por fuerza bruta (Deadlock) e inyección de código (FailSafe Injection). Manejo intensivo de Python para la desencriptación de payloads (Encrypted Flight) y análisis de paquetes de red dirigidos (Packet on Target).",
      tags: ["Drone Forensics", "Cryptography", "Reverse Engineering", "Python"],
      certificate: { name: "CERT_CYBERTALENT_2026.pdf", link: "/certs/cybertalent.pdf" },
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-cybertalent" // <-- Añade tu link aquí
    },
    {
      date: "[FEB 2026]",
      title: "3º Puesto CTF - SecAdmin",
      subtitle: "Competición de Ciberseguridad | Sevilla",
      description: "Tercera posición en competición técnica de ciberseguridad ofensiva y defensiva.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Participación en el Capture The Flag (CTF) de la conferencia SecAdmin. Resolución de retos en entornos controlados bajo presión, aplicando técnicas de pentesting, esteganografía, criptografía y análisis forense. Demostración de trabajo en equipo y pensamiento lateral para la resolución de vulnerabilidades complejas.",
      tags: ["CTF", "Offensive Security", "Forense Digital", "Teamwork"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-secadmin"
    },
    {
      date: "[OCT - NOV 2025]",
      title: "Hackathons: NASA & INCIBE",
      subtitle: "Space Apps Challenge | Hackathon Ciberseguridad INCIBE",
      description: "Desarrollo de simuladores espaciales y diseño de arquitecturas de ciberresiliencia SaaS para PYMES.",
      iconColor: "bg-cyan-500",
      glow: "shadow-[0_0_10px_#06b6d4]",
      extendedDetails: "Participación intensiva en dos de los hackathons más importantes a nivel nacional e internacional. En el NASA Space Apps Challenge, desarrollo de la web interactiva 'Meteor Madness' consumiendo APIs de la NASA en tiempo real. Posteriormente, en el evento de INCIBE en Oviedo, diseño y conceptualización de una arquitectura SaaS enfocada en dotar de ciberresiliencia a pequeñas y medianas empresas.",
      tags: ["Hackathon", "Ciberresiliencia", "SaaS", "Fast-Prototyping"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-hackathons"
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
      tags: ["DevSecOps", "Análisis de Malware", "Hacking Ético", "Hardware Security"],
      certificate: { name: "CERT_GOOGLE_UMA_2025.pdf", link: "/certs/google_uma.pdf" }
    },
    {
      date: "[2025 - 2026]",
      title: "Arquitectura Cloud & DevSecOps",
      subtitle: "Especialización Avanzada | UpTech & MOOC Ciberseguridad",
      description: "Certificaciones en despliegue de arquitecturas seguras, procesamiento distribuido y protección de sistemas ciberfísicos (CPS).",
      iconColor: "bg-blue-500",
      glow: "shadow-[0_0_10px_#3b82f6]",
      extendedDetails: "Inmersión profunda en el ecosistema Big Data y Cloud Computing. Diseño de pipelines de procesamiento masivo mediante Apache Spark y AWS. Especialización en DevSecOps: contenedorización con Docker, análisis estático de malware, implementación de normativas (GDPR) y criptografía aplicada.",
      tags: ["AWS", "Apache Spark", "Docker", "DevSecOps", "GDPR"],
      certificate: { name: "CERT_UPTECH_MOOC.pdf", link: "/certs/uptech_mooc.pdf" }
    },
    {
      date: "[2023 - 2024]",
      title: "Programa Erasmus+",
      subtitle: "Università di Bologna | Italia",
      description: "Inmersión académica internacional. Especialización en minería de datos, inteligencia artificial y sistemas distribuidos.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#a855f7]",
      extendedDetails: "Residencia de 9 meses en Italia. Adaptación a un entorno académico multicultural de alta exigencia. Cursé asignaturas críticas como Machine/Deep Learning, Data & Text Mining, y Distributed Systems. Perfeccionamiento del idioma italiano (nivel B2).",
      tags: ["Adaptabilidad", "Data Science", "Sistemas Distribuidos", "Italiano B2"]
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
            
            {/* NUEVA UI PARA "EXPAND LOGS" (Siempre visible, con efecto terminal) */}
            <div className="mt-4 flex items-center text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 font-mono text-xs font-bold">
              <span className="mr-2">&gt;</span>
              <span className="border-b border-transparent group-hover:border-cyan-400 pb-0.5 transition-all">
                ./view_event_details.sh
              </span>
              <span className="ml-1 w-2 h-3 bg-gray-500 group-hover:bg-cyan-400 animate-pulse"></span>
            </div>
          </div>
        ))}
      </div>

      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-[#050908] border border-cyan-800/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden rounded-lg flex flex-col max-h-[90vh]">
            
            <div className="bg-cyan-900/20 border-b border-cyan-800/50 px-4 py-3 flex justify-between items-center shrink-0">
              <span className="text-cyan-400 text-sm font-mono tracking-widest font-bold">
                ~/logs/event_dump.log
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

            <div className="p-6 md:p-8 overflow-y-auto">
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

              <div className="mb-8">
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

              {/* SECCIÓN EXTERNAL LINKS (Certificados + LinkedIn) */}
              {(activeEvent.certificate || activeEvent.linkedinUrl) && (
                <div className="mt-4 border-t border-gray-800 pt-6">
                  <p className="text-gray-500 text-sm font-bold tracking-widest mb-4 uppercase font-mono">
                    &gt; SECURE_CONNECTIONS:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    
                    {/* Botón de Certificado PDF */}
                    {activeEvent.certificate && (
                      <a 
                        href={activeEvent.certificate.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-cyan-900/10 border border-cyan-800/50 hover:border-cyan-400 hover:bg-cyan-900/30 text-cyan-400 px-4 py-2.5 rounded-sm transition-all duration-300 group"
                      >
                        <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span className="font-mono text-sm tracking-wide">
                          GET {activeEvent.certificate.name}
                        </span>
                      </a>
                    )}

                    {/* Botón de LinkedIn Post */}
                    {activeEvent.linkedinUrl && (
                      <a 
                        href={activeEvent.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-blue-900/10 border border-blue-800/50 hover:border-blue-400 hover:bg-blue-900/30 text-blue-400 px-4 py-2.5 rounded-sm transition-all duration-300 group"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span className="font-mono text-sm tracking-wide">
                          LINKEDIN_BROADCAST
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}