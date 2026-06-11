'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Registramos ScrollTrigger por si acaso
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any)

    // Lenis avisa a ScrollTrigger en cada frame
    lenis.on('scroll', ScrollTrigger.update)

    // Sincronizamos el reloj de GSAP con el de Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Desactivamos el lagSmoothing de GSAP para evitar tirones con Lenis
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return <>{children}</>
}