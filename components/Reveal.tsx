'use client'

import { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  stagger?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Reveal({ children, stagger = false, className = '', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={(stagger ? 'reveal-stagger ' : 'reveal ') + className}
      style={style}
    >
      {children}
    </div>
  )
}
