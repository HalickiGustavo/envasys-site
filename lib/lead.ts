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
 * Isolated submission function. This is the single integration point for a
 * future CRM/HubSpot/API connection. No credentials should ever live here or
 * anywhere in the frontend — this should call an internal API route that holds
 * the secrets server-side.
 */
export async function submitProjectLead(
  lead: ProjectLead,
): Promise<{ ok: boolean }> {
  // Placeholder: simulate a network request until a backend/CRM is wired up.
  await new Promise((resolve) => setTimeout(resolve, 900))
  if (typeof console !== 'undefined') {
    console.log('[v0] submitProjectLead', lead)
  }
  return { ok: true }
}
