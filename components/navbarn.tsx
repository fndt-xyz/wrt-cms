"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuTree } from "@/config/menu";

export const navbarn = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  // Function to close menu when clicking outside
  const closeMenu = () => setOpenMenu(null);

  return (
    <>
      {/* 1. CLICK-OUTSIDE OVERLAY (Mobile only) */}
      {openMenu && (
        <div 
          className="fixed inset-0 z-40 sm:hidden" 
          onClick={closeMenu}
        />
      )}

      <nav className="w-full bg-white border-b border-slate-50 px-6 py-4 relative z-50">
        <div className="max-w-6xl mx-auto flex flex-col items-start sm:flex-row sm:items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 no-underline text-inherit group">
            <span className="lowercase font-bold text-xl tracking-tighter font-open-sans text-slate-900">
              wrt.
            </span>
            <Image 
              src="/logo.png" 
              alt="wrt-cms" 
              width={40}     
              height={40}    
              className="w-auto h-10" 
              priority           
            />
          </Link>

          <div className="flex flex-wrap gap-x-8 mt-4 sm:mt-0 lowercase text-sm tracking-wide font-open-sans">
            {menuTree.map((item) => (
              <div key={item.name} className="relative group flex items-center h-10">
                
                <Link href={item.path} onClick={closeMenu} className="hover:text-slate-400 transition-colors">
                  {item.name}
                </Link>
                
                {item.children && (
                  <button 
                    onClick={() => toggleMenu(item.name)}
                    className="ml-1 p-1 text-slate-400 focus:outline-none"
                  >
                    {openMenu === item.name ? "−" : "+"}
                  </button>
                )}

                {/* 2. THE DROPDOWN (Now uses absolute positioning to "cover" content) */}
                {item.children && (
                  <div className={`
                    ${openMenu === item.name ? "block" : "hidden"} 
                    sm:group-hover:block 
                    absolute top-full left-0 pt-1 min-w-[180px] z-[60]
                  `}>
                    <div className="flex flex-col bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2">
                      {Object.entries(item.children).map(([label, path]) => (
                        <Link 
                          key={path as string} 
                          href={path as string} 
                          onClick={closeMenu}
                          className="px-4 py-2 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
