"use client";
import { motion } from "framer-motion";

export default function Shapes() {
  // Sophisticated palette for the 2-minute cycle
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#6366f1"];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg">
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-open-sans"
          style={{ 
            fontWeight: 800, 
            fontSize: "120px", 
            letterSpacing: "-0.05em" 
          }}
          // 1. Color Animation (2 Minutes)
          animate={{
            fill: colors,
            // 2. Geometry Animation (Subtle breathing/distorting)
            scale: [1, 1.05, 0.98, 1.05, 1],
            rotate: [0, 1, -1, 1, 0],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          wrt
        </motion.text>
        
        {/* Subtle stroke outline animation for extra "pop" */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          strokeWidth="1"
          className="font-open-sans"
          style={{ fontWeight: 800, fontSize: "120px", letterSpacing: "-0.05em" }}
          animate={{
            stroke: colors,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          wrt
        </motion.text>
      </svg>

      {/* Brand Watermark */}
      <div className="absolute bottom-8 text-[10px] font-mono uppercase tracking-[0.5em] text-slate-300">
        wrt-cms
      </div>
    </div>
  );
}
