import Image from "next/image";

export function Team() {
  const team = [
    {
      name: "Tamera Mungunda",
      role: "Spa Therapist / Spa Manager",
      description:
        "Tamera is a qualified beauty therapist. She's a Certified Masseuse, Facialist, Nail Technician, and wax therapist. Tamera completed her studies at Shandonai Beauty in Windhoek. Tamera is big on helping and multitasking which makes her a leader - great Team-player indeed. Tamera lives up to being a team player and an example for others; she's a perfectionist and pays attention to detail.",
      
      image: "/images/team-tamera.jpg",
      objectPosition: "top",
     
    },
    {
      name: "Merie-ann A Rudatt",
      role: "Qualified Nail Technician",
      description:
        "Aims to provide the best customer service. Maintains a clean and sanitary work environment at all times. Utilizes advanced technical skills to achieve beautiful manures and pedicures. Applies knowledge of hand and feet anatomy to enhance the physical contact experience. Performs nail and hand rejuvenation treatments.",
      
      image: "/images/team-merie-ann.jpg", 
      
    },
    {
      name: "Suama Christoph",
      role: "Qualified Therapist",
      description:
        "She is a great masseuse & completed her training at Shandonai Beauty School in Windhoek. She is able to step in and ASSIST as a nail technician, wax therapist, facialist. She has great customer service skills, potential leadership skills, she's a great team player. When well motivated she strives to deliver and perform at her highest quality and standards possible.",
      
      image: "/images/team-suama.jpg",
       
    },
  ];

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
                    </div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-[#d4af37]/30 shadow-xl">
                         <Image
                            alt="Hendrina Amakali - The MD"
                            src="/images/team-md.jpg"
                            fill
                            className="object-cover object-[center_20%]"
                         />
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-[2rem] shadow-lg border border-[#f2ebe0] text-center hover:shadow-xl transition-shadow flex flex-col items-center group relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-primary/20 group-hover:bg-primary transition-colors"></div>
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-md relative border-4 border-background-light group-hover:border-primary/20 transition-colors">
              <Image
                alt={member.name}
                src={member.image}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition }}

              />
            </div>
            <h3 className="text-secondary text-2xl font-serif-display font-bold mb-1">
              {member.name}
            </h3>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">
              {member.role}
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-6 hover:line-clamp-none transition-all">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
