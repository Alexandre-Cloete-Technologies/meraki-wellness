export function Testimonials() {
  const testimonials = [
    {
      quote: "I opted for a pedicure and eyebrow plucking. The treatments were performed very professionally and with absolutely fantastic quality. The price was unbeatable. The atmosphere is great, and the staff are extremely friendly. The complex also has a nice restaurant, which is a great place to relax while you wait. A fantastic experience, highly recommended. Thank you.",
      author: "Nicole S.",
      letter: "N",
    },
    {
      quote: "Meraki ♥️♥️such an amazing experience. From reception to the rooms such a clean and peaceful atmosphere ✨definitely exceeded my expectations ☺️",
      author: "Cassandra C.",
      letter: "C",
    },
    {
      quote: "An absolutely wonderful and relaxing experience. Lulu is an experienced and professional therapist who takes her time understanding her clients needs. 10/10 recommended for deep tissue and reflexology massages. Thanks!",
      author: "Taime S.",
      letter: "T",
    },
  ];

  return (
    <section className="bg-[#f2ebe0] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h2 className="text-secondary text-4xl font-serif-display font-medium text-center mb-16">
          Voices of Relaxation
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md border border-[#f2ebe0] relative mt-4 md:mt-0 flex flex-col justify-between gap-4"
            >
              <span className="material-symbols-outlined text-primary/60 text-8xl absolute top-6 left-2 select-none">
                format_quote
              </span>
              <p className="text-text-main italic relative z-10 font-light leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-[#f2ebe0] pt-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif-display">
                  {item.letter}
                </div>
                <div>
                  <p className="text-secondary font-bold text-sm uppercase tracking-wider">
                    {item.author}
                  </p>
                  <div className="flex text-accent-gold text-xs mt-1 gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="material-symbols-outlined text-[16px] leading-[1]"
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
