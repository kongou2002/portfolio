import type { FormEvent } from 'react'

function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'Unknown'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
    )

    window.location.href = `mailto:giachan9@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-32 bg-surface-container-low border-t border-white/5" id="contact">
      <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-7xl font-headline font-bold text-white mb-8 tracking-tighter">
            LET&apos;S
            <br />
            <span className="text-primary">BUILD</span>
          </h2>
          <p className="text-outline-variant text-lg mb-12 max-w-md">
            Open for collaborations in Web3, Fintech, and high-performance mobile ecosystems.
            Available for freelance or full-time engagements.
          </p>
          <div className="space-y-6">
            <a className="flex items-center gap-6 group" href="mailto:giachan9@gmail.com">
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">
                  mail
                </span>
              </div>
              <span className="text-xl font-headline text-white group-hover:text-primary transition-all underline decoration-primary/20">
                giachan9@gmail.com
              </span>
            </a>
            <a className="flex items-center gap-6 group" href="tel:+84933857813">
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">
                  call
                </span>
              </div>
              <span className="text-xl font-headline text-white group-hover:text-primary transition-all underline decoration-primary/20">
                +84 933 857 813
              </span>
            </a>
            <a
              className="flex items-center gap-6 group"
              href="https://www.linkedin.com/in/nguyen-bui-gia-chan-432a701a0/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-primary transition-all">
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">
                  link
                </span>
              </div>
              <span className="text-xl font-headline text-white group-hover:text-primary transition-all underline decoration-primary/20">
                LinkedIn Profile
              </span>
            </a>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-outline">location_on</span>
              </div>
              <span className="text-xl font-headline text-white">Ho Chi Minh City, VN</span>
            </div>
          </div>
        </div>
        <form className="p-8 border border-white/5 bg-background/50 relative" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-[10px] font-label tracking-widest text-primary uppercase mb-4">
              Transmission Payload
            </label>
            <input
              className="w-full bg-transparent border-b border-outline-variant focus:border-secondary transition-all outline-none py-4 font-label text-white text-sm uppercase"
              name="name"
              placeholder="YOUR_NAME"
              required
              type="text"
            />
          </div>
          <div className="mb-8">
            <label className="block text-[10px] font-label tracking-widest text-primary uppercase mb-4">
              Reply Frequency
            </label>
            <input
              className="w-full bg-transparent border-b border-outline-variant focus:border-secondary transition-all outline-none py-4 font-label text-white text-sm uppercase"
              name="email"
              placeholder="EMAIL_ADDRESS"
              required
              type="email"
            />
          </div>
          <div className="mb-12">
            <label className="block text-[10px] font-label tracking-widest text-primary uppercase mb-4">
              Data Stream
            </label>
            <textarea
              className="w-full bg-transparent border-b border-outline-variant focus:border-secondary transition-all outline-none py-4 font-label text-white text-sm uppercase resize-none"
              name="message"
              placeholder="PROJECT_DETAILS"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            className="w-full bg-secondary text-on-secondary-fixed py-6 font-label font-bold tracking-[0.4em] uppercase hover:brightness-110 active:scale-95 transition-all"
            type="submit"
          >
            SEND_SIGNAL
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
