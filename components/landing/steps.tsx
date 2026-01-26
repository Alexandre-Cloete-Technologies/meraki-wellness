export function Steps() {
  return (
    <div className="w-full bg-background-alt border-y border-[#e6dec8]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#e6dec8]">
        <div className="flex flex-col items-center md:items-start px-6">
          <span className="text-secondary text-5xl font-serif-display font-medium">
            4+
          </span>
          <span className="text-text-muted text-xs uppercase tracking-[0.2em] mt-2">
            Years of Excellence
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start px-6 pt-6 md:pt-0">
          <div className="flex items-center gap-3 text-secondary font-serif-display text-lg mb-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary text-sm font-serif-display italic">
              1
            </span>
            Choose Service
          </div>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            Select from our extensive menu of curated treatments.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start px-6 pt-6 md:pt-0">
          <div className="flex items-center gap-3 text-secondary font-serif-display text-lg mb-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary text-sm font-serif-display italic">
              2
            </span>
            Book Online
          </div>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            Secure your preferred slot with ease.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start px-6 pt-6 md:pt-0">
          <div className="flex items-center gap-3 text-secondary font-serif-display text-lg mb-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary text-primary text-sm font-serif-display italic">
              3
            </span>
            Relax & Renew
          </div>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            Arrive and let us handle the rest for you.
          </p>
        </div>
      </div>
    </div>
  );
}
