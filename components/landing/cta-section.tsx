import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section 
      className="relative py-32 flex items-center justify-center bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c1e1a] to-[#1a110e]/80" />
      
      <div className="relative container mx-auto px-4 md:px-10 z-10 text-center">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif-display font-medium mb-6 drop-shadow-md">
          Ready to Experience <br />
          <span className="italic text-accent-gold">True Tranquility?</span>
        </h2>
        
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Book your appointment today and let us guide you on a journey to restore your mind, body, and soul.
        </p>
        <Link href="https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91" target="_blank">
        <Button 
          className="bg-primary hover:bg-[#7a4c3a] text-white px-10 py-6 rounded-full text-base font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl h-auto"
          >
          <span className="material-symbols-outlined mr-2">calendar_month</span>
          Book Your Treatment
        </Button>
        </Link>
      </div>
    </section>
  );
}
