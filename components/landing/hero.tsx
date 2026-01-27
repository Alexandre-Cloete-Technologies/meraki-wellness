import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center bg-background-alt overflow-hidden">
            
      <div className="container mx-auto px-4 md:px-10 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full py-20 lg:py-0">
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-full flex flex-col items-center lg:items-start text-center relative lg:text-left z-10">
            
            <h1 className="text-secondary text-5xl md:text-7xl lg:text-8xl font-serif-display font-medium leading-[1.1] mb-8 drop-shadow-sm">
              Where Tranquility Meets <br />
              <span className="italic text-primary">Mind and Soul</span>
            </h1>
            <p className="text-text-main text-lg md:text-xl font-light max-w-xl mb-12 leading-relaxed tracking-wide">
              Experience the essence of African luxury and holistic healing in the
              heart of Namibia. A sanctuary designed to restore your natural
              balance.
            </p>
            <Button className="bg-primary hover:bg-[#7a4c3a] text-white px-10 py-6 rounded-full text-sm font-bold tracking-widest uppercase transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 h-auto">
              <span className="material-symbols-outlined text-lg">
                calendar_month
              </span>
              Book Your Treatment
            </Button>
          </div>

          {/* Right Column: Video */}
          <div className="w-full lg:w-1/2 relative h-full">
            <div className="relative h-full max-h-[80vh] w-auto aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-primary-alt mx-auto">
               <iframe
                src="https://www.youtube.com/embed/EJ49a0UyTPE?autoplay=1&mute=1&controls=0&loop=1&playlist=EJ49a0UyTPE"
                className="w-full h-full pointer-events-none scale-105"
                title="Hero Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
             {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/80 rounded-full blur-3xl z-2" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/50 rounded-full blur-3xl z-2" />
          </div>
        </div>
      </div>
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/40 rounded-full blur-[100px]" />
       </div>
    </div>
  );
}
