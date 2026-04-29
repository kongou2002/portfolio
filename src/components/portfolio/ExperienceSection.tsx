type Experience = {
  time: string
  company: string
  role: string
  desc: string
  roleColor: 'text-primary' | 'text-secondary' | 'text-outline'
}

const experiences: Experience[] = [
  {
    time: 'Mar 2025 - Present',
    company: 'Whammy Tech',
    role: 'Frontend Developer',
    desc: 'Built React Native architecture from scratch for Whampays and Moonrush, implemented social login, realtime price logic, and collaborated closely with stakeholders to turn PRD into shipping tasks.',
    roleColor: 'text-primary',
  },
  {
    time: 'Mar 2025 - Sep 2025',
    company: 'Llamao (Part-time)',
    role: 'Frontend Developer',
    desc: 'Developed Llamaoism on Next.js 15 with WalletConnect on Monad Testnet, NFT mint flows (ERC721/1155), and full frontend architecture with responsive happy-UX design.',
    roleColor: 'text-secondary',
  },
  {
    time: 'Feb 2024 - Jan 2025',
    company: 'Orochi Network',
    role: 'Frontend Developer',
    desc: 'Built Orand Dashboard, zkDatabase Website, and Orochi UI with Next.js and Tailwind; delivered reusable components, auth flows, and dashboard UX for blockchain data products.',
    roleColor: 'text-outline',
  },
  {
    time: 'Nov 2023 - Apr 2024',
    company: 'HD Websoft',
    role: 'Software Developer',
    desc: 'Contributed to a B2B2C booking platform backend using TypeScript, GraphQL, Express, and Apollo Server; implemented business logic and source structure for scalable service operations.',
    roleColor: 'text-outline',
  },
]

function ExperienceSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-sm font-label uppercase tracking-[0.5em] text-primary">
            Experience_History
          </h2>
          <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
        </div>
        <div className="space-y-0">
          {experiences.map((experience) => (
            <div
              className="grid md:grid-cols-12 gap-8 py-12 border-b border-white/5 group hover:bg-white/[0.02] transition-colors"
              key={experience.company}
            >
              <div className="md:col-span-3 text-outline text-[12px] font-label tracking-widest uppercase">
                {experience.time}
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-headline font-bold text-white">
                  {experience.company}
                </h3>
                <p
                  className={`${experience.roleColor} text-[10px] font-label tracking-[0.2em] uppercase mt-1`}
                >
                  {experience.role}
                </p>
              </div>
              <div className="md:col-span-5 text-outline-variant text-sm leading-relaxed">
                {experience.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
