'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Centramos la mira y el punto exactamente en las coordenadas (x,y)
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(dotRef.current, { xPercent: -50, yPercent: -50 });

    // quickTo es la herramienta de GSAP optimizada para trackear el ratón sin lag
    const xMoveCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power3.out" });
    
    const xMoveDot = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "power3.out" });
    const yMoveDot = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xMoveCursor(e.clientX);
      yMoveCursor(e.clientY);
      xMoveDot(e.clientX);
      yMoveDot(e.clientY);
    };

    // Detectamos si estamos pasando por encima de un botón o enlace
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName.toLowerCase() === 'button' || 
                          target.tagName.toLowerCase() === 'a' || 
                          target.closest('button') || 
                          target.closest('a');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Mira telescópica exterior (Arrastre suave) */}
      <div 
        ref={cursorRef} 
        className={`fixed top-0 left-0 w-8 h-8 border border-cyan-500 pointer-events-none z-[9999] transition-all duration-300 ${
          isHovering ? 'scale-150 rotate-45 border-cyan-300 bg-cyan-500/20 shadow-[0_0_15px_#22d3ee]' : 'scale-100 rotate-0'
        }`}
      />
      {/* Punto central (Rápido) */}
      <div 
        ref={dotRef} 
        className={`fixed top-0 left-0 w-1 h-1 bg-cyan-400 pointer-events-none z-[10000] transition-opacity duration-300 ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  );
}
