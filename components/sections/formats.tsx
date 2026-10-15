import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Palette, Ruler, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SIZES = ['5 g', '7 ml', '10 ml', '15 g', '20 g', '30 g', '50 g']

const HIGHLIGHTS = [
  { icon: Ruler, title: 'Diferentes formatos', desc: 'Stick, vertical, quadrado e horizontal' },
  { icon: Palette, title: 'Sua arte e suas cores', desc: 'Identidade visual aplicada ao sachê' },
  { icon: Sparkles, title: 'Projeto personalizado', desc: 'Adaptado à necessidade da marca' },
]

export function Formats() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Um formato para cada projeto.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                Personalizamos tamanho, formato, cores e identidade visual de acordo
                com as necessidades da sua marca.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {SIZES.map((size) => (
                  <span
                    key={size}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <ul className="mt-8 space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-primary">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-foreground">{h.title}</p>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={3}>
              <Link
                href="/projeto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Ver possibilidades
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={1} className="order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
              <Image
                src="/images/formats.png"
                alt="Variedade de formatos de sachê: stick, vertical, quadrado e horizontal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
