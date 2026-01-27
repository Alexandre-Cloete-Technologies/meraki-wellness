export function WhyUs() {
  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto">
      
      <div className="bg-gradient-to-br from-[#2c1e1a] to-[#1a110e] rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHtjwtE2HQvtPngSQNHCs3NDi4b-6uGMn0O24ra2ydnZQmzmPYJ9b9JEd9dbf12uzBRxYKonbBoMEF50eeA2vuDHfohMIkDQzFmFT9a3_hlPwtnlhGb-4RK4xYNH8xg14focSdR5tX3F3NSvbTQMPG208dKMGq6lnrkMWTJOdiQvvebycESRuGT9wVEP3Qn5XXMsme1e1JJpWyTQsJ6C2KlnY5CYWOcBPLIM_kc_fl1jraITr2qliXaH-jJxqXQ3ysduW05RBs9dU')",
            backgroundSize: "cover",
          }}
        />
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-accent-gold text-4xl font-serif-display font-medium">
            The Meraki Difference
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary shadow-md flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-white/90 text-3xl">
                local_florist
              </span>
            </div>
            <h3 className="text-accent-gold text-xl font-serif-display font-bold mb-3">
              Authentic African
            </h3>
            <p className="text-white/90 text-sm leading-relaxed px-4">
              We use locally sourced ingredients and traditional techniques
              honoring our heritage.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary shadow-md flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-white/90 text-3xl">school</span>
            </div>
            <h3 className="text-accent-gold text-xl font-serif-display font-bold mb-3">
              Expert Team
            </h3>
            <p className="text-white/90 text-sm leading-relaxed px-4">
              Every therapist is internationally certified, ensuring safety and
              quality.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary shadow-md flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-white/90 text-3xl">
                favorite
              </span>
            </div>
            <h3 className="text-accent-gold text-xl font-serif-display font-bold mb-3">
              Personalized Care
            </h3>
            <p className="text-white/90 text-sm leading-relaxed px-4">
              We tailor every treatment to your specific body needs and wellness
              goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
