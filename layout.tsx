import "@/styles/globals.css"

import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tiago Cruz - Desenvolvedor Full Stack & Especialista em IA",
  description: "Portfolio de projetos e contato profissional de Tiago Cruz",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex min-h-screen flex-col items-center`}>
        <main className="container mx-auto px-4 flex-grow flex flex-col items-center text-center">{children}</main>
      </body>
    </html>
  )
}
