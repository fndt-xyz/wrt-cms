// app/front-page/herond.ctr.01.tsx
import React from 'react';

export default function HerondCtr({ slides, currentIndex, goToSlide }: any) {
  return (
    /* We use your original CSS class here to ensure it renders in the right spot */
    <div className="indicator-container pointer-events-auto">
      {/* Changed (_ , index) to (_: any, index: number) to satisfy strict build checks */}
      {slides.map((_: any, index: number) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation(); // Prevents the click from triggering a "drag"
            goToSlide(index);
          }}
          className={`h-1.5 transition-all duration-300 rounded-full mx-1 ${
            currentIndex === index 
              ? "w-8 bg-slate-700 opacity-100" 
              : "w-4 bg-slate-400 opacity-50 hover:opacity-80"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
