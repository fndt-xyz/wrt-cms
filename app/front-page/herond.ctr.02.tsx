// app/front-page/herond.ctr.02.tsx
import React, { useEffect, useState } from 'react';
import { heroSlides } from './fp-mnfst';

export default function HerondCtr({ currentIndex, goToSlide }: any) {
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    // Function to fetch all titles based on the manifest sequence
    const fetchTitles = async () => {
      const titles = await Promise.all(
        heroSlides.map(async (id) => {
          try {
            // Dynamically import the file based on the ID in manifest
            const mod = await import(`./sldnd.${id}`);
            // Return captt or fallback to "captn"
            return mod.captt || "captn";
          } catch (err) {
            // If file doesn't exist, return "captn"
            return "captn";
          }
        })
      );
      setLabels(titles);
    };

    fetchTitles();
  }, []); // Runs once on mount. If heroSlides changes, it re-syncs.

  return (
    <div className="indicator-container flex items-center justify-center gap-3">
      {labels.map((text, index) => (
        <React.Fragment key={`${index}-${text}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`text-base font-bold tracking-widest transition-all duration-300 lowercase ${
              currentIndex === index 
                ? "text-slate-800 scale-110" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {text}
          </button>
          
          {index < labels.length - 1 && (
            <span className="text-slate-300 select-none">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
