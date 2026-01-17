// app/frameworks/cntnt01.bd.tsx
'use client';

import React from 'react';
import { usePagetContext } from './paget_provd';

interface Props {
  Content: React.ReactNode; // Receives the pre-loaded component
}

export default function Cntnt01Bd({ Content }: Props) {
  const { activeId, setActiveId, totalCount } = usePagetContext();

  const handlePrev = () => setActiveId(activeId === 1 ? totalCount : activeId - 1);
  const handleNext = () => setActiveId(activeId === totalCount ? 1 : activeId + 1);

  return (
    <div className="flex flex-col">
      {/* --- ARROW BAR --- */}
      <div className="flex justify-between items-center bg-slate-400/5 border border-slate-100 rounded-xl px-2 py-1 mb-8">
        <button onClick={handlePrev} className="p-2 hover:bg-slate-200/50 cursor-pointer">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        <button onClick={handleNext} className="p-2 hover:bg-slate-200/50 cursor-pointer">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="sbcnt-content-area">
        {Content}
      </div>
    </div>
  );
}
