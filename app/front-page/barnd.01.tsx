// app/front-page/barnd.01.tsx
import React from 'react';
import Link from 'next/link';
import './barnd.card.css'; // Import the new card-specific styles

export default function Barnd00() {
  const genericSrc = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='180'><rect width='240' height='180' fill='%23f8fafc'/><rect width='60' height='60' x='90' y='60' fill='%23e2e8f0' rx='30'/><text x='50%' y='150' font-family='monospace' font-size='10' fill='%23cbd5e1' text-anchor='middle'>item_01</text></svg>";

  return (
    <Link href="/" className="barnd-card-link">
      <div className="barnd-card-inner">
        
        <div className="barnd-card-img-wrap">
          <img 
            src={genericSrc} 
            alt="featured item 01" 
            className="barnd-card-img"
            draggable={false} 
          />
        </div>

        <div className="barnd-card-label-wrap">
          <p className="barnd-card-label">slot_01</p>
        </div>

      </div>
    </Link>
  );
}
