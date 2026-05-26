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

// 1. Nuevos imports
import BootSequence from '../components/BootSequence';
import ProjectShowcase from '../components/ProjectShowcase';
import { Stardos_Stencil } from 'next/font/google';
import StarBackground from '@/components/StarBackground';

export default function Home() {
  // 2. Estado para controlar si estamos en la secuencia de carga
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="bg-transparent min-h-screen text-green-400 font-mono selection:bg-cyan-900 selection:text-cyan-100 relative overflow-x-hidden">
      
      <StarBackground /> {/* Fondo de estrellas animado */}

      {/* 3. El Preloader: solo se destruye cuando termina su secuencia */}
      {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}
      
      
      <CustomCursor />
      <HiddenTerminal />
      <NavBar />

      <section id="hero" className="relative h-screen w-full">
        <div className="absolute top-8 left-8 z-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase animate-pulse">
            Alejandro Romero
          </h1>
          <p className="text-cyan-400 mt-2 text-xl">
            Ingeniería Informática · Ciberseguridad · DevSecOps
          </p>
        </div>
        <HeroScene />
      </section>

      <section className="max-w-5xl mx-auto py-24 px-6 space-y-64 pb-64">
        
        <div id="about" className="...">
           <DecryptText text="~/sobre-mi.txt" className="..." />
           <DecryptText text="Ingeniero Informático con especial interés..." className="..." />
        </div>

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

        {/* 4. Nuevo bloque de Proyectos */}
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