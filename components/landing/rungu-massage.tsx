import { Button } from "@/components/ui/button";

export function RunguMassage() {
  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto border-t border-[#e6dec8] relative">
      <div className="absolute right-10 top-20 text-[300px] leading-none text-primary/5 font-serif-display select-none -z-10">
        3
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            Ancient Technique
          </span>
          <h2 className="text-secondary text-5xl font-serif-display font-medium mb-8">
            African Rungu Massage
          </h2>
          <p className="text-text-main text-lg mb-8 font-light leading-relaxed">
            An ancient massage technique using the &quot;Rungu&quot;, a wooden throwing club
            used by warrior tribes in East Africa. The Rungu is used to deliver
            long, deep pressure strokes that stimulate circulation and lymph
            drainage.
          </p>
          <div className="rounded-2xl mb-10">
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-text-main">
                <span className="material-symbols-outlined text-primary">
                  spa
                </span>
                <span className="font-serif-display italic text-lg">
                  Deep tissue muscle release
                </span>
              </li>
              <li className="flex items-center gap-4 text-text-main">
                <span className="material-symbols-outlined text-primary">
                  spa
                </span>
                <span className="font-serif-display italic text-lg">
                  Improves blood circulation
                </span>
              </li>
              <li className="flex items-center gap-4 text-text-main">
                <span className="material-symbols-outlined text-primary">
                  spa
                </span>
                <span className="font-serif-display italic text-lg">
                  Reduces stress and fatigue
                </span>
              </li>
            </ul>
          </div>
          <Button variant="ghost" className="text-secondary flex items-center gap-3 hover:text-primary transition-colors font-serif-display italic text-lg">
            View Treatment Details
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 border-[1px] border-white/20 m-4 rounded-[2.5rem] z-10 pointer-events-none" />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/meraki-rungu-massage.webp")',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
