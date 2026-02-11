import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

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
        
      {/* Booking Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button 
          className="bg-primary hover:bg-[#7a4c3a] text-white px-10 py-6 rounded-full text-base font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl h-auto"
          >
          <span className="material-symbols-outlined mr-2">calendar_month</span>
          Book Your Treatment
        </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-background-light border-[#e6dec8]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-text-main text-center">
                  Choose Your Location
                </DialogTitle>
                <DialogDescription className="text-text-secondary text-center">
                  Select which Meraki Wellness location to book at
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-6">
                <Link
                  href="https://www.fresha.com/p/hendrina-nghifitikeko-5979906"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6dec8] bg-white hover:border-primary hover:shadow-md transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                        Eros
                      </h3>
                      <p className="text-sm text-text-secondary">
                        150 Olof Palme street, Eros
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-2xl text-text-secondary group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </Link>
                <Link
                  href="https://www.fresha.com/a/meraki-wellness-centre-windhoek-the-village-liliencron-street-bf9zjf91"
                  target="_blank"
                  className="group"
                >
                  <div className="flex items-center justify-between p-4 rounded-xl border border-[#e6dec8] bg-white hover:border-primary hover:shadow-md transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                        The Village
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Unit 16, The Village, Liliencrone street, Eros
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-2xl text-text-secondary group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
    </section>
  );
}
