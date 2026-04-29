function AboutSection() {
  return (
    <section className="py-32 bg-surface-container-low/30 relative" id="about">
      <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 border border-primary/10 group-hover:border-primary/30 transition-all duration-700"></div>
          <div className="absolute -inset-8 border border-primary/5"></div>
          <div className="bg-surface-container aspect-square overflow-hidden border border-white/5 relative">
            <img
              alt="Nguyen Bui Gia Chan"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="/assets/me.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <h2 className="text-sm font-label uppercase tracking-[0.5em] text-primary">
              Biographical Data
            </h2>
          </div>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed">
            I am a{' '}
            <span className="text-white font-medium italic">Frontend &amp; Mobile Engineer</span>{' '}
            with 3+ years of experience building fintech and Web3 products. I focus on
            high-performance user experiences with React, React Native, Next.js, and
            blockchain-integrated applications.
          </p>
          <div className="grid grid-cols-1 gap-6 pt-8">
            <div className="p-6 bg-surface-container-lowest border-l-2 border-secondary">
              <h4 className="text-secondary text-[10px] font-label tracking-widest uppercase mb-2">
                Primary Objective
              </h4>
              <p className="text-sm text-outline-variant">
                Designing secure, scalable, and frictionless user interfaces for payment
                systems, decentralized apps, and mobile-first ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
