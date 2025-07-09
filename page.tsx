import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Code, Database, Server, Cpu, Brain, Zap, Award, ExternalLink, ChevronRight } from "lucide-react"
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
    { 
      category: "Inteligência Artificial", 
      items: ["OpenAI API", "Claude API", "Gemini API", "DeepSeek API", "Prompt Engineering", "RAG"],
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    { 
      category: "Automação", 
      items: ["N8N", "Automação Industrial", "IoT", "Pipelines de Dados", "Integração de APIs"],
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Desenvolvimento", 
      items: ["JavaScript", "React", "Python", "C", "C++", "APIs REST"],
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    { 
      category: "Banco de Dados", 
      items: ["SQL", "MySQL", "PostgreSQL"],
      icon: Database,
      color: "from-orange-500 to-red-500"
    },
    { 
      category: "DevOps", 
      items: ["Docker", "Git", "Servidores Linux"],
      icon: Server,
      color: "from-gray-500 to-slate-500"
    },
    { 
      category: "Certificações", 
      items: ["Especialista IA - Pipefy", "Integrações & API - Pipefy", "Administrador de Sistemas - Pipefy"],
      icon: Award,
      color: "from-yellow-500 to-amber-500"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center animated-bg overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="w-full z-20">
          <div className="flex flex-col items-center space-y-6 text-center px-4">
            {/* Profile Image with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-4 border-white/20 backdrop-blur-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3x4%20Tiago%20(1)-Zcimpz5Op7Xa5HCX47ztUWy6t6Cnoy.png"
                  alt="Tiago Cruz"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* Name and title with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Tiago Cruz
                </span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-blue-100 font-medium">
                  Especialista em Automação e Inteligência Artificial
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span>Areiópolis/SP</span>
                </div>
              </div>
            </div>

            {/* Social links with enhanced styling */}
            <div className="flex items-center gap-6 mt-8">
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link 
                      href="https://github.com/tiagotauruzdev" 
                      target="_blank" 
                      className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="h-5 w-5 text-white group-hover:text-blue-200 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black/80 border-white/20 text-white">
                    <p className="text-sm font-medium">github.com/tiagotauruzdev</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link 
                      href="https://www.linkedin.com/in/tiago-cruz-aa8128b7" 
                      target="_blank" 
                      className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 text-white group-hover:text-blue-200 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black/80 border-white/20 text-white">
                    <p className="text-sm font-medium">linkedin.com/in/tiago-cruz-aa8128b7</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link 
                      href="https://www.instagram.com/tiagocruz.ia/" 
                      target="_blank" 
                      className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-5 w-5 text-white group-hover:text-pink-200 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black/80 border-white/20 text-white">
                    <p className="text-sm font-medium">instagram.com/tiagocruz.ia</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link 
                      href="mailto:tiagocruz.lp@gmail.com" 
                      className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="h-5 w-5 text-white group-hover:text-green-200 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black/80 border-white/20 text-white">
                    <p className="text-sm font-medium">tiagocruz.lp@gmail.com</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link 
                      href="tel:14997683073" 
                      className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    >
                      <Phone className="h-5 w-5 text-white group-hover:text-yellow-200 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-black/80 border-white/20 text-white">
                    <p className="text-sm font-medium">(14) 99768-3073</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#projetos">
                  Ver Projetos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 w-full bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground font-medium">
                  Analista de TI Pleno especializado em soluções de Automação com Inteligência Artificial. Atualmente no Shopping Park Botucatu, lidero o desenvolvimento e implementação de chatbots e AI Agents utilizando APIs de LLMs (OpenAI, Claude, Gemini).
                </p>
                <p>
                  Especialista em técnicas de Engenharia de Prompt e RAG para automação avançada de atendimento. Experiência sólida no desenvolvimento de fluxos de trabalho complexos com N8N, integração de APIs e aplicação de IA Generativa para análise preditiva e otimização de processos empresariais.
                </p>
                <p>
                  Certificado pela Pipefy como Especialista em Inteligência Artificial, Integrações & API e Administrador de Sistemas. Desenvolvedor autônomo com foco em soluções personalizadas de automação para PMEs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50">
                  <h3 className="font-semibold text-lg mb-4 text-blue-900 dark:text-blue-100">Posição Atual</h3>
                  <p className="text-blue-800 dark:text-blue-200">Analista de TI Pleno</p>
                  <p className="text-blue-700 dark:text-blue-300">Shopping Park Botucatu</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">2025 - Atual</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50">
                  <h3 className="font-semibold text-lg mb-4 text-purple-900 dark:text-purple-100">Especialização</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-800 dark:text-purple-200">Chatbots & AI Agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-800 dark:text-purple-200">Automação N8N</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-800 dark:text-purple-200">Certificado Pipefy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Habilidades & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {skill.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:scale-105"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 w-full bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projetos em Destaque
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Soluções inovadoras em IA e automação que transformam processos empresariais
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 overflow-hidden">
                {project.preview && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.preview || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/50 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={project.url} target="_blank">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 hover:scale-105"
                    >
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
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vamos Conversar?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Pronto para transformar seus processos com IA e automação? Entre em contato!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                asChild
              >
                <Link href="mailto:tiagocruz.lp@gmail.com">
                  <Mail className="mr-3 h-5 w-5" />
                  tiagocruz.lp@gmail.com
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 dark:border-blue-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent py-6 text-lg font-semibold transition-all duration-300 hover:scale-105" 
                asChild
              >
                <Link href="tel:14997683073">
                  <Phone className="mr-3 h-5 w-5" />
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