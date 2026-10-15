import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function BuildProject() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground">
            <Clock className="h-3.5 w-3.5 text-accent" />
            Leva menos de 2 minutos.
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Monte seu projeto de envase.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Responda algumas perguntas e ajude nossa equipe a entender exatamente o
            que sua marca precisa.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <Link
            href="/projeto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Começar meu projeto
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
