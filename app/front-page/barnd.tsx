// app/front-page/barnd.tsx
'use client';
import React, { useRef } from 'react';
import { featuredItems } from './fp-mnfst';
import { loadModule } from './loader';
import './frpgc.css';

export default function Barnd() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Dragging State Refs (Prevents unnecessary re-renders)
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    
    // Switch to auto for instant response during drag
    scrollRef.current.style.scrollBehavior = 'auto'; 
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth'; 
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Sensitivity multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="carousel-wrapper">
      {/* Navigation Arrows */}
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={() => scroll('left')} className="carousel-nav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button onClick={() => scroll('right')} className="carousel-nav-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Main Scroll Container */}
      <div 
        className="carousel-container" 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {featuredItems.map((id) => {
          const ItemContent = loadModule('barnd', id);
          return (
            <div key={id} className="carousel-item">
              <ItemContent />
            </div>
          );
        })}
      </div>
    </div>
  );
}
