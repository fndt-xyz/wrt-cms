// app/front-page/barnd.01.tsx
import React from 'react';
import Link from 'next/link';

export default function Barnd01() {
  // Generic SVG placeholder matching the 240x180 scale
  const genericSrc = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='180'><rect width='240' height='180' fill='%23f8fafc'/><rect width='60' height='60' x='90' y='60' fill='%23e2e8f0' rx='30'/><text x='50%' y='150' font-family='monospace' font-size='10' fill='%23cbd5e1' text-anchor='middle'>ITEM_01</text></svg>";

  return (
    <Link 
      href="/pages/services" 
      className="block group cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center">        
        
        {/* Image Container */}
        <div className="w-full max-w-[240px] relative aspect-[240/180] overflow-hidden bg-white border border-slate-100 rounded-lg group-hover:border-slate-200 transition-all">
          <img 
            src={genericSrc}
            alt="generic featured item"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        {/* Generic Label */}
        <div className="mt-3 text-center">
          <p className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors ">
            slot_01
          </p>
        </div>
      </div>
    </Link>
  );
}
