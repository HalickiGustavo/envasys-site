'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Aplicações', href: '/#aplicacoes' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Sobre nós', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-[0_1px_20px_rgba(15,61,64,0.06)]'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-28 lg:px-8">
        <Link href="/#inicio" aria-label="Envasys — início" onClick={() => setOpen(false)}>
          <Logo height={60} className="lg:hidden" />
          <Logo height={92} className="hidden lg:block" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/projeto"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98] lg:inline-flex"
          >
            Solicite um orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden border-t border-border bg-background transition-[max-height] duration-300',
          open ? 'max-h-[420px]' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/projeto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Solicite um orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
