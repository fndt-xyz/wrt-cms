// app/frameworks/cntnt01.tsx
'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import './cntntc.css';
import { usePagetContext } from './paget_provd';
import Cntnt01Bd from './cntnt01.bd';

export default function Cntnt01() {
  const { activeId, activeSbcnt, setSbTitle } = usePagetContext();
  const fileId = activeSbcnt[activeId - 1];

  // Logic stays here: It loads the file and updates the header title
  const DynamicContent = useMemo(() => {
    return dynamic(
      () => import(`./cntnt01.${fileId}`).then((mod) => {
        setSbTitle(mod.coolSbTitle || ""); // Update the Header
        return mod.default;
      }).catch(() => {
        setSbTitle("");
        return () => <div className="sbcnt-content-area" />;
      }),
      { ssr: false }
    );
  }, [fileId, setSbTitle]);

  // Pass the loaded component down to the Body
  return <Cntnt01Bd Content={<DynamicContent />} />;
}
