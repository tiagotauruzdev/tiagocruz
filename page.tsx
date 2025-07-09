import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Code, Database, Server, Cpu, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Portfolio() {
  const projects = [
    {
      name: "Automatizefy",
      description:
        "Plataforma especializada em automação de redes sociais e atendimento ao cliente utilizando Inteligência Artificial. Soluções personalizadas para aumentar a produtividade e engajamento digital das empresas.",
      url: "https://automatizefy.vercel.app",
      preview:
        "https://sjc.microlink.io/R1DemNGoYhPzo6l1oPbNRLiuubW96DULbzq_87RbcoDlkzH6AffX6dkKMng59Dq9swdbrbZYWfUiPJEfjmc9rw.jpeg",
      featured: true,
      tags: ["IA", "Automação", "Redes Sociais", "Atendimento"],
    },
    {
      name: "AIfy",
      description:
        "Plataforma educacional focada em capacitar profissionais para a transição de carreira, ensinando automação empresarial com IA. Curso completo com metodologia prática e casos reais.",
      url: "https://aify-pied.vercel.app",
      preview:
        "https://sjc.microlink.io/3M93S3y-lz7MA5PqzXvy1vRhtIrcZ6Mw8XUX91XY_BRMZUb3HQ7fPYR-HAiR-FJVwRBZpGwCbfLxzUDYSvWecw.jpeg",
      featured: true,
      tags: ["Educação", "IA", "Automação", "Carreira"],
    },
    {
      name: "Dashboard Financeiro",
      description:
        "Dashboard interativo para análise e visualização de dados financeiros. Interface moderna com gráficos dinâmicos para acompanhamento de receitas, despesas e indicadores financeiros.",
      url: "https://github.com/tiagotauruzdev/financas",
      featured: true,
      tags: ["Dashboard", "Finanças", "Análise de Dados", "Visualização"],
    },
    {
      name: "Chatbots Inteligentes",
      description: "Desenvolvimento de chatbots personalizados utilizando APIs de LLMs (OpenAI, Claude, Gemini) com técnicas avançadas de Prompt Engineering e RAG para automação de atendimento.",
      url: "https://github.com/tiagotauruzdev",
      featured: true,
      tags: ["Chatbots", "LLMs", "OpenAI", "Claude", "Gemini"],
    },
    {
      name: "Automação N8N",
      description: "Criação e implementação de fluxos de trabalho complexos com N8N, integrando diversas APIs para otimizar processos operacionais e aumentar a eficiência empresarial.",
      url: "https://github.com/tiagotauruzdev",
      featured: true,
      tags: ["N8N", "Automação", "APIs", "Workflows"],
    },
    {
      name: "Análise Preditiva com IA",
      description: "Aplicação de técnicas de IA Generativa e análise preditiva para identificar gargalos e otimizar a tomada de decisão estratégica em empresas.",
      url: "https://github.com/tiagotauruzdev",
      featured: true,
      tags: ["IA Generativa", "Análise Preditiva", "Python", "Machine Learning"],
    },
  ]

  const skills = [
    { category: "Inteligência Artificial", items: ["OpenAI API", "Claude API", "Gemini API", "DeepSeek API", "Prompt Engineering", "RAG"] },
    { category: "Automação", items: ["N8N", "Automação Industrial", "IoT", "Pipelines de Dados", "Integração de APIs"] },
    { category: "Desenvolvimento", items: ["JavaScript", "React", "Python", "C", "C++", "APIs REST"] },
    { category: "Banco de Dados", items: ["SQL", "MySQL", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "Git", "Servidores Linux"] },
    { category: "Certificações", items: ["Especialista IA - Pipefy", "Integrações & API - Pipefy", "Administrador de Sistemas - Pipefy"] },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center animated-bg">
        <div className="w-full">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-primary">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3x4%20Tiago%20(1)-Zcimpz5Op7Xa5HCX47ztUWy6t6Cnoy.png"
                alt="Tiago Cruz"
                fill
                className="object-cover"
                priority
              />
            </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Tiago Cruz</h1>
              <p className="max-w-[800px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Especialista em Automação e Inteligência Artificial
            </p>
              <div className="flex items-center gap-4 text-gray-300 mt-4 relative z-10">
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href="https://github.com/tiagotauruzdev" target="_blank" className="p-2 hover:text-primary transition-colors rounded-full hover:bg-white/10">
                        <Github className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-background border-primary">
                      <p className="text-sm font-medium">github.com/tiagotauruzdev</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href="https://www.linkedin.com/in/tiago-cruz-aa8128b7" target="_blank" className="p-2 hover:text-primary transition-colors rounded-full hover:bg-white/10">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-background border-primary">
                      <p className="text-sm font-medium">linkedin.com/in/tiago-cruz-aa8128b7</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href="https://www.instagram.com/tiagocruz.ia/" target="_blank" className="p-2 hover:text-primary transition-colors rounded-full hover:bg-white/10">
                        <Instagram className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-background border-primary">
                      <p className="text-sm font-medium">instagram.com/tiagocruz.ia</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href="mailto:tiagocruz.lp@gmail.com" className="p-2 hover:text-primary transition-colors rounded-full hover:bg-white/10">
                        <Mail className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-background border-primary">
                      <p className="text-sm font-medium">tiagocruz.lp@gmail.com</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href="tel:14997683073" className="p-2 hover:text-primary transition-colors rounded-full hover:bg-white/10">
                        <Phone className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-background border-primary">
                      <p className="text-sm font-medium">(14) 99768-3073</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 w-full">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Sobre</h2>
          <div className="max-w-[800px] mx-auto text-gray-500 dark:text-gray-400 space-y-4">
            <p>
              Analista de TI Pleno especializado em soluções de Automação com Inteligência Artificial. Atualmente no Shopping Park Botucatu, lidero o desenvolvimento e implementação de chatbots e AI Agents utilizando APIs de LLMs (OpenAI, Claude, Gemini).
            </p>
            <p>
              Especialista em técnicas de Engenharia de Prompt e RAG para automação avançada de atendimento. Experiência sólida no desenvolvimento de fluxos de trabalho complexos com N8N, integração de APIs e aplicação de IA Generativa para análise preditiva e otimização de processos empresariais.
            </p>
            <p>
              Certificado pela Pipefy como Especialista em Inteligência Artificial, Integrações & API e Administrador de Sistemas. Desenvolvedor autônomo com foco em soluções personalizadas de automação para PMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-24 bg-muted/50 w-full">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Habilidades</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[800px] mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {skill.category === "Desenvolvimento" && <Code className="h-5 w-5" />}
                    {skill.category === "Banco de Dados" && <Database className="h-5 w-5" />}
                    {skill.category === "DevOps" && <Server className="h-5 w-5" />}
                    {skill.category === "IA e Automação" && <Brain className="h-5 w-5" />}
                    {skill.category === "Outros" && <Cpu className="h-5 w-5" />}
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge key={i} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 w-full">
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Projetos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                {project.preview && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.preview || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">{project.name}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={project.url} target="_blank">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Ver Projeto
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-muted/50 w-full">
        <div className="w-full">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Contato</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Vamos conversar sobre seu próximo projeto?
            </p>
            <div className="flex flex-col gap-4 max-w-[800px] w-full sm:flex-row">
              <Button className="w-full" asChild>
                <Link href="mailto:tiagocruz.lp@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  tiagocruz.lp@gmail.com
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="tel:14997683073">
                  <Phone className="mr-2 h-4 w-4" />
                  (14) 99768-3073
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
