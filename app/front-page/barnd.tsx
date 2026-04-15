// app/front-page/barnd.tsx
'use client';
import React, { useRef } from 'react';
import { featuredItems } from './fp-mnfst';
import { loadModule } from './loader';
import './frpgc.css';

export default function Barnd() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper">
      {/* Navigation Arrows */}
      <div className="flex justify-end gap-2 mb-4">
         <button onClick={() => scroll('left')} className="carousel-nav-btn">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
         </button>
         <button onClick={() => scroll('right')} className="carousel-nav-btn">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
         </button>
      </div>

      {/* Pure native scroll container */}
      <div className="carousel-container" ref={scrollRef}>
        {featuredItems.map((id) => {
          const ItemContent = loadModule('barnd', id);
          return (
            <div 
              key={id} 
              className="carousel-item border border-slate-100 bg-white p-4 rounded-none shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200"
            >
              <ItemContent />
            </div>
          );
        })}
      </div>
    </div>
  );
}