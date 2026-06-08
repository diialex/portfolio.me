'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// 1. Definimos la interfaz para que TypeScript no se queje
interface SkillCategory {
  title: string;
  skills: string[];
  accent: string;
  bgHover: string;
}

export default function SkillsMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Ciberseguridad & Auditoría",
      skills: ["Nmap", "Wireshark", "OSINT", "Análisis Malware", "Iptables", "Forense", "Magerit/ENS/LOPD"],
      accent: "text-red-400 border-red-500",
      bgHover: "hover:border-red-500",
    },
    {
      title: "Sistemas & Hardware",
      skills: ["Linux (Parrot, Ubuntu)", "Bash Scripting", "ROS2", "Arduino", "VirtualBox"],
      accent: "text-cyan-400 border-cyan-500",
      bgHover: "hover:border-cyan-500",
    },
    {
      title: "Desarrollo & Lenguajes",
      skills: ["Python", "C", "Java", "CUDA", "Oracle/MySQL", "MongoDB", "Qdrant"],
      accent: "text-yellow-400 border-yellow-500",
      bgHover: "hover:border-yellow-500",
    },
    {
      title: "Data, IA & Aeroespacial",
      skills: ["AWS", "Apache Spark", "NLP", "Scikit-Learn", "Matlab-Simulink"],
      accent: "text-green-400 border-green-500",
      bgHover: "hover:border-green-500",
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Jenkins", "GitHub Actions", "Selenium", "jMeter"],
      accent: "text-blue-400 border-blue-500",
      bgHover: "hover:border-blue-500",
    },
    {
      title: "Arquitectura & Metodologías",
      skills: ["FastAPI", "React / Next.js", "Laravel", "Microservicios", "Agile"],
      accent: "text-purple-400 border-purple-500",
      bgHover: "hover:border-purple-500",
    }
  ];

  useGSAP(() => {
    gsap.fromTo('.skill-card', 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div id="skills" ref={containerRef} className="w-full py-10">
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-green-800/50 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>capabilities_matrix.sh
      </h2>

      {/* Grid del Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx}
            className={`skill-card bg-[#050908] border p-6 rounded-sm transition-all duration-300 ${cat.accent} ${cat.bgHover}`}
          >
            <h3 className={`text-lg font-bold mb-4 font-mono ${cat.accent.split(' ')[0]}`}>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-gray-900 border border-gray-800 text-gray-300 text-xs px-2 py-1 rounded-sm font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sección de "Ruido" (Lo que llamamos legacy) */}
      <div className="mt-12 border-t border-gray-800 pt-6">
        <p className="text-gray-500 font-mono text-xs mb-2">
          &gt; cat /sys/archive/legacy_and_misc_modules.txt
        </p>
        <p className="text-gray-600 font-mono text-xs leading-relaxed">
          [LOADED_IN_BACKGROUND]: PHP, Ruby, Struts2, Hibernate, JDBC, Maven, Doxygen, Microsoft Project, Gantt, HTML5/CSS3, TailwindCSS, Bootstrap, VirtualBox, VMWare.
        </p>
      </div>
    </div>
  );
}