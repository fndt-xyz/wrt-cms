// app/frameworks/cntnt02.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { usePagetContext } from './paget_provd';

// --- CONFIGURATION ---
const GENERIC_TERM = "sub content"; 

export default function Cntnt02() {
  const { activeId, setActiveId, activeSbcnt } = usePagetContext();
  const [titles, setTitles] = useState<Record<string, string>>({});

  // Peek into files to grab sbcntTitle exports
  useEffect(() => {
    activeSbcnt.forEach((fileNum) => {
      import(`./cntnt01.${fileNum}`)
        .then((mod) => {
          if (mod.sbcntTitle) {
            setTitles((prev) => ({ ...prev, [fileNum]: mod.sbcntTitle }));
          }
        })
        .catch(() => {
          /* File doesn't exist; it will use GENERIC_TERM in the render */
        });
    });
  }, [activeSbcnt]);

  return (
    <div className="right-col-links-style">
      <h2 className="right-col-link-h2">index</h2>
      
      <div className="flex flex-col gap-1 mt-4">
        {activeSbcnt.map((fileNum, index) => {
          const itemNumber = index + 1;
          const isActive = activeId === itemNumber;
          
          // Use specific title from file, or the Generic Term
          const displayTitle = titles[fileNum] || GENERIC_TERM;

          return (
            <button
              key={fileNum}
              onClick={() => setActiveId(itemNumber)}
              className={`text-left text-[13px] py-2 px-3 rounded-md transition-all lowercase font-lato border ${
                isActive 
                  ? 'bg-slate-100 text-slate-900 font-bold border-slate-200' 
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-transparent'
              }`}
            >
              {displayTitle}
            </button>
          );
        })}
      </div>
    </div>
  );
}
