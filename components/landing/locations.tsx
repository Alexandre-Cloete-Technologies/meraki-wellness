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
    address: '150, Olof Palme Street, Eros, Windhoek',
    image: '/images/tranquility-and-balance-meraki.jpg',
    bookingLink: 'https://www.fresha.com/p/hendrina-nghifitikeko-5979906',
    staff: [
      { name: 'Hendrina', role: 'MD', image: '/images/team-md.jpg', objectPosition: '65% 20%' }, 
      { name: 'Albertine', role: 'Spa Therapist', image: '/images/team-albertine.jpeg', objectPosition: '65% 30%' },
       { name: 'Loritha', role: 'Spa Therapist', image: '/images/team-loritha.jpeg', objectPosition: '65% 20%' },
      { name: 'Cassandra', role: 'Spa Therapist', image: '/images/team-cassandra.jpeg', objectPosition: '65% 30%' },
      { name: 'Josephine', role: 'Spa Therapist', image: '' },
    ],
  },
  {
    key: 'the-village',
    name: 'The Village',
    address: 'Unit 16, The Village, Liliencron Street, Windhoek',
    image: '/images/meraki-wellness.jpeg',
    bookingLink: 'https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91',
    staff: [
      { name: 'Anna', role: 'Spa Therapist', image: '' },
     { name: 'Ebba', role: 'Spa Therapist', image: '' }, 
       { name: 'Idda', role: 'Spa Therapist', image: '/images/team-idda.jpeg', objectPosition: '65% 30%' },
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
      className="relative w-full bg-background-alt overflow-hidden py-16 lg:py-0"
      style={{ height: 'auto', minHeight: '100vh' }}
    >
      {/* Sticky container - only sticky on desktop */}
      <div className="lg:sticky top-0 lg:h-screen flex flex-col items-center justify-center overflow-hidden py-10 lg:py-0">
        <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-secondary text-4xl md:text-5xl font-serif-display font-medium mb-4">
          Where to find us
        </h2>
      </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start lg:items-center">
            {/* Left Column: Location Image - State-based */}
            <div className="relative order-2 lg:order-1 h-auto lg:h-[60vh] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <div className="mb-4 text-center font-serif-display text-lg italic text-text-muted px-4">
                    {activeLocation.address}
                  </div>
                  <div className="relative w-full max-w-[300px] lg:max-w-none aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white">
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
            <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center text-center py-6 lg:py-0 lg:min-h-[60vh]">
              <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 lg:mb-6">
                Our Locations
              </h3>
              <div className="flex flex-row lg:flex-col gap-8 lg:gap-6">
                {locationsData.map((location, index) => (
                  <motion.button
                    key={location.key}
                    onClick={() => handleLocationClick(index)}
                    style={{
                      opacity: index === 0 ? erosOpacity : villageOpacity,
                      scale: index === 0 ? erosScale : villageScale,
                    }}
                    className={`cursor-pointer py-2 lg:py-4 font-serif-display text-4xl md:text-6xl tracking-tight transition-all hover:text-primary ${
                      activeIndex === index ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    <span className="block">{location.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Column: Staff - State-based */}
            <div className="relative order-3 lg:order-3 h-auto lg:h-[60vh] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLocation.key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center gap-6 w-full"
                >
                  <div className="text-center font-serif-display text-lg italic text-text-muted">
                    Meet the {activeLocation.name} Team
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                    {activeLocation.staff.map((member) => (
                      <div
                        key={member.name}
                        className="flex flex-col  items-center bg-white p-4 rounded-xl shadow-lg border border-[#f2ebe0]"
                      >
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-2 border-2 border-primary/20">
                          <Image
                            src={member.image || '/images/generic-avatar-feminine.svg'}
                            alt={member.name}
                            width={256}
                            height={256}
                            style={{ objectPosition: member.objectPosition }}
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

