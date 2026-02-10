import { Button } from "@/components/ui/button";
import Link from 'next/link';
export function Menu() {
  const merakiSpecials= [
    { name: "Valentines Special (Galentines Glow Special)" },
    { name: "Valentines Special (Because you deserve it)" },
    { name: "February Special Pick 2" },
    { name: "February Special Pick 3" },
    { name: "Dry/cracked heel solution" },
  ]
  const bodyTherapies = [
    { name: "Dermaplane Facial" },
    { name: "Skin Consultation" },
    { name: "Brow Shape" },
    { name: "Brow Shape & Tint" },
  ];

  const beautyGrooming = [
    { name: "Wax Combo with Hendrina" },
    { name: "Deep Tissue Massage" },
  ];

  return (
    <section className="bg-white py-24  relative overflow-hidden">
        <div className="absolute left-0 top-10 text-[400px] leading-none text-primary/10 font-serif-display select-none z-10">
        Wellness <br/> Services
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <div className=" mb-16">
          <h2 className="text-secondary text-center text-4xl font-serif-display font-medium">
             Wellness Services
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
        </div>
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-12">
          <div>
            <h3 className="text-primary text-lg font-bold uppercase tracking-widest mb-8 text-center md:text-left">
              Meraki Specials
            </h3>
            <ul className="space-y-6">
              {merakiSpecials.map((item) => (
                <li
                  key={item.name}
                  className="flex items-end justify-between group"
                >
                  <span className="text-secondary font-serif-display text-lg z-10 pr-2">
                    {item.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-[#e6dec8] mb-1.5 mx-2" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-lg font-bold uppercase tracking-widest mb-8 text-center md:text-left">
              Facials & Eyebrows
            </h3>
            <ul className="space-y-6">
              {bodyTherapies.map((item) => (
                <li
                  key={item.name}
                  className="flex items-end justify-between group"
                >
                  <span className="text-secondary font-serif-display text-lg z-10 pr-2">
                    {item.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-[#e6dec8] mb-1.5 mx-2" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-lg font-bold uppercase tracking-widest mb-8 text-center md:text-left">
              Messages & Waxings
            </h3>
            <ul className="space-y-6">
              {beautyGrooming.map((item) => (
                <li
                  key={item.name}
                  className="flex items-end justify-between group"
                >
                  <span className="text-secondary font-serif-display text-lg bg-white z-10 pr-2">
                    {item.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-[#e6dec8] mb-1.5 mx-2" />
                </li>
              ))}
            </ul>
          </div>
        </div>
          <div className="mt-16 text-center relative z-20">
            <Link href="https://www.fresha.com/a/meraki-wellness-centre-olof-palme-windhoek-150-olof-palme-street-ji8kw0cw/booking?employeeId=4889993&back=%2Fp%2Fhendrina-nghifitikeko-5979906&cartId=2eff4fce-1904-4121-b493-fd887cdb1c0c" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all h-auto cursor-pointer"
              >
                View All Services
              </Button>
            </Link>
          </div>
      </div>
    </section>
  );
}
