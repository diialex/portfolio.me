'use client' // Necesario porque ahora usamos useState en la página principal
import { useState } from 'react';

import HeroScene from '../components/Hero3D';
import SkillsMatrix from '../components/SkillsMatrix';
import ExperienceTimeline from '../components/ExperienceTimeline';
import OffGridActivities from '../components/OffGridActivities';
import NavBar from '../components/NavBar';
import DecryptText from '../components/DecryptText';
import HiddenTerminal from '../components/HiddenTerminal';
import CustomCursor from '../components/CustomCursor';
import CircuitSeparator from '../components/CircuitSeparator';
import Footer from '../components/Footer';

// Nuevos imports
import BootSequence from '../components/BootSequence';
import ProjectShowcase from '../components/ProjectShowcase';
import StarBackground from '@/components/StarBackground';

export default function Home() {
  // Estado para controlar si estamos en la secuencia de carga
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="bg-transparent min-h-screen text-green-400 font-mono selection:bg-cyan-900 selection:text-cyan-100 relative overflow-x-hidden">
      
      <StarBackground /> {/* Fondo de estrellas animado */}

      {/* El Preloader: solo se destruye cuando termina su secuencia */}
      {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}
      
      <CustomCursor />
      <HiddenTerminal />
      <NavBar />

      {/* =========================================
          CABECERA FIJA (Nombre y Rol)
          ========================================= */}
      <header className="absolute top-8 left-8 md:left-12 z-20 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase animate-pulse">
          Alejandro Romero
        </h1>
        <p className="text-cyan-400 mt-2 text-xl">
          Ingeniería Informática · Ciberseguridad · DevSecOps
        </p>
      </header>

      {/* =========================================
          GRID PRINCIPAL: Sobre Mí (Izquierda) | Globo (Derecha)
          ========================================= */}
      <section id="hero" className="relative h-screen w-full flex items-center pt-32 px-8 md:px-12 lg:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
          
          {/* COLUMNA IZQUIERDA: Texto puro y duro */}
          <div id="about" className="text-green-400 font-mono text-lg md:text-xl">
             <DecryptText 
               text="~/sobre-mi.txt" 
               className="text-2xl md:text-3xl text-green-500 mb-6 font-bold block" 
             />
             <DecryptText 
               text="Ingeniero Informático con especial interés en la ciberseguridad, infraestructura IT y sistemas inteligentes. Combino el desarrollo de software con el análisis de seguridad física y señales. Curioso, autodidacta y resolutivo." 
               className="leading-relaxed block" 
             />
          </div>

          {/* COLUMNA DERECHA: Renderizado 3D */}
          <div className="relative w-full h-[50vh] lg:h-[70vh]">
            <HeroScene />
          </div>

        </div>
      </section>

      {/* =========================================
          RESTO DE LA PÁGINA
          ========================================= */}
      <section className="max-w-5xl mx-auto py-24 px-6 space-y-64 pb-64 relative z-10">
        
        <div>
          <CircuitSeparator label="SYS.CAPABILITIES" />
          <div className="mt-24">
            <SkillsMatrix />
          </div>
        </div>

        <div>
          <CircuitSeparator label="EVENT.LOGS" />
          <div className="mt-24">
            <ExperienceTimeline />
          </div>
        </div>

        <div>
          <CircuitSeparator label="ACTIVE.DEPLOYMENTS" />
          <div className="mt-24">
            <ProjectShowcase />
          </div>
        </div>

        <div>
          <CircuitSeparator label="OFF_GRID.MODULES" />
          <div className="mt-24">
            <OffGridActivities />
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}