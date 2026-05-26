'use client'
import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);

  const bootLogs = [
    "Loading kernel modules...",
    "Mounting root file system [OK]",
    "Starting system logger [OK]",
    "Initializing hardware sensors [OK]",
    "Loading WebGL context...",
    "Compiling 3D shaders [OK]",
    "Establishing WebSocket protocols [OK]",
    "Decrypting user payload...",
    "ACCESS GRANTED. Initializing UI..."
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      // 1. Verificamos que no nos salgamos del array antes de hacer nada
      if (currentIndex >= bootLogs.length) {
        clearInterval(interval);
        return;
      }

      // 2. Extraemos el log de forma segura
      const nextLog = bootLogs[currentIndex];
      setLogs((prev) => [...prev, nextLog]);
      currentIndex++;

      // 3. Cuando llegamos al final, activamos la salida
      if (currentIndex === bootLogs.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 1000);
        }, 500);
      }
    }, 150);

    // 4. Cleanup vital para que el Strict Mode de React no lance dos intervalos a la vez
    return () => clearInterval(interval);
  }, [onComplete]); // Añadimos onComplete a las dependencias por buenas prácticas

  return (
    <div 
      className={`fixed inset-0 z-[999999] bg-black text-green-500 font-mono p-8 flex flex-col justify-end transition-opacity duration-1000 pointer-events-none ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="space-y-1 mb-12">
        {logs.map((log, index) => (
          // 5. El "chaleco antibalas": log && log.includes() evita que crashee si se cuela un undefined
          <div key={index}>
            <span className="text-gray-500">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>{' '}
            {log && log.includes('[OK]') ? (
              <span className="text-cyan-400">{log}</span>
            ) : log && log.includes('ACCESS GRANTED') ? (
              <span className="text-green-400 font-bold">{log}</span>
            ) : (
              <span className="text-gray-300">{log}</span>
            )}
          </div>
        ))}
        {!isFading && <div className="w-2 h-4 bg-green-500 animate-pulse mt-2" />}
      </div>
    </div>
  );
}