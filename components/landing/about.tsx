import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-background-alt py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCae_Ys9scbZZgvBy78XlrHdvddjsoE-g-voIMK5U-YjepTu94uEDFmtwXMEeSfgOI3mJMimFQfndaPgilf1MCTN6hzr5pFIoEPnDgrjonQiBlPPH0_KTPwYkT3--03aac6PlxqNq2DjPUQXCkOjGuaSJiREjLIBmMp90-WJr-rlc_sETuZ88fk77Iw1sWn24BbR3Dsa8V3nQtT_hA40WO2_1av6j0ThQDGJVFWNC4PCcmbWFtjR7IPfSADNqeWVByUU1YfT_gVX1g')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute -left-20 top-20 text-[400px] leading-none text-white/40 font-serif-display select-none z-0">
        Our Heritage
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                alt="Outdoor Photo of Meraki Wellness Centre"
                src="/images/meraki-wellness.jpeg"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl flex gap-8 border border-[#e6dec8]">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl">
                  verified
                </span>
                <span className="text-secondary text-[10px] uppercase tracking-widest font-bold mt-2">
                  CIDESCO
                </span>
              </div>
              <div className="w-px h-10 bg-[#e6dec8]" />
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-4xl">
                  award_star
                </span>
                <span className="text-secondary text-[10px] uppercase tracking-widest font-bold mt-2">
                  ITEC
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Our Heritage
            </h3>
            <h2 className="text-secondary text-5xl md:text-6xl font-serif-display font-medium leading-[1.1] mb-8">
              Rooted in Namibian Tradition, <br />
              <span className="italic">Elevated by Excellence</span>
            </h2>
            <p className="text-text-main text-lg mb-6 leading-relaxed font-light">
              At Meraki Wellness Centre, we bring you a unique blend of ancient
              African healing wisdom and modern wellness science. Our sanctuary
              is more than just a spa; it&quot;s a homage to the warmth of the
              Namibian spirit.
            </p>
            <p className="text-text-main text-lg mb-10 leading-relaxed font-light">
              Our internationally certified team ensures that every touch is
              purposeful and every treatment meets the highest global standards.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-[1px] bg-primary" />
              <button className="text-secondary hover:text-primary transition-colors font-serif-display italic text-xl">
                Read Our Full Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
