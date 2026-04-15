// app/front-page/row01.tsx
import Link from 'next/link'; // Import Link for internal routing
import './frpgc.css';

export default function Row01() {
  const images = [
  { 
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='180'><rect width='240' height='180' fill='%23e2e8f0'/><text x='50%' y='50%' font-family='monospace' font-size='12' fill='%2394a3b8' text-anchor='middle' dy='.3em'>SLOT_01</text></svg>", 
    alt: "box 01" 
  },
  { 
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='180'><rect width='240' height='180' fill='%23e2e8f0'/><text x='50%' y='50%' font-family='monospace' font-size='12' fill='%2394a3b8' text-anchor='middle' dy='.3em'>SLOT_02</text></svg>", 
    alt: "box 02" 
  },
  { 
    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='180'><rect width='240' height='180' fill='%23e2e8f0'/><text x='50%' y='50%' font-family='monospace' font-size='12' fill='%2394a3b8' text-anchor='middle' dy='.3em'>SLOT_03</text></svg>", 
    alt: "box 03" 
  }
];

  return (
    <div className="fp-row-container">
      {images.map((img, idx) => (
        <div key={idx} className="fp-row-item">
          {/* Wrap the image in a Link component */}
          <Link href="/pages/clients" className="block">
            <img 
              src={img.src} 
              alt={img.alt} 
              draggable="false"
              className="cursor-pointer hover:opacity-90 transition-opacity" 
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
