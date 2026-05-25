'use client'
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Configuramos el "radar"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección cruza nuestro umbral visual, la marcamos como activa
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Este margen engaña al radar para que dispare el cambio cuando la 
      // sección está más o menos en el centro de la pantalla
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    // Le decimos al radar qué secciones debe vigilar
    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'hero', label: 'ROOT' },
    { id: 'about', label: 'SYS.INFO' },
    { id: 'skills', label: 'CAPABILITIES' },
    { id: 'experience', label: 'EVENT_LOGS' },
    { id: 'hobbies', label: 'OFF_GRID' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // nav lateral oculto en móviles y visible en pantallas grandes (lg)
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
      {/* La línea central del circuito */}
      <div className="absolute right-[5px] top-2 bottom-2 w-[1px] bg-gray-800 -z-10" />

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group relative flex items-center justify-end"
        >
          {/* El texto del menú que aparece al hacer hover o estar activo */}
          <span className={`mr-6 text-xs font-bold tracking-widest transition-all duration-300 ${
            activeSection === item.id 
              ? 'text-cyan-400 opacity-100' 
              : 'text-gray-600 opacity-0 group-hover:opacity-100'
          }`}>
            {activeSection === item.id ? `[${item.label}]` : item.label}
          </span>
          
          {/* El nodo / rombo conector */}
          <div className={`w-3 h-3 border rotate-45 transition-all duration-300 ${
            activeSection === item.id
              ? 'bg-cyan-500 border-cyan-400 shadow-[0_0_10px_#06b6d4] scale-125'
              : 'bg-black border-gray-600 group-hover:border-cyan-800 group-hover:scale-110'
          }`} />
        </button>
      ))}
    </nav>
  );
}
