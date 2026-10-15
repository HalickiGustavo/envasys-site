import {
  ClipboardList,
  FileText,
  Lightbulb,
  PackageCheck,
  Ruler,
  ThumbsUp,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  { n: '01', icon: Lightbulb, title: 'Conte sua ideia', desc: 'Nos diga o que deseja desenvolver.' },
  { n: '02', icon: ClipboardList, title: 'Escolha o produto', desc: 'Defina tipo, quantidade e objetivo.' },
  { n: '03', icon: Ruler, title: 'Definimos o formato', desc: 'Indicamos formato e embalagem.' },
  { n: '04', icon: FileText, title: 'Receba a proposta', desc: 'Enviamos um orçamento personalizado.' },
  { n: '05', icon: ThumbsUp, title: 'Aprove o projeto', desc: 'Aprovamos os detalhes do projeto e embalagem.' },
  { n: '06', icon: PackageCheck, title: 'Produção e entrega', desc: 'Seu produto pronto para o mercado.' },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Como funciona?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-lg text-primary-foreground/75">
              Do primeiro lote à grande escala. Simples e transparente.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="text-2xl font-extrabold text-primary-foreground/25">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
