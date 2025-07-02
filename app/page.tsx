"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Shield,
  Target,
  Rocket,
  Clock,
  HeadphonesIcon,
  Database,
  ChevronRight,
  Play,
  Calendar,
  Zap,
  Globe,
  Building,
  BarChart3,
  Settings,
  Code,
  Server,
  Cloud,
  Monitor,
  Smartphone,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const stats = [
    { number: "100+", label: "Projetos e Treinamentos Concluídos", icon: CheckCircle, color: "text-blue-600" },
    { number: "4+", label: "Anos de Experiência", icon: TrendingUp, color: "text-green-600" },
    { number: "200+", label: "Clientes Satisfeitos", icon: Users, color: "text-purple-600" },
    { number: "10+", label: "Consultores Certificados", icon: Award, color: "text-orange-600" },
  ]

  const services = [
    {
      icon: TrendingUp,
      title: "Consultoria Estratégica",
      description: "Análise profunda e estratégia personalizada para transformação digital",
      features: ["Análise de ROI", "Roadmap detalhado", "Gestão de mudança", "Otimização de processos"],
      color: "from-blue-500 to-blue-700",
      badge: "Mais Popular",
    },
    {
      icon: Rocket,
      title: "Implementação S/4HANA",
      description: "Migração completa para a mais avançada plataforma SAP",
      features: ["Migração de dados", "Configuração custom", "Testes integrados", "Go-live assistido"],
      color: "from-green-500 to-green-700",
      badge: "Inovação",
    },
    {
      icon: Users,
      title: "Treinamento Avançado",
      description: "Capacitação completa com certificação internacional",
      features: ["Presencial & Online", "Certificação Profissional", "Suporte contínuo", "Material exclusivo"],
      color: "from-purple-500 to-purple-700",
      badge: "Certificado",
    },
  ]

  const technologies = [
    { name: "SAP S/4HANA", progress: 95, icon: Server, color: "text-blue-600" },
    { name: "SAP HANA Database", progress: 92, icon: Database, color: "text-green-600" },
    { name: "SAP Fiori UX", progress: 88, icon: Monitor, color: "text-purple-600" },
    { name: "SAP Cloud Platform", progress: 85, icon: Cloud, color: "text-orange-600" },
    { name: "SAP Analytics", progress: 90, icon: BarChart3, color: "text-red-600" },
    { name: "SAP Mobile", progress: 82, icon: Smartphone, color: "text-indigo-600" },
  ]

  const expertiseAreas = [
    {
      title: "Arquitetura SAP",
      description: "Design e implementação de arquiteturas SAP robustas e escaláveis",
      icon: Code,
      technologies: ["S/4HANA", "HANA DB", "Fiori", "Gateway"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Integração de Sistemas",
      description: "Conectividade perfeita entre SAP e sistemas legados",
      icon: Server,
      technologies: ["PI/PO", "CPI", "APIs", "Middleware"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Analytics & BI",
      description: "Transformação de dados em insights estratégicos",
      icon: BarChart3,
      technologies: ["BW/4HANA", "Analytics Cloud", "Lumira", "Crystal Reports"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Cloud Solutions",
      description: "Migração e otimização para ambientes cloud",
      icon: Cloud,
      technologies: ["SAP Cloud", "AWS", "Azure", "Hybrid"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  // Logos das empresas - usando placeholders que representam as empresas reais
  const companyLogos = [
    { name: "Sonangol", logo: "/imagens/sonangol.png" },
    { name: "Unitel", logo: "/imagens/unitel.png" },
    { name: "Fabrimetal", logo: "/imagens/fabrimetal.png" },
    { name: "Petromar", logo: "/imagens/petromar.png" },
    { name: "Endiama", logo: "/imagens/endiama.svg" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large geometric shapes - optimized for mobile */}
          <div className="absolute -top-16 sm:-top-24 md:-top-40 -right-16 sm:-right-24 md:-right-40 w-32 sm:w-48 md:w-80 h-32 sm:h-48 md:h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 sm:-left-12 md:-left-20 w-24 sm:w-40 md:w-64 h-24 sm:h-40 md:h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 right-1/4 w-20 sm:w-32 md:w-48 h-20 sm:h-32 md:h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

          {/* Grid pattern - responsive */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>

          {/* Floating elements - progressive enhancement */}
          <div className="hidden sm:block absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
          <div className="hidden sm:block absolute top-3/4 left-3/4 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full animate-bounce delay-700"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-bounce delay-1100"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3">
                <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium">
                  <Globe className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                  Líder em Angola
                </Badge>
                <Badge className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium">
                  <Rocket className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                  Inovação
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium">
                  <Users className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                  Treinamento
                </Badge>
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium">
                  <Settings className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 mr-1 sm:mr-1.5 md:mr-2" />
                  Implementação
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">Transforme</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    seu Negócio
                  </span>
                  <br />
                  <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">com SAP</span>
                </h1>

                <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Somos a <strong className="text-gray-900">empresa líder em Angola</strong> especializada em
                  <strong className="text-blue-600"> soluções SAP</strong>. Oferecemos consultoria estratégica,
                  implementação de classe mundial e treinamento certificado que
                  <strong className="text-purple-600"> revoluciona empresas</strong>.
                </p>
              </div>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-blue-100">
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Implementação Rápida</div>
                    <div className="text-xs sm:text-sm text-gray-600">Go-live em tempo recorde</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-green-100">
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">ROI Garantido</div>
                    <div className="text-xs sm:text-sm text-gray-600">300% de retorno médio</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-100">
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Equipe Certificada</div>
                    <div className="text-xs sm:text-sm text-gray-600">10+ consultores SAP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-orange-100">
                  <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">Suporte 24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">Disponibilidade total</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <Link href="/contactos" scroll={true}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <Calendar className="mr-1.5 sm:mr-2 md:mr-3 h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5" />
                    <span className="hidden sm:inline">Agendar Consultoria Gratuita</span>
                    <span className="sm:hidden">Consultoria Gratuita</span>
                    <ArrowRight className="ml-1.5 sm:ml-2 md:ml-3 h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white/80 backdrop-blur-sm"
                >
                  <Play className="mr-1.5 sm:mr-2 md:mr-3 h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5" />
                  Ver Demonstração
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6 pt-2 sm:pt-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-500 mr-1.5 sm:mr-2" />
                  Consultoria gratuita
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-500 mr-1.5 sm:mr-2" />
                  Sem compromisso
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 text-green-500 mr-1.5 sm:mr-2" />
                  Resposta em 24h
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0 order-2 lg:order-2">
              {/* Main Visual Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-8 border border-gray-100">
                {/* SAP Dashboard Mockup */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3">
                      <div className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md sm:rounded-lg flex items-center justify-center">
                        <Database className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">SAP S/4HANA</div>
                        <div className="text-xs sm:text-sm text-gray-500">Dashboard Executivo</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-xs">Online</Badge>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2">
                        <BarChart3 className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-blue-600" />
                        <span className="text-xs text-blue-600 font-medium">+15%</span>
                      </div>
                      <div className="text-sm sm:text-lg md:text-2xl font-bold text-blue-900">AOA 2.4M</div>
                      <div className="text-xs sm:text-sm text-blue-700">Receita Mensal</div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2">
                        <TrendingUp className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">+8%</span>
                      </div>
                      <div className="text-sm sm:text-lg md:text-2xl font-bold text-green-900">94.2%</div>
                      <div className="text-xs sm:text-sm text-green-700">Eficiência</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2">
                        <Users className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-purple-600" />
                        <span className="text-xs text-purple-600 font-medium">+12%</span>
                      </div>
                      <div className="text-sm sm:text-lg md:text-2xl font-bold text-purple-900">1,247</div>
                      <div className="text-xs sm:text-sm text-purple-700">Usuários Ativos</div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl">
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2">
                        <Settings className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-orange-600" />
                        <span className="text-xs text-orange-600 font-medium">99.9%</span>
                      </div>
                      <div className="text-sm sm:text-lg md:text-2xl font-bold text-orange-900">24/7</div>
                      <div className="text-xs sm:text-sm text-orange-700">Uptime</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2">
                        <span className="text-gray-700">Implementação S/4HANA</span>
                        <span className="text-gray-500">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 sm:h-1.5 md:h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2">
                        <span className="text-gray-700">Treinamento Equipe</span>
                        <span className="text-gray-500">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-1 sm:h-1.5 md:h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-1 sm:mb-1.5 md:mb-2">
                        <span className="text-gray-700">Migração de Dados</span>
                        <span className="text-gray-500">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 sm:h-1.5 md:h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Buttons - progressive enhancement */}
                <div className="hidden sm:block absolute -right-2 sm:-right-4 -top-2 sm:-top-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                  </div>
                </div>

                <div className="hidden sm:block absolute -left-2 sm:-left-4 -bottom-2 sm:-bottom-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Building className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-white" />
                  </div>
                </div>
              </div>

              

              <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-8 -right-2 sm:-right-4 md:-right-8 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl p-2 sm:p-3 md:p-4 border border-gray-100">
                <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                  <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-md sm:rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-2.5 sm:w-3 md:w-4 h-2.5 sm:h-3 md:h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-900">10+</div>
                    <div className="text-xs text-gray-500">Projetos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-8 sm:mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="group">
                  <div className="flex items-center justify-center mb-1.5 sm:mb-2 md:mb-3">
                    <div
                      className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-r ${
                        index === 0
                          ? "from-blue-500 to-blue-600"
                          : index === 1
                            ? "from-green-500 to-green-600"
                            : index === 2
                              ? "from-purple-500 to-purple-600"
                              : "from-orange-500 to-orange-600"
                      } rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
                    </div>
                  </div>
                  <div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ${stat.color} mb-1 sm:mb-1.5 md:mb-2 group-hover:scale-110 transition-transform`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm md:text-base px-1 sm:px-2">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-900">Nossos Serviços</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções que <span className="text-blue-600">Transformam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Oferecemos um ecossistema completo de soluções SAP, desde consultoria estratégica até suporte contínuo,
              garantindo que sua empresa alcance a excelência operacional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden relative"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>

                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900">
                        {service.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full group-hover:bg-blue-600 transition-colors">
                      Saiba Mais
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/servicos" scroll={true}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-4"
              >
                Explorar Todos os Serviços
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-100 text-green-900">Expertise Técnica</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Domínio Completo do
              <span className="text-green-600 block">Ecossistema SAP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nossa equipe possui certificações avançadas e experiência prática em todas as tecnologias SAP, garantindo
              implementações de classe mundial e resultados excepcionais.
            </p>
          </div>

          {/* Expertise Areas */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                          {area.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Technology Proficiency */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proficiência em Tecnologias SAP</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-6 w-6 ${tech.color}`} />
                        <span className="font-semibold text-gray-900">{tech.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{tech.progress}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={tech.progress} className="h-3" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Garantido</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Suporte Técnico</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-sm text-gray-600">ROI Médio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Carousel */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-900">Nossos Clientes</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A SafeQ já capacitou pessoas que trabalham em
              <span className="text-blue-400 block">Empresas como:</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Profissionais treinados pela SafeQ estão transformando as principais empresas de Angola
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="relative">
            <div className="flex animate-scroll space-x-12">
              {/* First set of logos */}
              {companyLogos.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
              {/* Duplicate set for infinite scroll */}
              {companyLogos.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-12 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-blue-200">Profissionais Capacitados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-blue-200">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-blue-200">Taxa de Aprovação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">4+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Pronto para a <span className="text-yellow-300">Transformação?</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Junte-se a mais de 10 empresas que já transformaram seus negócios com nossas soluções SAP. Comece sua
              jornada de sucesso hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contactos" scroll={true}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-4 shadow-2xl">
                  <Calendar className="mr-3 h-5 w-5" />
                  Agendar Consultoria Gratuita
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 bg-transparent"
              >
                <HeadphonesIcon className="mr-3 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-blue-100">Consultoria Gratuita</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-blue-100">Sem Compromisso</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <span className="text-blue-100">Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
