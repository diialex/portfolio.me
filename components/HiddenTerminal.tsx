'use client'
import { useState, useEffect, useRef } from 'react';

export default function HiddenTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'ACCESO CONCEDIDO.',
    'Escribe "help" para ver los comandos disponibles.',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  // Escuchar la combinación de teclas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Abre con la tecla º (Backquote/IntlRo) o ~
      if (e.key === 'º' || e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-focus y auto-scroll
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `root@command-center:~# ${cmd}`];

    switch (cmd) {
      case 'help':
        newHistory.push('Comandos: whoami, clear, download_cv, hack');
        break;
      case 'whoami':
        newHistory.push('T-shaped Engineer. Positivista, nihilista. Buscando el sentido en el caos de los sistemas distribuidos y el hardware.');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'download_cv':
        newHistory.push('Iniciando descarga segura...');
        // Aquí podrías disparar un window.open('/tu-cv.pdf')
        break;
      case 'hack':
        newHistory.push('Iniciando volcado hexadecimal... [ERROR] Permisos insuficientes.');
        break;
      default:
        newHistory.push(`bash: ${cmd}: command not found`);
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm border-b-2 border-cyan-500 font-mono text-green-400 p-6 overflow-y-auto flex flex-col h-[50vh]">
      <div className="flex-1 space-y-2">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('root@') ? 'text-cyan-400' : 'text-green-500'}>
            {line}
          </div>
        ))}
        <div ref={endOfTerminalRef} />
      </div>
      <form onSubmit={handleCommand} className="flex items-center mt-4 border-t border-gray-800 pt-4">
        <span className="text-cyan-400 mr-2">root@command-center:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
}
