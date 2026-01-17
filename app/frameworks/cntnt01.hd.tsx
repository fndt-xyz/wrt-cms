// app/frameworks/cntnt01.hd.tsx
'use client';
import { usePagetContext } from './paget_provd';

export function CntntHd({ fallback }: { fallback: string }) {
  const { SbTitle } = usePagetContext();
  return <>{SbTitle || fallback}</>;
}
