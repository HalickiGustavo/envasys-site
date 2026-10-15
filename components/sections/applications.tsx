import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const APPS = [
  {
    slug: 'cosmeticos',
    title: 'Cosméticos',
    desc: 'Shampoo, condicionador, máscaras, cremes, séruns e muito mais.',
    image: '/images/app-cosmeticos.png',
  },
  {
    slug: 'hotelaria',
    title: 'Hotelaria',
    desc: 'Amenities, kits personalizados, shampoo, sabonete e muito mais.',
    image: '/images/app-hotelaria.png',
  },
  {
    slug: 'esporte',
    title: 'Esporte & Suplementação',
    desc: 'Géis energéticos e outras formulações compatíveis.',
    image: '/images/app-esporte.png',
  },
  {
    slug: 'alimentos',
    title: 'Alimentos',
    desc: 'Mel, ketchup, mostarda, maionese, molhos e outros produtos compatíveis.',
    image: '/images/app-alimentos.png',
  },
  {
    slug: 'petcare',
    title: 'Pet Care',
    desc: 'Shampoo, condicionador e produtos de higiene pet.',
    image: '/images/app-petcare.png',
  },
  {
    slug: 'amostras',
    title: 'Amostras & Lançamentos',
    desc: 'Amostras, influenciadores, eventos e lançamentos.',
    image: '/images/app-amostras.png',
  },
] as const

export function Applications() {
  return (
    <section id="aplicacoes" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              O que podemos envasar?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-4 text-lg text-muted-foreground">
              Diversos segmentos. Grandes possibilidades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app, i) => (
            <Reveal key={app.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">{app.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {app.desc}
                  </p>
                  <Link
                    href={`/projeto?categoria=${app.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    Quero envasar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
