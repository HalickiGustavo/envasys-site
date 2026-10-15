import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ProjectWizard } from '@/components/project/project-wizard'

export const metadata: Metadata = {
  title: 'Monte seu projeto | Envasys',
  description:
    'Monte seu projeto de envase em sachês personalizados. Responda algumas perguntas e nossa equipe entrará em contato.',
}

export default function ProjetoPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-secondary">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Envasys — início">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-start justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ProjectWizard />
      </main>
    </div>
  )
}
