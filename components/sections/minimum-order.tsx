import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function MinimumOrder() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-secondary p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <Reveal>
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                Comece pequeno.
                <br />
                Valide.
                <br />
                Depois escale.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Uma solução para marcas que querem testar produtos, realizar
                lançamentos ou começar sua operação sem grandes estoques.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link
                href="/projeto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Quero começar meu projeto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                A partir de
              </p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
                1.000
              </p>
              <p className="text-xl font-bold">sachês*</p>
              <p className="mt-6 text-xs leading-relaxed text-primary-foreground/60">
                *Quantidade mínima pode variar conforme produto, embalagem e
                personalização.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
