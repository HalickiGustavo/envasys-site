import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { Hero } from '@/components/sections/hero'
import { ServiceModels } from '@/components/sections/service-models'
import { Applications } from '@/components/sections/applications'
import { Formats } from '@/components/sections/formats'
import { HowItWorks } from '@/components/sections/how-it-works'
import { MinimumOrder } from '@/components/sections/minimum-order'
import { BuildProject } from '@/components/sections/build-project'
import { Personalization } from '@/components/sections/personalization'
import { FinalCta } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-14 sm:pb-0">
        <Hero />
        <ServiceModels />
        <Applications />
        <Formats />
        <HowItWorks />
        <MinimumOrder />
        <BuildProject />
        <Personalization />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsappWidget />
    </>
  )
}
