import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** pixel height of the logo lockup */
  height?: number
}

export function Logo({ className, height = 40 }: LogoProps) {
  return (
    <Image
      src="/images/envasys-logo.jpeg"
      alt="ENVASYS — Soluções em Envase"
      width={height}
      height={height}
      priority
      className={cn('w-auto object-contain', className)}
      style={{ height }}
    />
  )
}
