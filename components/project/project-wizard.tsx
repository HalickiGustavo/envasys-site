'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  Droplet,
  Layers,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  captureUtms,
  submitProjectLead,
  whatsappLink,
  type Consistency,
  type HasArtwork,
  type ProjectCategory,
  type ProjectLead,
  type ServiceType,
} from '@/lib/lead'

const TOTAL = 8

const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'cosmeticos', label: 'Cosméticos' },
  { value: 'hotelaria', label: 'Hotelaria' },
  { value: 'esporte', label: 'Esporte & Suplementação' },
  { value: 'alimentos', label: 'Alimentos' },
  { value: 'petcare', label: 'Pet Care' },
  { value: 'amostras', label: 'Amostras' },
  { value: 'outro', label: 'Outro' },
]

const CONSISTENCIES: { value: Consistency; label: string; icon: typeof Droplet }[] = [
  { value: 'liquido', label: 'Líquido', icon: Droplet },
  { value: 'pastoso', label: 'Pastoso', icon: Layers },
  { value: 'cremoso', label: 'Cremoso', icon: Sparkles },
  { value: 'nao-sei', label: 'Não sei', icon: CircleHelp },
]

const SIZES = ['5 g/ml', '7 g/ml', '10 g/ml', '15 g/ml', '20 g/ml', '30 g/ml', '50 g/ml', 'Ainda não sei']

const QUANTITIES = ['1.000 – 4.999', '5.000 – 9.999', '10.000 – 49.999', '50.000+', 'Ainda não sei']

const SERVICES: { value: ServiceType; title: string; desc: string }[] = [
  {
    value: 'produto-pronto',
    title: 'Tenho o produto pronto',
    desc: 'Já possuo o produto a granel e preciso do envase.',
  },
  {
    value: 'full-service',
    title: 'Quero Full Service',
    desc: 'Tenho uma ideia e quero ajuda para estruturar o projeto.',
  },
]

const ARTWORKS: { value: HasArtwork; label: string }[] = [
  { value: 'sim', label: 'Sim, já tenho' },
  { value: 'ainda-nao', label: 'Ainda não' },
  { value: 'preciso-ajuda', label: 'Preciso de ajuda' },
]

interface FormState {
  category: ProjectCategory | null
  product: string
  consistency: Consistency | null
  sachet_size: string | null
  sachet_size_custom: string
  quantity: string | null
  service_type: ServiceType | null
  has_artwork: HasArtwork | null
  name: string
  company: string
  whatsapp: string
  email: string
  city: string
  state: string
  notes: string
  consent: boolean
}

function initialState(category: ProjectCategory | null): FormState {
  return {
    category,
    product: '',
    consistency: null,
    sachet_size: null,
    sachet_size_custom: '',
    quantity: null,
    service_type: null,
    has_artwork: null,
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    notes: '',
    consent: false,
  }
}

const STEP_TITLES = [
  'O que você deseja envasar?',
  'Qual produto você deseja envasar?',
  'Qual é a consistência do produto?',
  'Quanto deseja colocar em cada sachê?',
  'Quantos sachês pretende produzir?',
  'Como podemos ajudar?',
  'Você já possui a arte da embalagem?',
  'Agora precisamos conhecer você.',
]

