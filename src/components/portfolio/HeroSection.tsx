function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="z-10 text-center max-w-4xl">
        <div className="inline-block mb-6 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[10px] font-label tracking-[0.3em] uppercase">
          System Protocol v4.0.2 // Active
        </div>
        <h1 className="text-6xl md:text-9xl font-headline font-bold text-white mb-6 tracking-tight leading-none uppercase">
          Chan Nguyen
        </h1>
        <div
          className="text-xl md:text-2xl font-body text-outline-variant h-8 terminal-cursor uppercase tracking-widest"
          id="typewriter-text"
        >
          UI/
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-headline font-bold text-white">3+</span>
            <span className="text-[10px] font-label text-outline uppercase tracking-widest">
              Years Exp
            </span>
          </div>
          <div className="w-[1px] h-12 bg-outline-variant/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-headline font-bold text-white">8+</span>
            <span className="text-[10px] font-label text-outline uppercase tracking-widest">
              Production Projects
            </span>
          </div>
          <div className="w-[1px] h-12 bg-outline-variant/30"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-headline font-bold text-white">1</span>
            <span className="text-[10px] font-label text-outline uppercase tracking-widest">
              Hackathon Win
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] font-label tracking-[0.4em] uppercase">SCROLL_INIT</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  )
}

export default HeroSection
