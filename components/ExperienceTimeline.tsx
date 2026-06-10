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

  // SECUENCIA DE COLORES: Rojo -> Naranja -> Amarillo -> Verde -> Azul -> Morado
  const timelineEvents = [
    {
      date: "[JUN 2026]",
      title: "Grado en Ingeniería Informática",
      subtitle: "Universidad Pablo de Olavide (UPO)",
      description: "Finalización del grado y defensa del Trabajo de Fin de Grado (TFG).",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Culminación de una extensa etapa académica universitaria con la exposición del TFG (Sistema Inteligente para el cálculo semántico mediante IA/NLP). Formación integral abarcando arquitectura de software, sistemas distribuidos, seguridad, bases de datos y algoritmos avanzados.",
      tags: ["Ingeniería de Software", "Sistemas de Información", "IA", "Arquitectura IT"]
    },
    {
      date: "[30 MAR 2026]",
      title: "Cátedra Ciberdefensa: MOOC Ciberseguridad",
      subtitle: "Universidad de Málaga (1ª Edición)",
      description: "315 horas de docencia asíncrona abarcando 14 módulos de protección, análisis y criptografía.",
      iconColor: "bg-orange-500",
      glow: "shadow-[0_0_10px_#f97316]",
      extendedDetails: "Finalizado con éxito. Programa avanzado incluyendo: Fundamentos de Ciberseguridad, Criptografía aplicada, Ingeniería Social, Seguridad en Redes, Protección avanzada en sistemas, Programación Segura, Administración de confianza/reputación, Privacidad, Seguridad en Sistemas Ciberfísicos (CPS), Seguridad Hardware, Análisis estático de malware, Computación Post-cuántica y Soluciones Blockchain e IA seguras.",
      tags: ["Malware Analysis", "Post-Quantum", "Hardware Security", "Blockchain"],
      certificate: { name: "CERT_MOOC_UMA_2026.pdf", link: "/certs/mooc_uma.pdf" }
    },
    {
      date: "[12-13 NOV 2025]",
      title: "Talent4Cyber Hackathon & CTF",
      subtitle: "Competición de Ciberseguridad Ofensiva",
      description: "Resolución de retos avanzados de criptografía, forense de drones e interceptación de comunicaciones.",
      iconColor: "bg-yellow-500",
      glow: "shadow-[0_0_10px_#eab308]",
      extendedDetails: "Participación destacada en el CTF de CyberTalent. Resolución de desafíos orientados a entornos críticos y aeroespaciales: análisis forense de sistemas aéreos no tripulados (Drone Autopsy / Blackbox), ingeniería inversa de cifrados por fuerza bruta (Deadlock) e inyección de código (FailSafe Injection). Manejo intensivo de Python para la desencriptación de payloads (Encrypted Flight) y análisis de paquetes de red (Packet on Target).",
      tags: ["Drone Forensics", "Cryptography", "Reverse Engineering", "Python"],
      certificate: { name: "CERT_CYBERTALENT_2025.pdf", link: "/certs/cybertalent.pdf" },
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-cybertalent"
    },
    {
      date: "[NOV 2025]",
      title: "Hackathon INCIBE",
      subtitle: "Instituto Nacional de Ciberseguridad | Oviedo",
      description: "Diseño de arquitecturas de ciberresiliencia SaaS para PYMES.",
      iconColor: "bg-green-500",
      glow: "shadow-[0_0_10px_#22c55e]",
      extendedDetails: "Diseño conceptual y prototipado rápido de una arquitectura de software como servicio (SaaS) enfocada en dotar de capacidades de ciberresiliencia a pequeñas y medianas empresas. Trabajo colaborativo bajo presión extrema compitiendo a nivel nacional.",
      tags: ["SaaS Architecture", "Ciberresiliencia", "Cloud Security", "Fast-Prototyping"],
      certificate: { name: "CERT_HACKOVIEDO_2025.pdf", link: "/certs/oviedo.pdf" },
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-hackovid"
    },
    {
      date: "[NOV 2025]",
      title: "3º Puesto CTF - SecAdmin",
      subtitle: "Conferencia de Seguridad de la Información | Sevilla",
      description: "Tercera posición en competición técnica de ciberseguridad ofensiva y defensiva.",
      iconColor: "bg-blue-500",
      glow: "shadow-[0_0_10px_#3b82f6]",
      extendedDetails: "Participación en el Capture The Flag (CTF) de la conferencia SecAdmin. Resolución de retos en entornos controlados bajo presión, aplicando técnicas de pentesting, esteganografía, criptografía y análisis forense. Demostración de trabajo en equipo y pensamiento lateral.",
      tags: ["CTF", "Offensive Security", "Forense Digital", "Teamwork"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-secadmin"
    },
    {
      date: "[OCT - DIC 2025]",
      title: "Programa Sputnik",
      subtitle: "Talento Joven & Tecnologías Exponenciales",
      description: "Seleccionado como talento de alto potencial para formación en liderazgo y visión de futuro.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#a855f7]",
      extendedDetails: "Inmersión en un ecosistema de innovación junto a emprendedores y líderes tecnológicos. Entrenamiento enfocado en el desarrollo de soft skills, liderazgo, visión de negocio y un entendimiento profundo del impacto de las tecnologías exponenciales en el tejido empresarial y la sociedad civil.",
      tags: ["Liderazgo", "Soft Skills", "Innovación", "Tecnologías Exponenciales"],
      certificate: { name: "CERT_SPUTNIK_2025.pdf", link: "/certs/sputnik.pdf" },
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-sputnik"
    },
    {
      date: "[OCT 2025]",
      title: "Programas de Especialización UPTECH",
      subtitle: "UPTECH AI & UPTECH Cyber",
      description: "Formación intensiva y desarrollo de proyectos enfocados en la intersección de la Inteligencia Artificial y la Ciberseguridad.",
      iconColor: "bg-orange-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Seleccionado para participar en la doble vía formativa de UPTECH (Artificial Intelligence & Cybersecurity). Profundización teórica y práctica en el despliegue de modelos de Machine Learning, diseño de arquitecturas seguras y protección de infraestructuras críticas. Exploración de la automatización de amenazas y defensas mediante IA.",
      tags: ["Artificial Intelligence", "Cybersecurity", "Machine Learning", "SecOps"],
      certificates: [
        { name: "CERT_UPTECH_AI.pdf", link: "/certs/uptech_ai.pdf" },
        { name: "CERT_UPTECH_CYBER.pdf", link: "/certs/uptech_cyber.pdf" }
      ]
    },
    {
      date: "[OCT 2025]",
      title: "Voluntariado Técnico - PyConES",
      subtitle: "Conferencia Nacional de Python | España",
      description: "Soporte técnico, organización y networking en el evento de referencia de la comunidad Python.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
      extendedDetails: "Involucración directa en la comunidad tecnológica nacional dando soporte logístico y técnico en la PyConES. Gestión de incidencias, networking con profesionales del sector y asistencia a ponencias sobre desarrollo avanzado, IA y ciberseguridad.",
      tags: ["Comunidad IT", "Python", "Networking", "Event Management"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-pycones"
    },
    {
      date: "[5 OCT 2025]",
      title: "NASA Space Apps Challenge",
      subtitle: "Hackathon Internacional",
      description: "Desarrollo de 'Meteor Madness', un simulador espacial interactivo.",
      iconColor: "bg-yellow-500",
      glow: "shadow-[0_0_10px_#f97316]",
      extendedDetails: "Desarrollo de un simulador interactivo 3D que modela impactos de asteroides y trayectorias espaciales. El sistema consume, filtra y renderiza la API NEO (Near Earth Object) de la NASA para transformar Big Data aeroespacial en información visual accesible.",
      tags: ["APIs REST", "Three.js", "Data Processing", "Hackathon"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-nasa"
    },
    {
      date: "[JUL 2025]",
      title: "Cyber Bootcamp Google-UMA",
      subtitle: "Programa de Alto Rendimiento (70h)",
      description: "Entrenamiento táctico intensivo impartido por expertos del sector.",
      iconColor: "bg-green-500",
      glow: "shadow-[0_0_10px_#eab308]",
      extendedDetails: "Completado satisfactoriamente (Top 100). Competencias avanzadas orientadas a la prevención, detección y respuesta. Temario Módulo Avanzado: Identidad Digital, Seguridad 5G, Privacidad, Sistemas Ciberfísicos, Seguridad de Redes, Análisis Malware, Seguridad Web/Hardware, Informática Forense, DevSecOps, Criptografía Post-cuántica, Hacking Ético, OSINT y Gestión de Ciberincidentes.",
      tags: ["DevSecOps", "Forense Digital", "Hacking Ético", "OSINT"],
      certificate: { name: "CERT_GOOGLE_UMA_2025.pdf", link: "/certs/cyberbootcamp.pdf" }
    },
    {
      date: "[2023 - 2024]",
      title: "Programa Erasmus+",
      subtitle: "Università di Bologna | Italia",
      description: "Inmersión académica internacional. Especialización en sistemas distribuidos y Data Science.",
      iconColor: "bg-blue-500",
      glow: "shadow-[0_0_10px_#22c55e]",
      extendedDetails: "Residencia de 9 meses en Italia. Adaptación a un entorno académico multicultural. Cursé asignaturas críticas como Machine/Deep Learning, Data & Text Mining, Vision Articial, Big Data, Intelligent Systems Engieering y Distributed Systems. Perfeccionamiento del idioma italiano (nivel B2).",
      tags: ["Adaptabilidad", "Data Science", "Sistemas Distribuidos", "Italiano B2"]
    },
    {
      date: "[ENE 2022]",
      title: "oGathon 4.0",
      subtitle: "Hackathon de Innovación Universitaria",
      description: "Primera inmersión en hackathons competitivos de desarrollo rápido.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#3b82f6]",
      extendedDetails: "Participación en el maratón de ciberseguridad, IA y algoritmica. Trabajo en equipo bajo resolviendo los diferentes retos, optimizacion de algoritmos tecnológicos contra reloj y retos de ciberseguridad web e inteligencia artificial .",
      tags: ["Prototipado", "Agile", "Emprendimiento", "Hackathon"],
      linkedinUrl: "https://linkedin.com/in/tu-perfil/post-ogathon"
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
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>system_logs.log
      </h2>
      
      <div className="relative border-l border-gray-800 ml-3 space-y-12">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className="relative pl-8 group timeline-node cursor-pointer"
            onClick={() => setActiveEvent(event)}
          >
            {/* EL DOT CON LA SECUENCIA DE COLORES */}
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
            
            <p className="text-gray-400 leading-relaxed text-sm bg-black/40 p-4 border border-gray-800/50 rounded-r-lg group-hover:border-cyan-500/30 transition-all duration-300">
              {event.description}
            </p>
            
            {/* UI PARA "EXPAND LOGS" */}
            <div className="mt-4 flex items-center text-gray-600 group-hover:text-cyan-400 transition-colors duration-300 font-mono text-xs font-bold">
              <span className="mr-2">&gt;</span>
              <span className="border-b border-transparent group-hover:border-cyan-400 pb-0.5 transition-all">
                ./view_event_details.sh
              </span>
              <span className="ml-1 w-2 h-3 bg-gray-600 group-hover:bg-cyan-400 animate-pulse"></span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / VENTANA FLOTANTE */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-[#050908] border border-gray-800 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden rounded-sm flex flex-col max-h-[90vh]">
            
            {/* CABECERA DEL MODAL */}
            <div className="bg-black/50 border-b border-gray-800 px-4 py-3 flex justify-between items-center shrink-0">
              <span className="text-gray-500 text-sm font-mono tracking-widest font-bold">
                ~/logs/event_dump.log
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveEvent(null);
                }}
                className="text-gray-500 hover:text-red-500 font-bold text-xl leading-none transition-colors"
              >
                [X]
              </button>
            </div>

            {/* CONTENIDO DEL MODAL */}
            <div className="p-6 md:p-8 overflow-y-auto">
              <span className={`font-bold tracking-widest text-sm mb-1 block font-mono ${activeEvent.iconColor.replace('bg-', 'text-')}`}>
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
                      className="bg-black/50 border border-gray-800 text-gray-300 hover:text-white text-xs px-3 py-1.5 rounded-sm font-mono transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECCIÓN EXTERNAL LINKS (Certificados + LinkedIn) */}
{(activeEvent.certificate || activeEvent.certificates || activeEvent.linkedinUrl) && (
                <div className="mt-4 border-t border-gray-800 pt-6">
                  <p className="text-gray-500 text-sm font-bold tracking-widest mb-4 uppercase font-mono">
                    &gt; SECURE_CONNECTIONS:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    
                    {/* Renderiza certificado único (retrocompatibilidad) */}
                    {activeEvent.certificate && (
                      <a 
                        href={activeEvent.certificate.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black/40 border border-gray-700 hover:border-cyan-500 hover:bg-cyan-900/20 text-gray-300 hover:text-cyan-400 px-4 py-2.5 rounded-sm transition-all duration-300 group"
                      >
                        <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span className="font-mono text-sm tracking-wide">
                          GET {activeEvent.certificate.name}
                        </span>
                      </a>
                    )}

                    {/* Renderiza Múltiples certificados (Ej: UPTECH) */}
                    {activeEvent.certificates && activeEvent.certificates.map((cert: any, index: number) => (
                      <a 
                        key={index}
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black/40 border border-gray-700 hover:border-cyan-500 hover:bg-cyan-900/20 text-gray-300 hover:text-cyan-400 px-4 py-2.5 rounded-sm transition-all duration-300 group"
                      >
                        <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span className="font-mono text-sm tracking-wide">
                          GET {cert.name}
                        </span>
                      </a>
                    ))}

                    {/* Botón de LinkedIn Post */}
                    {activeEvent.linkedinUrl && (
                      <a 
                        href={activeEvent.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black/40 border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 text-gray-300 hover:text-blue-400 px-4 py-2.5 rounded-sm transition-all duration-300 group"
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