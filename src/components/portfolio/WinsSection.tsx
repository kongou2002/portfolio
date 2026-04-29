function WinsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-surface-container-highest/10" id="wins">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-surface-container-low border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">emoji_events</span>
          </div>
          <div className="z-10">
            <span className="text-primary text-[10px] font-label tracking-[0.4em] uppercase mb-4 block">
              Major Achievement Detected
            </span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-white mb-2">
              🏆 1st PLACE - POLKADOT TRACK
            </h3>
            <p className="text-secondary font-label tracking-widest uppercase">
              TOKEN 2049 HACKATHON // SINGAPORE
            </p>
          </div>
          <a
            className="z-10 border border-secondary text-secondary px-8 py-4 text-[12px] font-label font-bold tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all inline-block"
            href="https://drive.google.com/file/d/1HCiMz9wKH2lPhpwUNABLK_HJRNSc2qoz/view"
            rel="noreferrer"
            target="_blank"
          >
            VIEW_CREDENTIALS
          </a>
        </div>
      </div>
    </section>
  )
}

export default WinsSection
