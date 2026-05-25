export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: "Ciberseguridad & Auditoría",
      skills: ["Nmap", "Wireshark", "Metasploit", "Magerit", "OSINT", "Forense Digital"],
      borderColor: "border-red-500",
      textColor: "text-red-400",
    },
    {
      title: "Hardware & RF",
      skills: ["Flipper Zero", "Proxmark III", "HackRF", "Impresión 3D", "Señales RFID/NFC"],
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
    },
    {
      title: "Desarrollo & Backend",
      skills: ["Java", "Python", "C", "Next.js", "React", "PHP", "Spring", "Flask"],
      borderColor: "border-cyan-500",
      textColor: "text-cyan-400",
    },
    {
      title: "Infraestructura & DevSecOps",
      skills: ["Docker", "Jenkins", "Linux (Parrot/Ubuntu)", "Bash Scripting", "GitHub Actions"],
      borderColor: "border-green-500",
      textColor: "text-green-400",
    },
  ];

  return (
    <div id="skills" className="w-full">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>capabilities_matrix.sh
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`p-6 bg-black/50 border border-gray-800 hover:${category.borderColor} transition-colors duration-300 group`}
          >
            <h3 className={`text-xl font-semibold ${category.textColor} mb-4 flex items-center`}>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2">&gt;</span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="px-3 py-1 bg-gray-900 text-gray-300 text-sm border border-gray-800 group-hover:border-gray-600 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
