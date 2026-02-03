'use client'; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div  className="relative w-full min-h-[70vh] flex items-center bg-background-alt overflow-hidden" style={{ backgroundImage: "url('/images/background.jpg')", backgroundSize: "cover", backgroundPosition: "top right", backgroundAttachment: "fixed", backgroundBlendMode: "screen", }}>
            
      <div className="container mx-auto px-4 md:px-10 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 h-full py-20 lg:py-0">
          {/* Left Column: Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeIn" }} className="w-full lg:w-full flex flex-col items-center lg:items-center text-center relative lg:text-left z-10">
            
            <motion.h1 className="text-secondary text-4xl md:text-6xl lg:text-7xl font-serif-display font-medium font-dancing leading-[1.1] mb-8 drop-shadow-sm text-center">
            Where Namibian Excellence <br/> Meets <br /> 
              <motion.span initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2, ease: "easeIn" }}  className="italic relative bottom-8 text-primary font-dancing  text-5xl md:text-7xl lg:text-8xl">Wellness Innovation</motion.span>
            </motion.h1>
            <motion.p className="text-text-main text-lg md:text-xl font-light max-w-xl -mt-12 leading-relaxed tracking-wide text-center">
Built by women. Powered by international standards. Ready to scale across Africa.            </motion.p>
            {/* <Link href="https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91" target="_blank">
            <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-10 py-6 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 h-auto">
              <span className="material-symbols-outlined text-lg">
                calendar_month
              </span>
              Book Your Treatment
            </Button>
            </Link> */}
          </motion.div>
        </div>
      </div>
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 animate-pulse rounded-full blur-[100px]" />
       </div>
    </div>
  );
}
