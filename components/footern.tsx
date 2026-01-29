import Link from 'next/link';
import Image from 'next/image';
import "./cmpnt.css";

export const footern = () => {
  return (
    <footer className="nav-ft-container border-t border-slate-50 py-8">
      <div className="inner-wrap footer-inner">
        
        {/* Left Side */}
        <p className="lowercase text-[10px] sm:text-xs text-slate-400">
          © 2026 <Link href="/" className="hover:text-slate-600 transition-colors">wrt-cms</Link>
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-black transition-colors duration-300">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </a>

          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="wrt logo" 
              width={20} 
              height={20} 
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>

      </div>
    </footer>
  );
};
