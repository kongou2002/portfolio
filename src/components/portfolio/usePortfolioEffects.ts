import { useEffect, type RefObject } from 'react'

export function usePortfolioEffects(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    const typewriter = document.getElementById('typewriter-text')
    if (!canvas || !typewriter) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }> = []
    let frameId = 0
    let timeoutId: number | undefined

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = []
      for (let i = 0; i < 60; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00d4ff'
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        particle.x += particle.speedX
        particle.y += particle.speedY
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)'
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      frameId = window.requestAnimationFrame(animate)
    }

    const words = [
      'Frontend Developer',
      'Mobile Developer',
      'Software Engineer',
      'Web3 Builder',
    ]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const current = words[wordIndex]
      if (isDeleting) {
        typewriter.textContent = current.substring(0, charIndex)
        charIndex -= 1
      } else {
        typewriter.textContent = current.substring(0, charIndex)
        charIndex += 1
      }

      let typeSpeed = 100
      if (isDeleting) typeSpeed /= 2

      if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true
        typeSpeed = 2000
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
        typeSpeed = 500
      }

      timeoutId = window.setTimeout(type, typeSpeed)
    }

    window.addEventListener('resize', init)
    init()
    animate()
    type()

    return () => {
      window.removeEventListener('resize', init)
      window.cancelAnimationFrame(frameId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [canvasRef])
}
