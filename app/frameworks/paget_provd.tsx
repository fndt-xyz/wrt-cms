// app/frameworks/paget_provd.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { activeSbcnt } from './cntnt01_mnfst'; 

interface PagetContextType {
  activeId: number;
  setActiveId: (id: number) => void;
  SbTitle: string;               // New: Shared Title Data
  setSbTitle: (t: string) => void; // New: Title Update Function
  totalCount: number;
  activeSbcnt: string[]; 
}

const PagetContext = createContext<PagetContextType | undefined>(undefined);

export function PagetProvd({ children }: { children: ReactNode }) {
  // Existing state for Left/Right sync
  const [activeId, setActiveId] = useState(1);
  
  // New state for Title sync
  const [SbTitle, setSbTitle] = useState(""); 

  const totalCount = activeSbcnt.length;

  return (
    <PagetContext.Provider value={{ 
      activeId, 
      setActiveId, 
      SbTitle,    
      setSbTitle, 
      totalCount, 
      activeSbcnt 
    }}>
      {children}
    </PagetContext.Provider>
  );
}

export const usePagetContext = () => {
  const context = useContext(PagetContext);
  if (!context) throw new Error('usePagetContext error');
  return context;
};
