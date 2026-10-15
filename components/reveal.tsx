'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4 | 5
  as?: ElementType
}

export function Reveal({ children, className, delay, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'reveal',
        visible && 'is-visible',
        delay === 1 && 'reveal-delay-1',
        delay === 2 && 'reveal-delay-2',
        delay === 3 && 'reveal-delay-3',
        delay === 4 && 'reveal-delay-4',
        delay === 5 && 'reveal-delay-5',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
