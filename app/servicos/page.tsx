"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Database,
  BarChart3,
  ShoppingCart,
  Truck,
  DollarSign,
  UserCheck,
  Building,
  Cog,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  HeadphonesIcon,
  Rocket,
  Building2,
  Factory,
  Banknote,
  Phone,
  Fuel,
  Stethoscope,
  ChevronRight,
  Play,
  Download,
  Calendar,
  Settings,
  Package,
  FileText,
  Zap,
  Globe,
  Shield,
  Briefcase,
  PieChart,
  Activity,
  Layers,
  Network,
  Server,
  Cloud,
  Lock,
  Flashlight,
  UserCog2,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ServicosPage() {
  const [activeTab, setActiveTab] = useState(0)

  const mainServices = [
    {
      icon: TrendingUp,
      title: "Consultoria Estratégica SAP",
      shortTitle: "Consultoria",
      description: "Transforme sua visão em realidade com nossa consultoria especializada",
      longDescription:
        "Nossa consultoria estratégica vai além da implementação técnica. Analisamos profundamente seus processos de negócio, identificamos oportunidades de otimização e desenvolvemos um roadmap personalizado para maximizar o ROI do seu investimento em SAP.",
      features: [
        "Análise completa de processos atuais",
        "Roadmap de transformação digital",
        "Análise de ROI detalhada",
        "Gestão de mudança organizacional",
        "Benchmarking com melhores práticas",
        "Estratégia de migração para Cloud",
      ],
      benefits: [
        "Redução de custos operacionais em até 40%",
        "Aumento da eficiência em 60%",
        "Melhoria na tomada de decisões",
        "Compliance regulatório garantido",
      ],
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500",
      badge: "Mais Procurado",
      price: "Sob consulta",
    },
    {
      icon: Rocket,
      title: "Implementação SAP S/4HANA",
      shortTitle: "Implementação",
      description: "Migre para a mais avançada plataforma SAP com nossa expertise comprovada",
      longDescription:
        "A implementação do SAP S/4HANA é uma jornada transformadora. Nossa metodologia comprovada garante uma migração suave, minimizando riscos e maximizando os benefícios da nova plataforma digital.",
      features: [
        "Migração completa de dados",
        "Configuração personalizada",
        "Integração com sistemas legados",
        "Testes automatizados",
        "Go-live assistido 24/7",
        "Otimização de performance",
      ],
      benefits: [
        "Processamento 10x mais rápido",
        "Análise em tempo real",
        "Interface moderna e intuitiva",
        "Redução de TCO em 25%",
      ],
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-500",
      badge: "Inovação",
      price: "A partir de $50k",
    },
    {
      icon: Users,
      title: "Treinamento e Certificação",
      shortTitle: "Treinamento",
      description: "Capacite sua equipe com treinamento de classe mundial",
      longDescription:
        "Nossos programas de treinamento são desenvolvidos por especialistas certificados SAP, combinando teoria e prática para garantir que sua equipe domine completamente as ferramentas e processos.",
      features: [
        "Treinamento presencial e online",
        "Certificação Profissional",
        "Material didático exclusivo",
        "Acesso ao Ambiente de SAP",
        "Suporte pós-treinamento",
        "Avaliação contínua",
      ],
      benefits: [
        "95% de aprovação em certificações",
        "Aumento de produtividade em 50%",
        "Redução de erros operacionais",
        "Maior satisfação dos usuários",
      ],
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-500",
      badge: "Certificado SAP",
      price: "A partir de $500/pessoa",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte e Manutenção 24/7",
      shortTitle: "Suporte",
      description: "Mantenha seus sistemas funcionando perfeitamente com nosso suporte especializado",
      longDescription:
        "Nosso serviço de suporte garante que seus sistemas SAP operem com máxima eficiência. Com monitoramento proativo e equipe especializada disponível 24/7, você tem a tranquilidade de focar no seu negócio.",
      features: [
        "Suporte 24/7/365",
        "Monitoramento proativo",
        "Manutenção preventiva",
        "Atualizações automáticas",
        "Backup e recuperação",
        "Otimização contínua",
      ],
      benefits: [
        "99.9% de disponibilidade garantida",
        "Tempo de resposta < 15 minutos",
        "Resolução 90% no primeiro contato",
        "Redução de downtime em 80%",
      ],
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-500",
      badge: "24/7",
      price: "A partir de $2k/mês",
    },
  ]

  const modules = [
    {
      icon: DollarSign,
      name: "SAP FI",
      title: "Finanças",
      description: "Gestão financeira completa e integrada",
      category: "Financeiro",
    },
    {
      icon: BarChart3,
      name: "SAP CO",
      title: "Controlling",
      description: "Controle de custos e rentabilidade",
      category: "Financeiro",
    },
    {
      icon: ShoppingCart,
      name: "SAP MM",
      title: "Materiais",
      description: "Gestão de materiais e compras",
      category: "Logística",
    },
    {
      icon: Truck,
      name: "SAP SD",
      title: "Vendas",
      description: "Vendas e distribuição otimizada",
      category: "Comercial",
    },
    {
      icon: UserCheck,
      name: "SAP HR",
      title: "Recursos Humanos",
      description: "Gestão completa de capital humano",
      category: "RH",
    },
    {
      icon: Building,
      name: "SAP PM",
      title: "Manutenção",
      description: "Manutenção de plantas e equipamentos",
      category: "Operações",
    },
    {
      icon: Database,
      name: "SAP PP",
      title: "Produção",
      description: "Planejamento e controle de produção",
      category: "Operações",
    },
    {
      icon: Cog,
      name: "SAP QM",
      title: "Qualidade",
      description: "Gestão da qualidade total",
      category: "Operações",
    },
    {
      icon: Settings,
      name: "SAP PS",
      title: "Projetos",
      description: "Gestão de projetos e sistemas",
      category: "Projetos",
    },
    {
      icon: Package,
      name: "SAP WM",
      title: "Warehouse",
      description: "Gestão avançada de armazéns",
      category: "Logística",
    },
    {
      icon: FileText,
      name: "SAP FI-CA",
      title: "Contract Accounting",
      description: "Contabilidade de contratos",
      category: "Financeiro",
    },
    {
      icon: Flashlight,
      name: "SAP ABAP",
      title: "ABAP Development",
      description: "Desenvolvimento de aplicativos ABAP",
      category: "Desenvolvimento",
    },
    {
      icon: Server,
      name: "SAP BASIS",
      title: "BASIS Administration",
      description: "Administração de sistemas SAP",
      category: "Infraestrutura",
    },
    {
      icon: Shield,
      name: "SAP GRC",
      title: "Governance",
      description: "Governança, risco e compliance",
      category: "Governança",
    },
    {
      icon: Briefcase,
      name: "SAP CRM",
      title: "Customer Relationship",
      description: "Gestão de relacionamento com clientes",
      category: "Comercial",
    },
    {
      icon: PieChart,
      name: "SAP BW",
      title: "Business Warehouse",
      description: "Data warehouse e business intelligence",
      category: "Analytics",
    },
    {
      icon: Activity,
      name: "SAP APO",
      title: "Advanced Planning",
      description: "Planejamento avançado e otimização",
      category: "Planejamento",
    },
    {
      icon: Server,
      name: "SAP HANA",
      title: "In-Memory Platform",
      description: "Plataforma de dados em memória",
      category: "Plataforma",
    },
    {
      icon: Cloud,
      name: "SAP Ariba",
      title: "Procurement Cloud",
      description: "Soluções de procurement na nuvem",
      category: "Cloud",
    },
    {
      icon: Lock,
      name: "SAP SuccessFactors",
      title: "HR Cloud",
      description: "Gestão de RH na nuvem",
      category: "Cloud",
    },
    {
      icon: UserCog2,
      name: "SAP HCM",
      title: "Human Capital Management",
      description: "Sap para gestão de recursos humanos",
      category: "RH",
    },
  ]

  const industries = [
    { icon: Factory, name: "Manufatura", description: "Otimização de processos produtivos" },
    { icon: Fuel, name: "Petróleo & Gás", description: "Soluções para upstream e downstream" },
    { icon: Banknote, name: "Serviços Financeiros", description: "Compliance e gestão de riscos" },
    { icon: Phone, name: "Telecomunicações", description: "Billing e gestão de clientes" },
    { icon: Building2, name: "Construção", description: "Gestão de projetos e contratos" },
    { icon: Stethoscope, name: "Saúde", description: "Gestão hospitalar integrada" },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Descoberta & Análise",
      description: "Avaliação completa dos processos atuais e identificação de oportunidades",
      deliverables: ["Relatório de diagnóstico", "Mapeamento de processos", "Análise de gaps"],
    },
    {
      number: "02",
      title: "Estratégia & Planejamento",
      description: "Desenvolvimento de roadmap detalhado e estratégia de implementação",
      deliverables: ["Roadmap executivo", "Plano de projeto", "Análise de riscos"],
    },
    {
      number: "03",
      title: "Implementação & Configuração",
      description: "Execução controlada com metodologia comprovada e testes rigorosos",
      deliverables: ["Sistema configurado", "Dados migrados", "Testes validados"],
    },
    {
      number: "04",
      title: "Go-Live & Suporte",
      description: "Lançamento assistido e acompanhamento para garantir estabilidade",
      deliverables: ["Sistema em produção", "Usuários treinados", "Suporte ativo"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>

        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 text-lg px-6 py-3">
              <Award className="w-5 h-5 mr-2" />
              Soluções SAP de Classe Mundial
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Nossos
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Serviços
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transformamos negócios com soluções SAP inovadoras, desde consultoria estratégica até suporte contínuo.
              Descubra como podemos impulsionar sua empresa para o próximo nível.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-4"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Agendar Consultoria
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 bg-transparent"
              >
                <Download className="mr-3 h-5 w-5" />
                Baixar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Services with Animated Tabs */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-900">Serviços Principais</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções que <span className="text-blue-600">Transformam</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Cada serviço é projetado para maximizar o valor do seu investimento em SAP
            </p>
          </div>

          {/* Enhanced Animated Tabs */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
                      activeTab === index
                        ? `${service.bgColor} text-white shadow-2xl`
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent
                        className={`h-6 w-6 transition-all duration-300 ${
                          activeTab === index ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                        }`}
                      />
                      <span>{service.shortTitle}</span>
                    </div>

                    {/* Animated indicator */}
                    {activeTab === index && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                      </div>
                    )}

                    {/* Glow effect */}
                    {activeTab === index && (
                      <div
                        className={`absolute inset-0 rounded-2xl ${service.bgColor} opacity-20 blur-xl -z-10 animate-pulse`}
                      ></div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Service Content */}
            <div className="relative">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      activeTab === index
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none"
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                          >
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <Badge className="mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900">
                              {service.badge}
                            </Badge>
                            <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                          </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.longDescription}</p>

                        <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                          <div className="flex items-center mb-3">
                            <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
                            <div className="font-semibold text-gray-900">Investimento</div>
                          </div>
                          <div className="text-2xl font-bold text-blue-600">Ao melhor preço do mercado!</div>
                        </div>

                        <div className="flex gap-4">
                          <Button className={`bg-gradient-to-r ${service.color} hover:opacity-90`}>
                            Solicitar Proposta
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline">
                            <Play className="mr-2 h-4 w-4" />
                            Ver Demo
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <Card className="border-0 shadow-lg">
                          <CardHeader>
                            <CardTitle className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              Principais Recursos
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
                          <CardHeader>
                            <CardTitle className="flex items-center text-green-700">
                              <Target className="h-5 w-5 mr-2" />
                              Benefícios Comprovados
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <Star className="h-4 w-4 text-yellow-500 mr-3" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced SAP Modules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-100 text-purple-900">Módulos SAP</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Domínio Completo do <span className="text-purple-600">Ecossistema SAP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Nossa equipe possui certificações avançadas em todos os principais módulos SAP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-gray-100 text-gray-700">{module.name}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {module.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription className="text-sm">{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-green-100 text-green-900">Setores Atendidos</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiência <span className="text-green-600">Multissetorial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Soluções especializadas para os principais setores da economia angolana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                      {industry.name}
                    </CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-green-50 group-hover:border-green-200 bg-transparent"
                    >
                      Ver Casos de Sucesso
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-orange-100 text-orange-900">Nossa Metodologia</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Processo <span className="text-orange-600">Comprovado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Metodologia estruturada que garante o sucesso do seu projeto SAP
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 text-white text-2xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Entregáveis:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg">
                      <div className="text-6xl font-bold text-orange-200 mb-4">{step.number}</div>
                      <div className="text-2xl font-bold text-gray-900 mb-4">{step.title}</div>
                      <div className="w-full bg-orange-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-px h-12 bg-gradient-to-b from-orange-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Transforme seu <span className="text-yellow-300">Negócio Hoje</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12">
              Junte-se a mais de 50 empresas que já revolucionaram seus processos com nossas soluções SAP
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24h</div>
                <div className="text-blue-200">Resposta Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">300%</div>
                <div className="text-blue-200">ROI Médio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
                <div className="text-blue-200">Taxa de Sucesso</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                <Download className="mr-3 h-5 w-5" />
                Baixar Catálogo Completo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
