// components/footern.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ContactSection } from './contactn'; // Import the new component
import "./cmpnt.css";

export const footern = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="nav-ft-container border-t border-slate-50 py-8">
      <div className="inner-wrap footer-inner">
        
        {/* Left Side Container */}
        <div className="flex flex-col gap-4">
          <p className="lowercase text-[10px] sm:text-xs text-slate-400">
            © 2026 <Link href="/" className="hover:text-slate-600 transition-colors">wrt-cms</Link>
          </p>
          
          {/* Call the Divorcee Component */}
          <ContactSection />
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6 pt-[2px]"> 
          <button 
            onClick={() => isClient && window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-slate-400 hover:text-black transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={18} height={18} className="opacity-60 hover:opacity-100 transition-opacity" />
          </Link>
        </div>

      </div>
    </footer>
  );
};
