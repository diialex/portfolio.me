export default function CircuitSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center w-full opacity-80 pointer-events-none">
      {/* Pista de cobre/datos izquierda */}
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-900 to-cyan-500" />
      
      {/* Nodo central */}
      <div className="mx-4 text-cyan-500 font-mono text-sm tracking-[0.2em] flex items-center gap-2">
        <span className="text-gray-600">//==========[</span>
        <span className="text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse">
          {label}
        </span>
        <span className="text-gray-600">]==========//</span>
      </div>
      
      {/* Pista de cobre/datos derecha */}
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-900 to-cyan-500" />
    </div>
  );
}
