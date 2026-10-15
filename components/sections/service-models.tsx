import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TERCEIRIZADO = [
  'Envase de líquidos, pastosos e cremosos',
  'Embalagem personalizada',
  'Controle de qualidade',
  'Acondicionamento e entrega',
]

const FULL_SERVICE = [
  'Desenvolvimento de produto com parceiros',
  'Indicação/fornecimento de matéria-prima',
  'Desenvolvimento da arte e embalagem',
  'Envase e acabamento',
  'Suporte durante todo o processo',
]

export function ServiceModels() {
  return (
    <section id="solucoes" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Você escolhe até onde a Envasys participa.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Soluções flexíveis para diferentes momentos da sua marca, com suporte
              técnico, qualidade e agilidade.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={1}>
            <article className="flex h-full flex-col rounded-2xl bg-primary p-8 text-primary-foreground shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Modelo 01
              </span>
              <h3 className="mt-3 text-2xl font-bold">Envase Terceirizado</h3>
              <p className="mt-3 text-primary-foreground/80 leading-relaxed">
                Você fornece o produto a granel. Nós cuidamos do envase, embalagem e
                acabamento.
              </p>
              <ul className="mt-6 space-y-3">
                {TERCEIRIZADO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={2}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Modelo 02
              </span>
              <h3 className="mt-3 text-2xl font-bold text-foreground">
                Full Service / White Label
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Você traz a ideia. A Envasys ajuda a estruturar o projeto completo.
              </p>
              <ul className="mt-6 space-y-3">
                {FULL_SERVICE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="/images/equipment.png"
                alt="Equipamento industrial moderno de envase de sachês"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
