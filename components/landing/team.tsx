import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Team() {
  

  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto bg-background-light">
      <div className="text-center mb-16">
        <h2 className="text-secondary text-4xl md:text-5xl font-serif-display font-medium mb-4">
          Meraki Wellness Team
        </h2>
        <p className="text-text-muted italic font-serif-display text-xl">
          Meet our qualified therapists
        </p>
      </div>

      {/* The MD Feature Section */}
      <div className="mb-24 relative">
         <div className="bg-gradient-to-br from-[#2c1e1a] to-[#1a110e] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 lg:order-1">
                    <h3 className="text-6xl md:text-8xl font-serif-display leading-none mb-2">The <br/> <span className="italic text-[#d4af37]">MD</span></h3>
                    <h4 className="text-2xl font-bold uppercase tracking-wider mb-8 text-white/90">Hendrina Amakali</h4>
                    
                    <div className="space-y-6 text-white/80 font-light leading-relaxed">
                        <p>
                            Hendrina Amakali is the founder of Meraki Investment CC, a Namibian registered entity. Hendrina is a Beauty therapist / Spa Manager by profession with OWS, ITEC and CIDESCO international Diplomas.
                        </p>
                        <p>
                            Hendrina possesses over 4 years experience in managerial position onboard cruise lines working for One Spa World in the US. Hendrina completed her beauty therapy upgraded and customer service modules in Miami.
                        </p>
                          <Link href="https://www.fresha.com/p/hendrina-nghifitikeko-5979906" target="_blank">
                         <Button variant="ghost" className="text-accent-gold flex items-center gap-3 hover:text-primary transition-colors font-serif-display italic text-xl">
                           View my profile on Fresha
            <span className="material-symbols-outlined text-accent-gold">arrow_right_alt</span>
          </Button>
                           </Link>
                    </div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-[#d4af37]/30 shadow-xl">
                         <Image
                            alt="Hendrina Amakali - The MD"
                            src="/images/team-md2.jpg"
                            fill
                            className="object-cover object-[center_20%] scale-120"
                         />
                    </div>
                </div>
            </div>
         </div>
      </div>

      
    </section>
  );
}
