export default function ExperienceTimeline() {
  const timelineEvents = [
    {
      date: "[MAY 2026]",
      title: "Deploy: secret",
      subtitle: "Proyecto Personal | Git Main Branch",
      description: "Inicialización y primer push a producción de la arquitectura base. Integración inicial de frontend 3D.",
      iconColor: "bg-cyan-500",
      glow: "shadow-[0_0_10px_#06b6d4]",
    },
    {
      date: "[2026]",
      title: "TFG: Sistema Inteligente ODS",
      subtitle: "Ingeniería Informática | Universidad Pablo de Olavide",
      description: "Desarrollo de un sistema basado en procesamiento de lenguaje natural (NLP) e Inteligencia Artificial para medir la alineación de proyectos con distintos modelos generalizables.",
      iconColor: "bg-green-500",
      glow: "shadow-[0_0_10px_#22c55e]",
    },
    {
      date: "[JUL 2024]",
      title: "Cyber Bootcamp Google-UMA",
      subtitle: "Seleccionado Top 100 Nacional",
      description: "Entrenamiento intensivo en; Identidad digital, OSINT, DevSecOps, análisis de malware, seguridad de redes, criptografía avanzada y hacking ético.",
      iconColor: "bg-red-500",
      glow: "shadow-[0_0_10px_#ef4444]",
    },
    {
      date: "[2023 - 2024]",
      title: "Programa Erasmus+",
      subtitle: "Universidad de Bolonia, Italia",
      description: "Residencia internacional de 9 meses. Perfeccionamiento del italiano (B2) y desarrollo de habilidades de adaptación en entornos multiculturales.",
      iconColor: "bg-purple-500",
      glow: "shadow-[0_0_10px_#a855f7]",
    }
  ];

  return (
    <div id="experience" className="w-full">
      <h2 className="text-3xl font-bold text-white mb-10 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>system_logs.log
      </h2>
      
      {/* Contenedor de la línea con el borde izquierdo */}
      <div className="relative border-l border-gray-700 ml-3 space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative pl-8 group">
            {/* El "Punto" de la línea de tiempo */}
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
