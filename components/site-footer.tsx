import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  SITE_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '@/lib/lead'

const LINKS = [
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Aplicações', href: '/#aplicacoes' },
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Monte seu projeto', href: '/projeto' },
  { label: 'Contato', href: '/#contato' },
]

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-28 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <Logo height={100} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sua marca. Nosso envase. Envase terceirizado de líquidos, pastosos e
              cremosos em sachês personalizados para a sua marca.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink('Olá! Vim pelo site da Envasys e gostaria de conversar sobre um projeto de envase.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-accent" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="h-4 w-4 text-accent" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  www.envasys.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Envasys — Soluções em Envase. Todos os direitos reservados.</p>
          <p>Sua marca. Nosso envase.</p>
        </div>
      </div>
    </footer>
  )
}
