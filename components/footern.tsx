import Link from 'next/link';
import Image from 'next/image';

export const footern = () => {
  return (
    <footer className="w-full border-t border-slate-50 bg-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Left Side */}
        <p className="lowercase text-[10px] sm:text-xs text-slate-400">
          © 2026 <Link href="/" className="hover:text-slate-600 transition-colors">wrt-cms</Link>
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Chevron: Changed from slate-300 to slate-400 for better visibility, hover to black */}
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

          {/* Mini Logo: Increased base opacity so it's not so 'milky' */}
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="init logo" 
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
