import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ChemicalPeels() {
  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-[#fbf8f3]" />
      <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="aspect-square rounded-full overflow-hidden border-[8px] border-white shadow-2xl w-4/5 mx-auto relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/meraki-chemical-peel.webp")',
                backgroundPosition: " center",
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
            Clinical Excellence
          </span>
          <h2 className="text-secondary text-5xl font-serif-display font-medium mt-3 mb-8">
            Optiphi Chemical Peels
          </h2>
          <p className="text-text-main text-lg mb-8 font-light leading-relaxed">
            Rejuvenate your skin with our medically aligned Optiphi chemical peels.
            Designed to improve skin texture, reduce pigmentation, and stimulate
            cellular activity for a youthful glow.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border border-[#e6dec8] shadow-sm">
              <h4 className="text-secondary font-serif-display font-bold text-xl mb-1">
                Retinol Peel
              </h4>
              <p className="text-xs text-text-muted uppercase tracking-wider">
                Anti-aging & sun damage
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#e6dec8] shadow-sm">
              <h4 className="text-secondary font-serif-display font-bold text-xl mb-1">
                Glycolic Peel
              </h4>
              <p className="text-xs text-text-muted uppercase tracking-wider">
                Brightening & texture
              </p>
            </div>
          </div>
          <Button variant="ghost" className="text-secondary flex items-center gap-3 hover:text-primary transition-colors font-serif-display italic text-lg">
            Explore Skin Treatments
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
