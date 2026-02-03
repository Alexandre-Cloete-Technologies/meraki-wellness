'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Location data
const locationsData = [
  {
    key: 'eros',
    name: 'Eros',
    address: 'Olof Palme Street, Eros, Windhoek',
    image: '/images/tranquility-and-balance-meraki.jpg',
    bookingLink: 'https://www.fresha.com/p/hendrina-nghifitikeko-5979906',
    staff: [
      { name: 'Tamera Mungunda', role: 'Spa Therapist', image: '/images/team-tamera.jpg' },
      { name: 'Suama Christoph', role: 'Qualified Therapist', image: '/images/team-suama.jpg' },
       { name: 'Tamer Mungunda', role: 'Spa Therapist', image: '/images/team-tamera.jpg' },
      { name: 'Suam Christoph', role: 'Qualified Therapist', image: '/images/team-suama.jpg' },
    ],
  },
  {
    key: 'the-village',
    name: 'The Village',
    address: 'The Village, Liliencron Street, Windhoek',
    image: '/images/meraki-wellness.jpeg',
    bookingLink: 'https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91',
    staff: [
      { name: 'Merie-ann A Rudatt', role: 'Nail Technician', image: '/images/team-merie-ann.jpg' },
     { name: 'Suama Christoph', role: 'Qualified Therapist', image: '/images/team-suama.jpg' },
       { name: 'Tameraa Mungunda', role: 'Spa Therapist', image: '/images/team-tamera.jpg' },
      { name: 'Suamaa Christoph', role: 'Qualified Therapist', image: '/images/team-suama.jpg' },
    ],
  },
];

export function Locations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userOverride, setUserOverride] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Opacity for each location name - GRADUAL FADE (symmetrical crossfade at 0.5)
  // Eros: starts at 1, transitions 0.35-0.5, ends at 0.15
  const erosOpacity = useTransform(scrollYProgress, [0, 0.45, 0.5, 1], [1, 1, 0.15, 0]);
  const erosScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [1.05, 1.05, 0.95, 0.95]);
  // Village: starts at 0.15, transitions 0.5-0.65, ends at 1
  const villageOpacity = useTransform(scrollYProgress, [0, 0.45, 0.5, 1], [0.15, 0.15, 1, 1]);
  const villageScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [0.95, 0.95, 1.05, 1.05]);


  // Listen to scroll progress and update activeIndex (unless user has clicked)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!userOverride) {
      // Switch at 0.5 scroll progress
      const newIndex = latest >= 0.5 ? 1 : 0;
      setActiveIndex(newIndex);
    }
  });

  // Handle click on location name - sets user override
  const handleLocationClick = (index: number) => {
    setUserOverride(true);
    setActiveIndex(index);
    // Reset override after a short delay so scroll can take over again
    setTimeout(() => setUserOverride(false), 1500);
  };

  // Get active location data
  const activeLocation = locationsData[activeIndex];


  return (
    <section
      ref={containerRef}
      className="relative w-full bg-background-alt overflow-hidden hidden lg:block"
      style={{ height: '100vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-16">
        <h2 className="text-secondary text-4xl md:text-5xl font-serif-display font-medium mb-4">
          Where to find us
        </h2>
        
      </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
          <div className="grid grid-cols-3 gap-8 items-center">
            {/* Left Column: Location Image - State-based */}
            <div className="relative h-[60vh] flex flex-col items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="mb-2 text-center font-serif-display text-lg italic text-text-muted">
                    {activeLocation.address}
                  </div>
                  <div className="relative w-full min-w-[20vw] aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src={activeLocation.image}
                      alt={activeLocation.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Link href={activeLocation.bookingLink} target="_blank" className="mt-4">
                    <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">
                      Book at {activeLocation.name}
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Center Column: Location Names - Scroll-based opacity, clickable */}
            <div className="relative flex flex-col items-center justify-center text-center min-h-[60vh]">
              <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6">
                Our Locations
              </h3>
              <div className="flex flex-col gap-6">
                {locationsData.map((location, index) => (
                  <motion.button
                    key={location.key}
                    onClick={() => handleLocationClick(index)}
                    style={{
                      opacity: index === 0 ? erosOpacity : villageOpacity,
                      scale: index === 0 ? erosScale : villageScale,
                    }}
                    className={`cursor-pointer py-4 font-serif-display text-5xl md:text-6xl tracking-tight transition-all hover:text-primary ${
                      activeIndex === index ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    <span className="block">{location.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Column: Staff - State-based */}
            <div className="relative h-[60vh] flex flex-col items-center justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="mb-2 text-center font-serif-display text-lg italic text-text-muted">
                    Meet the {activeLocation.name} Team
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {activeLocation.staff.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg border border-[#f2ebe0]"
                      >
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-primary/20">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-secondary text-sm font-bold text-center">{member.name}</p>
                        <p className="text-text-muted text-xs text-center">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

