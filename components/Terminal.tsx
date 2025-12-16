import React, { useEffect, useRef, useState } from 'react';

interface TerminalProps {
  logs: string[];
}

export const Terminal: React.FC<TerminalProps> = ({ logs }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-black border-l-4 border-hl-orange p-4 font-mono text-xs sm:text-sm text-green-500 h-64 overflow-y-auto shadow-[0_0_15px_rgba(255,148,0,0.1)] relative" ref={scrollRef}>
       <div className="absolute top-2 right-2 text-hl-orange opacity-50">TERM-882</div>
      {logs.map((log, index) => (
        <div key={index} className="mb-1">
          <span className="opacity-50 mr-2">{new Date().toLocaleTimeString()} &gt;</span>
          {log}
        </div>
      ))}
      <div className="animate-pulse">_</div>
    </div>
  );
};