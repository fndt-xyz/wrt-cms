// components/contactn.tsx

"use client";

import { useEffect, useState } from 'react';

export const ContactSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const contactGroups = [
    { 
      label: "prim_contact", 
      numbers: ["+60 000 0000 0000"] 
    },
    { 
      label: "scnd_contact", 
      numbers: ["+60 000 0000 0000"] 
    },
  ];

  const handleCopy = (phone: string) => {
    if (typeof window !== "undefined") {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        navigator.clipboard.writeText(phone);
        console.log("Copied:", phone);
      }
    }
  };

  if (!isClient) return null; // Prevents hydration flicker

  return (
    <div className="contact-grid">
      {contactGroups.map((group, gIndex) => (
        <div key={gIndex} className="contact-row">
          <div className="contact-label text-slate-400">{group.label}</div>
          <div className="contact-value-stack">
            <span className="text-slate-400">:</span>
            <div className="flex flex-col gap-1">
              {group.numbers.map((num, nIndex) => {
                const cleanNumber = num.replace(/\D/g, '');
                return (
                  <a 
                    key={nIndex}
                    href={`https://wa.me/${cleanNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="wa-link"
                    onClick={() => handleCopy(num)}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="wa-icon" />
                    <span className="font-mono">{num}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
