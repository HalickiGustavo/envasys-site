import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/lead'

export function FinalCta() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Tem um produto ou apenas uma ideia?
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            Vamos descobrir juntos a melhor maneira de transformar seu projeto em
            sachê.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/projeto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Monte seu projeto
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={whatsappLink('Olá! Vim pelo site da Envasys e gostaria de conversar sobre um projeto de envase.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
