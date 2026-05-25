export default function OffGridActivities() {
  const activities = [
    {
      id: "SYS.KINEMATICS",
      title: "Biomecánica & Combate",
      description: "cardio, calithenics, boxing. disciplina, constancia y trabajo bajo presión.",
      accent: "border-orange-500",
      textAccent: "text-orange-400",
    },
    {
      id: "SYS.MECHANICS",
      title: "Ingeniería Mecánica",
      description: "mantenimiento, restauración y modificación de motocicleta custom propia. operaciones low-level sin depender de talleres.",
      accent: "border-gray-400",
      textAccent: "text-gray-300",
    },
    {
      id: "SYS.WAVEFORMS",
      title: "Procesamiento Acústico",
      description: "trompeta, guiatarra y bateria. Experiencia en música y trabajo en equipo en bandas locales.",
      accent: "border-purple-500",
      textAccent: "text-purple-400",
    },
    {
      id: "SYS.ALGORITHMS",
      title: "Algoritmia & Flujo",
      description: "skate, chess, rubik cube...",
      accent: "border-cyan-500",
      textAccent: "text-cyan-400",
    },
    {
      id: "SYS.OPTICS",
      title: "Óptica & Fabricación",
      description: "fotografía, edición digital (lightroom/premiere) e impresión 3D. creación de piezas, modelado e impresión.",
      accent: "border-green-500",
      textAccent: "text-green-400",
    }
  ];

  return (
    <div id="hobbies" className="w-full">
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
        <span className="text-cyan-500 mr-2">~/</span>off_grid_modules.exe
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((act, index) => (
          <div 
            key={index} 
            className="group relative bg-black/60 border border-gray-800 p-6 overflow-hidden hover:bg-gray-900/50 transition-colors duration-300"
          >
            {/* Efecto de escáner de fondo al hacer hover */}
            <div className={`absolute top-0 left-0 w-1 h-full ${act.accent} opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_currentColor] transition-all`} />
            
            <div className="pl-4">
              <span className={`text-xs font-bold tracking-widest ${act.textAccent} mb-2 block opacity-70`}>
                [{act.id}]
              </span>
              <h3 className="text-lg font-semibold text-gray-100 mb-3 group-hover:text-white transition-colors">
                {act.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {act.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
