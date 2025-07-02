import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, Eye, Heart, CheckCircle, TrendingUp, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { HeadphonesIcon } from "lucide-react"

export default function SobrePage() {
  const values = [
    {
      icon: Award,
      title: "Expertise Inigualável",
      description:
        "Com mais de 4 anos de experiência sólida e profundo conhecimento em SAP, somos líderes no mercado angolano.",
    },
    {
      icon: Users,
      title: "Abordagem Personalizada",
      description:
        "Reconhecemos que cada empresa é única. Oferecemos soluções personalizadas que atendem às necessidades específicas de cada cliente.",
    },
    {
      icon: Lightbulb,
      title: "Qualidade e Excelência",
      description:
        "Na SafeQ, a qualidade é nossa marca registrada. Nos esforçamos para superar expectativas em cada projeto.",
    },
    {
      icon: Heart,
      title: "Compromisso com o Sucesso",
      description:
        "O sucesso dos nossos clientes é nossa prioridade número um. Trabalhamos lado a lado para garantir resultados impactantes.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projetos Concluídos", icon: CheckCircle },
    { number: "15+", label: "Anos de Experiência", icon: TrendingUp },
    { number: "200+", label: "Clientes Satisfeitos", icon: Users },
    { number: "50+", label: "Consultores Certificados", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-900">Sobre a SafeQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Somos mais do que uma empresa de consultoria e treinamentos SAP; somos parceiros de confiança dedicados a
            impulsionar o crescimento e o progresso das empresas em Angola.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                Na SafeQ, somos líderes no mercado angolano com mais de 4 anos de experiência sólida e profundo
                conhecimento em SAP. Nossa jornada é marcada por uma expertise incomparável que trazemos para cada
                projeto e treinamento.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Não apenas prometemos resultados - nós os entregamos. Com nossa abordagem centrada no cliente, expertise
                sólida e compromisso inabalável com a excelência, garantimos que cada projeto seja concluído com
                sucesso, impulsionando o crescimento sustentável e o desenvolvimento contínuo de Angola.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Mais de 3 anos de experiência sólida em SAP</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Líderes no mercado angolano</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Resultados comprovados e tangíveis</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-900 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Projetos Entregues</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-900 mb-1">4+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-900 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-orange-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Suporte Contínuo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Capacitamos empresas em Angola a alcançar seu pleno potencial por meio de soluções SAP de alta
                  qualidade, consultoria especializada e treinamento excepcional. Estamos comprometidos em fornecer
                  serviços de excelência que impulsionem a inovação, promovam a eficiência e inspirem o sucesso
                  empresarial.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Nosso Impacto</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Com cada projeto, buscamos não apenas atender, mas superar as expectativas de nossos clientes,
                  contribuindo assim para o crescimento sustentável e o desenvolvimento contínuo de Angola. Confie na
                  SafeQ para liderar o caminho rumo a um futuro de sucesso e prosperidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa cultura empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que Escolher a SafeQ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência, Profissionalismo e Excelência - Combinamos estes elementos para proporcionar os melhores
              resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Resultados Comprovados</h3>
              <p className="text-gray-600">
                Ao longo dos anos, acumulamos um histórico impressionante de resultados comprovados. De melhorias
                operacionais a aumento da eficiência.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fazemos de Si o Dono da Sua Carreira</h3>
              <p className="text-gray-600">
                Com os treinamentos que prestamos, damos a si o controle de sua carreira profissional! Capacitação que
                transforma vidas e carreiras.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Nosso compromisso não termina com a entrega. Oferecemos suporte contínuo, orientação e assistência
                sempre que você precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O Trilho para o Sucesso!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Confie na SafeQ para entregar resultados tangíveis que impulsionam o crescimento e transformam sua empresa
            para melhor. Desde o primeiro contato até a implementação final, estamos comprometidos em oferecer soluções
            que impulsionam o crescimento e o sucesso duradouro dos negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactos" scroll={true}>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Entre em Contacto
              </Button>
            </Link>
            <Link href="/servicos" scroll={true}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
