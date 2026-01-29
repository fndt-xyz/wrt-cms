// app/frameworks/cntnt01.tsx
'use client';

import React, { useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import './cntntc.css';
import { usePagetContext } from './paget_provd';
import Cntnt01Bd from './cntnt01.bd';

export default function Cntnt01() {
  const { activeId, activeSbcnt, setSbTitle } = usePagetContext();
  const fileId = activeSbcnt[activeId - 1];

  // 1. DYNAMIC COMPONENT LOADING ONLY
  // This stays in useMemo but ONLY handles the visual part.
  const DynamicContent = useMemo(() => {
    return dynamic(
      () => import(`./cntnt01.${fileId}`).then((mod) => mod.default)
        .catch(() => () => <div className="sbcnt-content-area" />),
      { ssr: false }
    );
  }, [fileId]);

  // 2. TITLE UPDATE LOGIC (The "Side Effect")
  // This runs after the component is safe and mounted.
  useEffect(() => {
    let isMounted = true;

    const fetchTitle = async () => {
      try {
        const mod = await import(`./cntnt01.${fileId}`);
        if (isMounted) {
          setSbTitle(mod.coolSbTitle || ""); // Successfully updates the title
        }
      } catch (error) {
        if (isMounted) setSbTitle("");
      }
    };

    fetchTitle();

    return () => { isMounted = false; }; // Cleanup
  }, [fileId, setSbTitle]);

  return <Cntnt01Bd Content={<DynamicContent />} />;
}
