'use client'

interface SkillCategory {
  title: string;
  skills: string[];
  accent: string;
  bgHover: string;
  modelPath?: string;
  modelScale?: number;
}

export default function SkillsMatrix() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Ciberseguridad & Auditoría",
      skills: ["Nmap", "Wireshark", "OSINT", "Análisis Malware", "Iptables", "Forense", "Magerit / ENS / LOPD"],
      accent: "text-red-400 border-red-500",
      bgHover: "hover:border-red-500"
    },
    {
      title: "Sistemas & Hardware",
      skills: ["Linux (Parrot, Ubuntu)", "Bash Scripting", "ROS2", "Arduino", "VirtualBox"],
      accent: "text-cyan-400 border-cyan-500",
      bgHover: "hover:border-cyan-500"
    },
    {
      title: "Desarrollo & Bases de Datos",
      skills: ["Python", "C", "Java", "CUDA", "Oracle / MySQL", "MongoDB", "Qdrant"],
      accent: "text-yellow-400 border-yellow-500",
      bgHover: "hover:border-yellow-500"
    },
    {
      title: "Data, IA & Aeroespacial",
      skills: ["AWS", "Apache Spark", "NLP", "Scikit-Learn", "Matlab-Simulink"],
      accent: "text-green-400 border-green-500",
      bgHover: "hover:border-green-500"
    },
    {
      title: "DevOps, QA & CI/CD",
      skills: ["Docker", "Jenkins", "GitHub Actions", "Selenium", "jMeter"],
      accent: "text-blue-400 border-blue-500",
      bgHover: "hover:border-blue-500"
    },
    {
      title: "Arquitectura & Metodologías",
      skills: ["FastAPI", "React / Next.js", "Laravel", "Microservicios", "Metodologías Ágiles"],
      accent: "text-purple-400 border-purple-500",
      bgHover: "hover:border-purple-500"
    }
  ];

  const legacySkills = [
    "PHP", "Ruby", "Struts2", "Hibernate", "JDBC", "Maven", 
    "Doxygen", "Microsoft Project", "Gantt", "HTML5/CSS3", 
    "TailwindCSS", "Bootstrap"
  ];

  return (
    <div id="skills" className="w-full">
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>capabilities_matrix.sh
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`bg-[#050908] border border-gray-800 p-6 rounded-sm transition-all duration-300 ${category.bgHover}`}
          >
            <h3 className={`text-lg font-bold mb-4 font-mono ${category.accent.split(' ')[0]}`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-black/50 border border-gray-700 text-gray-300 text-xs px-2 py-1 rounded-sm font-mono hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BLOQUE LEGACY SIEMPRE VISIBLE */}
      <div className="mt-8 bg-[#050908] border border-gray-800 rounded-sm p-5 w-full">
        <p className="text-gray-500 font-mono text-xs mb-4 select-none flex gap-2">
          <span className="text-green-500">root@system</span>:
          <span className="text-blue-400">~/archive</span>$ cat legacy_and_misc.log
        </p>
        <p className="text-gray-600 font-mono text-xs mb-4 italic">
          // Módulos complementarios, frameworks legacy y herramientas de gestión de proyectos mantenidas en archivo.
        </p>
        <div className="flex flex-wrap gap-2">
          {legacySkills.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-gray-500 font-mono text-xs bg-black/40 px-2 py-1 rounded-sm border border-gray-800/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}