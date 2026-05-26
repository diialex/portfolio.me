'use client'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function DecryptText({ text, className = '' }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // GSAP: Aparecer de abajo hacia arriba suavemente
          gsap.fromTo(containerRef.current, 
            { y: 20, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );

          // Lógica Hacker: Scramble de texto
          let iteration = 0;
          const interval = setInterval(() => {
            setDisplayText(
              text
                .split('')
                .map((letter, index) => {
                  if (index < iteration) return text[index];
                  return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join('')
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3; // Ralentiza el efecto para que se lea mejor
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [text, hasAnimated]);

  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {displayText || text.replace(/./g, '_')}
    </div>
  );
}
