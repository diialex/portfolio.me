'use client'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HiddenTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'º' || e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Animación de despliegue desde ABAJO
  useEffect(() => {
    if (isOpen) {
      setHistory([
        'INICIANDO PROTOCOLO DE CONEXIÓN...',
        'ESTABLECIENDO TÚNEL SEGURO SEVILLA ...',
        'ACCESO CONCEDIDO. WELCOME, USER.',
        'Escribe "help" para ver los comandos disponibles.'
      ]);
      
      // Emerge desde el 100% (fuera de la pantalla por abajo) hacia el 0%
      gsap.fromTo(terminalRef.current, 
        { y: '100%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `root@command-center:~# ${cmd}`];

    setHistory(newHistory);
    setInput('');

    setTimeout(() => {
      let response = '';
      
      switch (cmd) {
        case 'help':
          response = 'Comandos disponibles: whoami, clear, download_cv, hack, scan, exit';
          break;
        case 'whoami':
          response = 'Alejandro Romero Delgado. Ingeniero Informático. buscando el sentido en el caos de los sistemas y sus frecuencias.';
          break;
        case 'clear':
          setHistory([]);
          return;
        case 'download_cv':
          response = '[INFO] Iniciando descarga segura de credenciales (CV)...';
          break;
        case 'hack':
          response = '[ERROR] Acceso denegado. Permisos insuficientes. Este intento ha sido registrado.';
          break;
        case 'scan':
          response = '[INFO] Function Underdevelopment...';
          break;
        case 'exit':

          gsap.to(terminalRef.current, { 
            y: '100%', 
            opacity: 0, 
            duration: 0.4, 
            ease: 'power3.in',
            onComplete: () => setIsOpen(false) 
          });
          return;
        default:
          response = `bash: ${cmd}: command not found`;
      }

      if (response) {
        setHistory((prev) => [...prev, response]);
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={terminalRef}

      className="fixed bottom-0 left-0 w-full z-[100] bg-black/95 backdrop-blur-md border-t border-cyan-500 font-mono text-green-400 p-6 overflow-y-auto h-[50vh] shadow-[0_-10px_30px_rgba(6,182,212,0.1)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20" />
      
      <div className="relative z-10 flex-1 space-y-2 text-sm md:text-base">
        {history.map((line, i) => (
          <div key={i} className={`${line.startsWith('root@') ? 'text-cyan-400' : line.includes('[ERROR]') ? 'text-red-500' : 'text-green-500'}`}>
            {line}
          </div>
        ))}
        <div ref={endOfTerminalRef} />
      </div>
      
      <form onSubmit={handleCommand} className="relative z-10 flex items-center mt-4 pt-4 border-t border-gray-800">
        <span className="text-cyan-400 mr-2 text-sm md:text-base">root@command-center:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400 text-sm md:text-base"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}