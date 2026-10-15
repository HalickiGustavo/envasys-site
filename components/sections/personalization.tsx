import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FINISHES = [
  { name: 'Brilho', swatch: 'linear-gradient(135deg, oklch(0.92 0.01 200), oklch(0.78 0.02 200))' },
  { name: 'Fosco', swatch: 'linear-gradient(135deg, oklch(0.32 0.01 210), oklch(0.22 0.01 210))' },
  { name: 'Metalizado', swatch: 'linear-gradient(135deg, oklch(0.86 0.09 90), oklch(0.68 0.10 75))' },
  { name: 'Kraft', swatch: 'linear-gradient(135deg, oklch(0.82 0.06 75), oklch(0.71 0.07 65))' },
]

const FORMATS = ['Tradicional', 'Slim (alongado)', 'Quadrado']

export function Personalization() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary">
              <Image
                src="/images/personalization.png"
                alt="Mockups de sachês com marcas e identidades visuais personalizadas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Personalização
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                A sua marca,
                <br />
                do seu jeito.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Sua identidade aplicada a uma embalagem desenvolvida para valorizar o
                seu produto — do design ao envase final.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Acabamentos
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {FINISHES.map((f) => (
                    <div key={f.name} className="flex items-center gap-2.5">
                      <span
                        className="inline-block h-8 w-8 rounded-lg border border-border shadow-sm"
                        style={{ background: f.swatch }}
                        aria-hidden
                      />
                      <span className="text-sm font-semibold text-foreground">{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Formatos
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {FORMATS.map((format) => (
                    <span
                      key={format}
                      className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <Link
                href="/projeto"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Quero criar meu sachê
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
