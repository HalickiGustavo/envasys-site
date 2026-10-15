'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/lead'

const MESSAGE =
  'Olá! Vim pelo site da Envasys e gostaria de conversar sobre um projeto de envase.'

export function WhatsappWidget() {
  return (
    <>
      {/* Floating button (desktop / tablet) */}
      <a
        href={whatsappLink(MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95 sm:flex"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Bottom bar (mobile) */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-border sm:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href={whatsappLink(MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-full items-center justify-center gap-1.5 whitespace-nowrap bg-card px-3 text-sm font-semibold text-primary"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          WhatsApp
        </a>
        <Link
          href="/projeto"
          className="flex h-14 w-full items-center justify-center gap-1.5 whitespace-nowrap border-l border-border bg-primary px-3 text-sm font-semibold text-primary-foreground"
        >
          <ArrowRight className="h-4 w-4 shrink-0" />
          Solicitar orçamento
        </Link>
      </div>
    </>
  )
}
