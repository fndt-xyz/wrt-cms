// app/front-page/herond.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { heroSlides } from './fp-mnfst';
import { loadModule } from './loader';
import './frpgc.css';
import HerondCtr from './herond.ctr.02'; 

export default function Herond() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const total = heroSlides.length;

  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [isDragging, total]);

  const onStart = (x: number) => {
    setIsDragging(true);
    setStartX(x);
  };
  const onMove = (x: number) => {
    if (!isDragging) return;
    setDragOffset(x - startX);
  };
  const onEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -60) nextSlide();
    if (dragOffset > 60) prevSlide();
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div 
      className="hr-viewport group"
      onTouchStart={(e) => onStart(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onEnd}
      onMouseDown={(e) => onStart(e.pageX)}
      onMouseMove={(e) => onMove(e.pageX)}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
    >
      <div 
        className="hr-track" 
        style={{ 
          transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
          transition: isDragging ? 'none' : 'transform 700ms cubic-bezier(0.2, 0, 0.2, 1)'
        }}
      >
        {heroSlides.map((id) => {
          const SlideContent = loadModule('sldnd', id);
          return (
            <div key={id} className="hr-item">
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="w-full max-w-[480px] relative aspect-[480/360] overflow-hidden rounded-none shadow-md border border-slate-200 bg-white">
                  <SlideContent />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={prevSlide} className="slider-arrow arrow-left hidden md:flex" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <button onClick={nextSlide} className="slider-arrow arrow-right hidden md:flex" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <HerondCtr 
        slides={heroSlides} 
        currentIndex={current} 
        goToSlide={setCurrent} 
      />
    </div>
  );
}