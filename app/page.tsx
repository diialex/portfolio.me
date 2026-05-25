import HeroScene from '../components/Hero3D';
import SkillsMatrix from '../components/SkillsMatrix';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import OffGridActivities from '@/components/OffGridActivities';
import NavBarS from '@/components/NavBar';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-green-400 font-mono selection:bg-cyan-900 selection:text-cyan-100">
      
      <NavBarS />

      {/* SECCIÓN 1: Portada 3D */}
      <section id="hero" className="relative h-screen w-full">
        {/* nombre flotando sobre el modelo 3D */}
        <div className="absolute top-8 left-8 z-10 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase animate-pulse">
            Alejandro Romero
          </h1>
          <p className="text-cyan-400 mt-2 text-xl">
             Ingeniería Informática · Ciberseguridad · Lascosa
          </p>
        </div>
        
        {/* hero3D code */}
        <HeroScene />
      </section>

      {/* SECCIÓN 2: CV */}
      <section className="max-w-5xl mx-auto py-24 px-6 space-y-32">
        <div className="border border-green-800/50 bg-green-900/10 p-8 shadow-[0_0_15px_rgba(0,255,204,0.1)]">
          <h2 className="text-2xl text-cyan-400 mb-4 border-b border-cyan-800 pb-2">~/sobre-mi.txt</h2>
          <p className="text-gray-300 leading-relaxed">
            Ingeniero Informático con especial interés en la ciberseguridad, infraestructura IT y sistemas inteligentes. 
            Combino desarrollo de software con análisis de seguridad física además de señales (RFID). Curioso, autodidacta y resolutivo.
          </p>
        </div>

        {/* SECCIÓN 3: Skills Matrix */}
        <section>
          {/* <h2 className="text-2xl text-cyan-400 mb-8 border-b border-cyan-800 pb-2">~/skills-matrix.txt</h2> */}
          <SkillsMatrix />

          {/* SECCIÓN 4: Experience Timeline */}
          <ExperienceTimeline />

          {/* SECCIÓN 5: Off-Grid Activities */}
          <OffGridActivities />
        </section>


      </section>
      
    </main>
  );
}