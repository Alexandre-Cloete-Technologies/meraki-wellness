import { Button } from "@/components/ui/button";

export function Menu() {
  const bodyTherapies = [
    { name: "Aromatherapy Massage", duration: "60m" },
    { name: "Deep Tissue", duration: "60m" },
    { name: "Back & Neck", duration: "30m" },
    { name: "Pregnancy Massage", duration: "60m" },
  ];

  const beautyGrooming = [
    { name: "Luxury Manicure", duration: "45m" },
    { name: "Gel Pedicure", duration: "60m" },
    { name: "Lash Tint & Lift", duration: "45m" },
    { name: "Waxing (Full Leg)", duration: "30m" },
  ];

  return (
    <section className="bg-white py-24  relative overflow-hidden">
          <div className="absolute left-0 top-10 text-[400px] leading-none text-primary/10 font-serif-display select-none z-10">
        Wellness <br/> Menu
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <div className=" mb-16">
          <h2 className="text-secondary text-center text-4xl font-serif-display font-medium">
            Complete Wellness Menu
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mt-6" />
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h3 className="text-primary text-lg font-bold uppercase tracking-widest mb-8 text-center md:text-left">
              Body Therapies
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
                  <span className="text-text-muted font-medium z-10 pl-2 text-sm">
                    {item.duration}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-lg font-bold uppercase tracking-widest mb-8 text-center md:text-left">
              Beauty & Grooming
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
                  <span className="text-text-muted font-medium bg-white z-10 pl-2 text-sm">
                    {item.duration}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 rounded-full text-xs font-bold uppercase tracking-widest transition-all h-auto"
          >
            Download Full Pricelist
          </Button>
        </div>
      </div>
    </section>
  );
}
