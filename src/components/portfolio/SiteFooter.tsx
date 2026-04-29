function SiteFooter() {
  return (
    <footer className="bg-[#10131a] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 max-w-[1440px] mx-auto">
        <div className="text-lg font-black text-white font-headline">
          KONGOU<span className="text-primary-container">_</span>MONOLITH
        </div>
        <div className="flex gap-8">
          <a
            className="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-all"
            href="https://github.com/kongou2002"
          >
            GITHUB
          </a>
          <a
            className="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-all"
            href="https://www.linkedin.com/in/nguyen-bui-gia-chan-432a701a0/"
            rel="noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
          <a
            className="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-all"
            href="#"
          >
            X_COM
          </a>
          <a
            className="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-widest text-slate-500 hover:text-cyan-300 transition-all"
            href="#"
          >
            TELEGRAM
          </a>
        </div>
        <div className="text-[10px] font-['IBM_Plex_Mono'] uppercase tracking-widest text-slate-500">
          © 2026 KONGOU_MONOLITH // ALL_RIGHTS_RESERVED
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
