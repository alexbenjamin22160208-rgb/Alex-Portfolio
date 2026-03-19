'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  // Section 1: Center (Fades in slightly, fades out as we hit 20%)
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);



  // Section 3: Right aligned (Fades in at 50%, fully visible at 60%, fades out at 80%)
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none text-white font-sans">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Alex Benjamin</h1>
        <p className="text-lg md:text-xl mt-6 px-6 py-2 bg-white text-black rounded-full font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          Data Analytical and LLM Modulator
        </p>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right pr-[10%] md:pr-[20%]"
      >
        <p className="text-xl md:text-2xl text-white/50 font-medium mb-4 tracking-widest uppercase">AI Engineer</p>
        <h2 className="text-4xl md:text-6xl max-w-lg font-bold leading-tight">Scalable LLM Integration.</h2>
      </motion.div>
    </div>
  );
}
