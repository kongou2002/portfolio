import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'HERO' },
  { href: '#about', label: 'ABOUT' },
  { href: '#tech', label: 'TECH' },
  { href: '#work', label: 'WORK' },
  { href: '#wins', label: 'WINS' },
  { href: '#contact', label: 'CONTACT' },
]

function Navbar() {
  const [activeHref, setActiveHref] = useState('#hero')

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter((section): section is HTMLElement => section !== null)

    const updateActiveSection = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.45
      let closestHref = '#hero'
      let smallestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const distance = Math.abs(section.offsetTop - viewportAnchor)
        if (distance < smallestDistance) {
          smallestDistance = distance
          closestHref = `#${section.id}`
        }
      })

      setActiveHref(closestHref)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-3xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white font-headline">
          KONGOU<span className="text-primary-container">_</span>DEV
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              className={
                activeHref === link.href
                  ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1 font-label uppercase tracking-[0.1em] text-[10px]'
                  : 'text-slate-400 hover:text-white transition-colors duration-300 font-label uppercase tracking-[0.1em] text-[10px]'
              }
              href={link.href}
              onClick={() => setActiveHref(link.href)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="bg-primary-container text-on-primary-container px-4 py-2 text-[10px] font-label font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all"
            type="button"
          >
            CONNECT_WALLET
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <span className="material-symbols-outlined text-primary">menu</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
