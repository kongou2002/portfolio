const techItems = [
  'REACT / NEXT.JS',
  'REACT NATIVE',
  'TYPESCRIPT',
  'NESTJS / EXPRESS',
  'GRAPHQL',
  'SOLANA / ETHERS',
  'TAILWIND / SHADCN',
  'POSTGRESQL / MONGODB',
]

function TechSection() {
  return (
    <section className="py-32" id="tech">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-headline font-bold text-white mb-4 uppercase tracking-tighter">
            Technology Stack
          </h2>
          <p className="text-outline uppercase tracking-widest text-[10px]">
            Active Protocols &amp; Development Toolkits
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {techItems.map((item, index) => (
            <div
              className="bg-background p-12 group hover:bg-surface-container-low transition-all duration-300"
              key={item}
            >
              <span className="text-primary mb-6 block font-label text-xs">
                {String(index + 1).padStart(2, '0')} //
              </span>
              <h3 className="text-white font-headline text-xl mb-2">{item}</h3>
              <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechSection
