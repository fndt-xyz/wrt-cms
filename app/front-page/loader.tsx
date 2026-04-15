// app/front-page/loader.tsx
import dynamic from 'next/dynamic';

export const loadModule = (prefix: string, id: string) => {
  return dynamic(() => import(`./${prefix}.${id}`).catch(() => {
    // Return a blank component if the file doesn't exist
    return () => <div className="hidden" />;
  }), {
    ssr: true, // Keep it fast
    loading: () => <div className="h-full w-full bg-slate-50 animate-pulse" />
  });
};
