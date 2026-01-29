// app/frameworks/cntnt02.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePagetContext } from './paget_provd';
import './cntntc.css'; // Import the local CSS

const GENERIC_TERM = "sub content"; 

export default function Cntnt02() {
  const { activeId, setActiveId, activeSbcnt } = usePagetContext();
  const [titles, setTitles] = useState<Record<string, string>>({});

  useEffect(() => {
    activeSbcnt.forEach((fileNum) => {
      import(`./cntnt01.${fileNum}`)
        .then((mod) => {
          if (mod.sbcntTitle) {
            setTitles((prev) => ({ ...prev, [fileNum]: mod.sbcntTitle }));
          }
        })
        .catch(() => {});
    });
  }, [activeSbcnt]);

  return (
    <div className="right-col-links-style">
      <h2 className="right-col-link-h2">index</h2>
      
      <div className="link-button-container">
        {activeSbcnt.map((fileNum, index) => {
          const itemNumber = index + 1;
          const isActive = activeId === itemNumber;
          const displayTitle = titles[fileNum] || GENERIC_TERM;

          return (
            <button
              key={fileNum}
              onClick={() => setActiveId(itemNumber)}
              // Using standard CSS classes instead of long Tailwind strings
              className={`link-item-btn ${isActive ? 'active' : 'inactive'}`}
            >
              {displayTitle}
            </button>
          );
        })}
      </div>
    </div>
  );
}
