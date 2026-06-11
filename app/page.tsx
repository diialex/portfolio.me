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
      <header className="absolute top-20 md:top-12 left-6 md:left-12 z-20 pointer-events-none w-full pr-6">
        {/* text-3xl en móvil, text-6xl en escritorio */}
        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-widest uppercase animate-pulse leading-tight">
          Alejandro Romero Delgado
        </h1>
        <p className="text-cyan-400 mt-2 text-sm md:text-xl font-mono">
          &gt; Ingeniería Informática · Ciberseguridad · DevSecOps
        </p>
      </header>

      {/* =========================================
          GRID PRINCIPAL: Sobre Mí (Izquierda) | Globo (Derecha)
          ========================================= */}
      <section id="hero" className="relative min-h-screen w-full flex items-center pt-56 pb-20 md:pt-32 lg:pt-0 px-6 md:px-12 lg:px-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center mt-10 md:mt-0">
          
          {/* COLUMNA IZQUIERDA: Texto puro y duro */}
          <div id="about" className="text-green-400 font-mono text-base md:text-lg lg:text-xl">
             <DecryptText 
               text="~/sobre-mi.txt" 
               className="text-xl md:text-3xl text-green-500 mb-4 md:mb-6 font-bold block" 
             />
             <DecryptText 
               text="Ingeniero Informático especializado en Ciberseguridad, Infraestructuras y Sistemas Inteligentes." 
               className="leading-relaxed block mb-4 font-semibold text-gray-100" 
             />
             <DecryptText 
               text="Me encanta todo lo relacionado con la tecnología y las máquinas. Desarrollo mis propias herramientas y experimentos, desde captura de señales en hardware físico (SDR, Robótica) hasta su procesamiento y fortificación en arquitecturas distribuidas. Acostumbrado a auditar sistemas complejos, detectar vulnerabilidades y diseñar soluciones para mis entornos." 
               className="leading-relaxed block text-gray-400" 
             />
          </div>

          {/* COLUMNA DERECHA: Renderizado 3D */}
          <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[70vh]">
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