function Hud() {
  return (
    <div className="absolute top-24 left-6 z-20 hidden lg:flex flex-col items-start gap-2">
      <span className="text-[10px] font-label uppercase tracking-widest text-primary/40">
        STATUS // ONLINE
      </span>
      <span className="text-[10px] font-label uppercase tracking-widest text-primary/40">
        COORD // 10.7626° N, 106.6602° E
      </span>
      <div className="w-24 h-[1px] bg-outline-variant/30 mt-1"></div>
    </div>
  )
}

export default Hud
