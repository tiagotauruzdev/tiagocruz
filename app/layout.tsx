import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tiago Cruz - Desenvolvedor Full Stack & Especialista em IA',
  description: 'Portfolio de projetos e contato profissional de Tiago Cruz',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
