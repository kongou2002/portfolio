type Project = {
  name: string
  img: string
  desc: string
  tags: string[]
  accent: 'primary' | 'secondary'
}

const projects: Project[] = [
  {
    name: 'Whampays',
    img: '/assets/Whampay.png',
    desc: 'A secure payment app with Solana integration supporting fiat and crypto transfers via Apple Pay, QR, and wallet addresses. Built with React Native and social login via Privy.',
    tags: ['Mobile', 'Fintech', 'React Native'],
    accent: 'primary',
  },
  {
    name: 'Moonrush',
    img: '/assets/moon-rush.png',
    desc: 'Solana-powered decentralized trading application with on/off-ramp support, real-time market data, and seamless fiat deposit and withdrawal experiences.',
    tags: ['Web3', 'Solana', 'Trading'],
    accent: 'secondary',
  },
  {
    name: 'Llamaoism',
    img: '/assets/llamaoism.JPG',
    desc: 'Web application on Monad Testnet focused on NFT minting and social quests, including WalletConnect integration, Mint Terminal, and CMS-powered community content.',
    tags: ['NFT', 'Next.js', 'WalletConnect'],
    accent: 'primary',
  },
  {
    name: 'EncryptSim',
    img: '/assets/encrypt-sim.png',
    desc: 'Secure mobile eSIM app with wallet authentication, VPN integration, and real-time transaction flow. Focused on secure identity and seamless mobile UX.',
    tags: ['Security', 'Expo', 'Solana'],
    accent: 'secondary',
  },
]

function WorkSection() {
  return (
    <section className="py-32 bg-surface-container-lowest" id="work">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-end justify-between mb-20">
          <div>
            <h2 className="text-6xl font-headline font-bold text-white uppercase tracking-tighter">
              Selected Works
            </h2>
            <p className="text-outline uppercase tracking-[0.4em] text-[10px] mt-4">
              Case Studies &amp; Deployment Logs
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 mx-12 bg-outline-variant/20"></div>
          <div className="text-right">
            <span className="text-primary text-4xl font-headline font-bold">/04</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => {
            const hoverBorderClass =
              project.accent === 'primary' ? 'hover:border-primary/40' : 'hover:border-secondary/40'
            const iconColorClass =
              project.accent === 'primary' ? 'text-primary' : 'text-secondary'
            const tagClass =
              project.accent === 'primary'
                ? 'px-2 py-1 bg-primary/10 text-primary text-[9px] font-label uppercase tracking-widest'
                : 'px-2 py-1 bg-secondary/10 text-secondary text-[9px] font-label uppercase tracking-widest'

            return (
              <div
                className={`group relative bg-surface-container border border-white/5 p-8 transition-all ${hoverBorderClass}`}
                key={project.name}
              >
                <div className="aspect-video mb-8 overflow-hidden border border-white/5">
                  <img
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={project.img}
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-headline font-bold text-white uppercase tracking-tight">
                    {project.name}
                  </h3>
                  <span className={`${iconColorClass} material-symbols-outlined`}>north_east</span>
                </div>
                <p className="text-outline-variant text-sm mb-8 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className={tagClass} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
