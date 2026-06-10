'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CHARS = '!<>-_\\/[]{}—=+*^?#';

export default function DecryptText({ text, className = '' }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  // En lugar de guardar el string completo, guardamos el progreso de la iteración
  const [iteration, setIteration] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          gsap.fromTo(containerRef.current, 
            { y: 15, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
          );

          let currentIter = 0;
          const interval = setInterval(() => {
            currentIter += 1; // Salto mayor para que la desencriptación sea mucho más rápida
            setIteration(currentIter);

            if (currentIter >= text.length) {
              clearInterval(interval);
            }
          }, 20); // Intervalo reducido a 20ms para mayor fluidez
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text, hasAnimated]);

  // Construimos el DOM letra por letra en cada renderizado
  const renderText = () => {
    if (!hasAnimated) return <span className="opacity-0">{text}</span>;

    return text.split('').map((char, index) => {
      // 1. Respetar espacios siempre
      if (char === ' ') return <span key={index}> </span>;

      // 2. Letras ya reveladas (color normal)
      if (index < iteration) return <span key={index}>{char}</span>;

      // 3. Ventana de "scramble": 2 letras revolviéndose en cian
      if (index < iteration + 2) {
        return (
          <span key={index} className="text-cyan-400 opacity-80">
            {CHARS[Math.floor(Math.random() * CHARS.length)]}
          </span>
        );
      }

      // 4. El resto del texto oculto (evita saltos de maquetación y que el texto se salga de la pantalla)
      return <span key={index} className="opacity-0">{char}</span>;
    });
  };

  return (
    <div ref={containerRef} className={`opacity-0 relative ${className}`}>
      {renderText()}
      {/* El cursor parpadeante de terminal que sigue a la animación */}
      {hasAnimated && iteration < text.length && (
        <span className="animate-pulse text-cyan-500 ml-1">█</span>
      )}
    </div>
  );
}