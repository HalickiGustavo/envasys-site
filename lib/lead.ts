export const WHATSAPP_NUMBER = '5541999326209'
export const WHATSAPP_DISPLAY = '(41) 99932-6209'
export const INSTAGRAM_HANDLE = '@envasysoficial'
export const INSTAGRAM_URL = 'https://instagram.com/envasysoficial'
export const SITE_URL = 'https://www.envasys.com.br'

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export type ProjectCategory =
  | 'cosmeticos'
  | 'hotelaria'
  | 'esporte'
  | 'alimentos'
  | 'petcare'
  | 'amostras'
  | 'outro'

export type Consistency = 'liquido' | 'pastoso' | 'cremoso' | 'nao-sei'

export type ServiceType = 'produto-pronto' | 'full-service'

export type HasArtwork = 'sim' | 'ainda-nao' | 'preciso-ajuda'

export interface ProjectLead {
  lead_source: string
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  category: ProjectCategory | null
  product: string
  consistency: Consistency | null
  sachet_size: string | null
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
  created_at: string
}

export function captureUtms(): {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
} {
  if (typeof window === 'undefined') {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null,
    }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
  }
}

/**
 * Envia o formulário público diretamente para a RPC segura do Supabase
 * usada pelo CRM. Apenas a publishable/anon key fica no navegador.
 */
export async function submitProjectLead(
  lead: ProjectLead,
): Promise<{ ok: boolean }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('[Envasys] Supabase não configurado no site.')
    return { ok: false }
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/submit_website_project_lead`,
      {
        method: 'POST',
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          p_payload: lead,
          p_honeypot: null,
        }),
      },
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('[Envasys] Falha ao enviar lead ao CRM:', error)
      return { ok: false }
    }

    const result = (await response.json()) as { ok?: boolean }
    return { ok: result?.ok === true }
  } catch (error) {
    console.error('[Envasys] Erro ao conectar com o CRM:', error)
    return { ok: false }
  }
}
