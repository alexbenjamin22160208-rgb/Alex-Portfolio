'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 75; // 00 to 74

const ScrollyCanvas = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(2, '0');
      // Using .png based on actual extracted files, rather than the user's initial .webp mention
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (idx: number) => {
      const img = images[idx];
      if (img && img.complete && img.naturalWidth) {
        // Set canvas dimensions to exactly window size to avoid CSS layout bugs
        if (canvas.width !== window.innerWidth) canvas.width = window.innerWidth;
        if (canvas.height !== window.innerHeight) canvas.height = window.innerHeight;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Manual object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          // Canvas is wider than image aspect ratio, match width
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          // Canvas is taller than image aspect ratio, match height
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Render first frame as soon as it loads or immediately if already loaded
    if (images[0].complete) {
      render(0);
    } else {
      images[0].onload = () => render(0);
    }

    const unsubscribe = frameIndex.on('change', (latest) => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
      render(idx);
    });

    const handleResize = () => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(frameIndex.get())));
      render(idx);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#121212] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <Overlay progress={scrollYProgress} />
        {children}
      </div>
    </div>
  );
};

export default ScrollyCanvas;