export function ProjectWizard() {
  const searchParams = useSearchParams()
  const preCategory = useMemo<ProjectCategory | null>(() => {
    const c = searchParams.get('categoria')
    const valid = CATEGORIES.map((x) => x.value)
    return c && (valid as string[]).includes(c) ? (c as ProjectCategory) : null
  }, [searchParams])

  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormState>(() => initialState(preCategory))
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const canContinue = useMemo(() => {
    switch (step) {
      case 0:
        return data.category !== null
      case 1:
        return data.product.trim().length > 1
      case 2:
        return data.consistency !== null
      case 3:
        return data.sachet_size !== null || data.sachet_size_custom.trim().length > 0
      case 4:
        return data.quantity !== null
      case 5:
        return data.service_type !== null
      case 6:
        return data.has_artwork !== null
      case 7:
        return (
          data.name.trim().length > 1 &&
          data.whatsapp.trim().length >= 8 &&
          /\S+@\S+\.\S+/.test(data.email) &&
          data.consent
        )
      default:
        return false
    }
  }, [step, data])

  function next() {
    if (step < TOTAL - 1) setStep((s) => s + 1)
  }
  function back() {
    if (step > 0) setStep((s) => s - 1)
  }

  async function handleSubmit() {
    if (!canContinue) return
    setSubmitting(true)
    setError(null)
    const utms = captureUtms()
    const lead: ProjectLead = {
      lead_source: 'site-projeto',
      ...utms,
      category: data.category,
      product: data.product.trim(),
      consistency: data.consistency,
      sachet_size: data.sachet_size_custom.trim() || data.sachet_size,
      quantity: data.quantity,
      service_type: data.service_type,
      has_artwork: data.has_artwork,
      name: data.name.trim(),
      company: data.company.trim(),
      whatsapp: data.whatsapp.trim(),
      email: data.email.trim(),
      city: data.city.trim(),
      state: data.state.trim(),
      notes: data.notes.trim(),
      consent: data.consent,
      created_at: new Date().toISOString(),
    }
    try {
      const res = await submitProjectLead(lead)
      if (res.ok) setSubmitted(true)
      else setError('Não foi possível enviar. Tente novamente.')
    } catch {
      setError('Não foi possível enviar. Tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return <SuccessScreen />
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">
            Etapa {step + 1} de {TOTAL}
          </p>
          <div className="flex items-center gap-1.5" aria-hidden>
            {Array.from({ length: TOTAL }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors',
                  i <= step ? 'bg-accent' : 'bg-border',
                )}
              />
            ))}
          </div>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
        <h1 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {STEP_TITLES[step]}
        </h1>

        <div className="mt-8">
          {step === 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CATEGORIES.map((c) => (
                <SelectCard
                  key={c.value}
                  selected={data.category === c.value}
                  onClick={() => update('category', c.value)}
                >
                  {c.label}
                </SelectCard>
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <input
                type="text"
                value={data.product}
                onChange={(e) => update('product', e.target.value)}
                placeholder='Ex.: "Shampoo", "Gel energético", "Mel"...'
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                autoFocus
              />
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {CONSISTENCIES.map((c) => (
                <SelectCard
                  key={c.value}
                  selected={data.consistency === c.value}
                  onClick={() => update('consistency', c.value)}
                >
                  <c.icon className="mb-2 h-6 w-6" />
                  {c.label}
                </SelectCard>
              ))}
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {SIZES.map((s) => (
                  <SelectCard
                    key={s}
                    selected={data.sachet_size === s}
                    onClick={() => {
                      update('sachet_size', s)
                      update('sachet_size_custom', '')
                    }}
                  >
                    {s}
                  </SelectCard>
                ))}
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-medium text-muted-foreground">
                  Quantidade personalizada (opcional)
                </span>
                <input
                  type="text"
                  value={data.sachet_size_custom}
                  onChange={(e) => {
                    update('sachet_size_custom', e.target.value)
                    if (e.target.value) update('sachet_size', null)
                  }}
                  placeholder="Ex.: 12 g/ml"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </label>
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {QUANTITIES.map((q) => (
                <SelectCard
                  key={q}
                  selected={data.quantity === q}
                  onClick={() => update('quantity', q)}
                  align="left"
                >
                  {q}
                </SelectCard>
              ))}
            </div>
          )}

          {step === 5 && (
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => update('service_type', s.value)}
                  className={cn(
                    'flex h-full flex-col rounded-2xl border p-6 text-left transition-all',
                    data.service_type === s.value
                      ? 'border-accent bg-accent/10 ring-2 ring-accent/40'
                      : 'border-border bg-background hover:border-accent/50',
                  )}
                >
                  <span className="text-lg font-bold text-foreground">{s.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </span>
                </button>
              ))}
            </div>
          )}

          {step === 6 && (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {ARTWORKS.map((a) => (
                <SelectCard
                  key={a.value}
                  selected={data.has_artwork === a.value}
                  onClick={() => update('has_artwork', a.value)}
                >
                  {a.label}
                </SelectCard>
              ))}
            </div>
          )}

          {step === 7 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" required>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Empresa / Marca">
                <input
                  type="text"
                  value={data.company}
                  onChange={(e) => update('company', e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="WhatsApp" required>
                <input
                  type="tel"
                  value={data.whatsapp}
                  onChange={(e) => update('whatsapp', e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="form-input"
                />
              </Field>
              <Field label="E-mail" required>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Cidade">
                <input
                  type="text"
                  value={data.city}
                  onChange={(e) => update('city', e.target.value)}
                  className="form-input"
                />
              </Field>
              <Field label="Estado">
                <input
                  type="text"
                  value={data.state}
                  onChange={(e) => update('state', e.target.value)}
                  className="form-input"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Conte mais sobre seu projeto">
                  <textarea
                    value={data.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    rows={3}
                    className="form-input resize-none"
                  />
                </Field>
              </div>
              <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Concordo em ser contatado pela equipe Envasys sobre este projeto.
                </span>
              </label>
            </div>
          )}
        </div>

        {error && (
          <p className="mt-4 text-sm font-medium text-destructive" role="alert">
            {error}
          </p>
        )}

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>

          {step < TOTAL - 1 ? (
            <button
              type="button"
              onClick={next}
              disabled={!canContinue}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40"
            >
              Continuar
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canContinue || submitting}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40"
            >
              {submitting ? 'Enviando...' : 'Enviar meu projeto'}
              {!submitting && <ArrowRight className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function SelectCard({
  children,
  selected,
  onClick,
  align = 'center',
}: {
  children: React.ReactNode
  selected: boolean
  onClick: () => void
  align?: 'center' | 'left'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex flex-col rounded-xl border px-4 py-4 text-sm font-semibold transition-all',
        align === 'center' ? 'items-center justify-center text-center' : 'items-start text-left',
        selected
          ? 'border-accent bg-accent/10 text-foreground ring-2 ring-accent/40'
          : 'border-border bg-background text-foreground hover:border-accent/50',
      )}
    >
      {children}
    </button>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

function SuccessScreen() {
  return (
    <div className="mx-auto w-full max-w-lg text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
        <Check className="h-8 w-8" />
      </div>
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">
        Projeto recebido!
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Obrigado por compartilhar sua ideia com a Envasys. Nossa equipe analisará as
        informações e entrará em contato para conversar sobre o seu projeto.
      </p>
      <a
        href={whatsappLink('Olá! Acabei de enviar meu projeto pelo site da Envasys e gostaria de conversar agora.')}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        <MessageCircle className="h-5 w-5" />
        Falar agora pelo WhatsApp
      </a>
    </div>
  )
}
