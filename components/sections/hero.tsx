import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers, PackageCheck, Droplets, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const INDICATORS = [
  {
    n: '01',
    icon: Layers,
    title: '5 g a 50 g',
    desc: 'Diversos tamanhos e formatos',
  },
  {
    n: '02',
    icon: PackageCheck,
    title: 'A partir de 1.000 unidades',
    desc: 'Pequenos e grandes lotes',
  },
  {
    n: '03',
    icon: Droplets,
    title: 'Líquidos, pastosos e cremosos',
    desc: 'Versatilidade para diferentes produtos',
  },
  {
    n: '04',
    icon: Sparkles,
    title: 'Projeto personalizado',
    desc: 'Sua marca, seu produto, sua embalagem',
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-2 lg:px-8">
        {/* TEXT BLOCK — order 1 (mobile), top-left (desktop) */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 lg:pt-6">
          <Reveal>
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Sua marca. Nosso envase.
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-[4.1rem]">
              Transformamos seu produto em <span className="text-accent">sachê.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Envase terceirizado de líquidos, pastosos e cremosos, com soluções
              personalizadas para sua marca.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projeto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Solicite um orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#solucoes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                Conheça nossas soluções
              </Link>
            </div>
          </Reveal>
        </div>

        {/* SACHET COMPOSITION — order 2 (mobile, between buttons and indicators), right column (desktop) */}
        <Reveal delay={2} className="relative order-2 lg:col-start-2 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto w-[90%] lg:mx-0 lg:w-full">
            {/* very subtle ambiance behind the products */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden
              style={{
                background:
                  'radial-gradient(120% 90% at 62% 40%, color-mix(in oklch, var(--accent) 12%, transparent) 0%, transparent 60%)',
              }}
            />
            {/* soft shadow under the products */}
            <div
              className="pointer-events-none absolute inset-x-[8%] bottom-[6%] -z-10 h-[10%] rounded-[50%] blur-2xl"
              aria-hidden
              style={{ background: 'color-mix(in oklch, var(--primary) 30%, transparent)' }}
            />

            <Image
              src="/images/hero-sachets-v2.png"
              alt="Linha de sachês Envasys em diferentes tamanhos e formatos: shampoo 10 ml, condicionador 10 ml, gel energético 15 g, creme facial 5 g, máscara capilar 15 g e sabonete líquido 50 g"
              width={1481}
              height={836}
              priority
              sizes="(max-width: 1024px) 90vw, 53vw"
              className="h-auto w-full object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.18)]"
            />
          </div>
        </Reveal>

        {/* INDICATORS — order 3 (mobile, after image), bottom-left (desktop) */}
        <Reveal delay={4} className="order-3 lg:col-span-2 lg:col-start-1 lg:row-start-2">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-7 lg:grid-cols-4">
            {INDICATORS.map((item) => (
              <div key={item.n} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-accent">
                    {item.n}
                  </span>
                  <dt className="text-sm font-bold leading-tight text-foreground">
                    {item.title}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground">{item.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
