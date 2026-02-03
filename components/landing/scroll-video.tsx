'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform width from 70% to 100%
  const width = useTransform(scrollYProgress, [0.1, 0.4], ["70%", "100%"]);
  // Transform border radius from 2rem to 0rem
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.4], ["2rem", "1rem"]);
  // Optional: Add a subtle perspective scale effect
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1]);
  // Optional: Control opacity
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-16 flex justify-center bg-background-light overflow-hidden"
    >
      <motion.div
        style={{
          width,
          borderRadius,
          scale,
          opacity,
        }}
        className="relative aspect-video max-w-7xl mx-auto overflow-hidden shadow-2xl z-0"
      >
         <iframe
                src="https://www.youtube.com/embed/EJ49a0UyTPE?autoplay=1&mute=1&controls=0&loop=1&playlist=EJ49a0UyTPE"
                className="w-full h-full pointer-events-none scale-105"
                title="Hero Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
        
        {/* Subtle Overlay to match the theme */}
        <div className="absolute inset-0 bg-primary/10" />
      </motion.div>
    </section>
  );
}
