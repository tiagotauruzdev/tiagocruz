import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tiago Cruz - Especialista em Automação e Inteligência Artificial',
  description: 'Especialista em IA, Automação e Chatbots. Soluções personalizadas com OpenAI, Claude, Gemini e N8N.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
