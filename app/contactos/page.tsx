"use client"

import type React from "react"

import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    servico: "",
    mensagem: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Configurações do EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      // Preparar os dados para o template
      const templateParams = {
        to_email: 'geral@safeq.ao',
        from_name: formData.nome,
        from_email: formData.email,
        empresa: formData.empresa || 'Não informado',
        telefone: formData.telefone || 'Não informado',
        servico: formData.servico || 'Não selecionado',
        message: formData.mensagem,
        subject: `Contacto do Website - ${formData.nome}`
      }

      // Enviar email
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      if (result.status === 200) {
        // Mostrar modal de sucesso
        setModal({
          isOpen: true,
          type: "success",
          title: "Mensagem Enviada!",
          message: "Obrigado pelo seu contacto! A sua mensagem foi enviada com sucesso e nossa equipe entrará em contacto em até 24 horas."
        })
        
        // Limpar formulário
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          telefone: "",
          servico: "",
          mensagem: "",
        })
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      
      // Mostrar modal de erro
      setModal({
        isOpen: true,
        type: "error",
        title: "Erro ao Enviar",
        message: "Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente ou entre em contacto diretamente através dos nossos dados de contacto."
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-900">Fale Connosco</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a transformar seus processos com SAP. Entre em contacto e descubra
            como podemos colaborar.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-blue-600" />
                    Solicitar Contacto
                  </CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e nossa equipe entrará em contacto em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          value={formData.nome}
                          onChange={(e) => handleInputChange("nome", e.target.value)}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input
                          id="empresa"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange("empresa", e.target.value)}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => handleInputChange("telefone", e.target.value)}
                          placeholder="+244 923 456 789"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico">Serviço de Interesse</Label>
                      <Select onValueChange={(value) => handleInputChange("servico", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultoria">Consultoria SAP</SelectItem>
                          <SelectItem value="implementacao">Implementação SAP</SelectItem>
                          <SelectItem value="treinamento">Treinamento</SelectItem>
                          <SelectItem value="suporte">Suporte e Manutenção</SelectItem>
                          <SelectItem value="migracao">Migração S/4HANA</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                        placeholder="Descreva brevemente suas necessidades ou dúvidas..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-900 hover:bg-blue-800"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Informações de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">+244 923304222</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">geral@safeq.ao</p>
                      <p className="text-gray-600">comercial@safeq.ao</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Centralidade do Kilamba, Edifício H1 Apt 04, Piso 0
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horário</h3>
                      <p className="text-gray-600">
                        Segunda - Sexta: 08:00 - 16:00
                        <br />
                        Sábado: 08:00 - 13:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Contacto Rápido</CardTitle>
                  <CardDescription>
                    Precisa de ajuda imediata? Fale diretamente com nossos especialistas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                    onClick={() => window.location.href = 'mailto:geral@safeq.ao'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Building className="h-5 w-5 mr-2 text-blue-600" />
                    Nossos Escritórios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">Sede - Luanda</h3>
                      <p className="text-sm text-gray-600">Escritório principal e centro de operações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respostas às dúvidas mais comuns sobre nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Quanto tempo demora uma implementação SAP?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O tempo varia conforme a complexidade do projeto, mas geralmente entre 6 a 18 meses para
                  implementações completas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Oferecem suporte pós-implementação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim, oferecemos suporte contínuo 24/7, manutenção preventiva e atualizações para garantir o
                  funcionamento otimizado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Trabalham com empresas de que setores?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendemos diversos setores: manufatura, petróleo e gás, telecomunicações, banca, retalho e serviços
                  públicos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Como é feito o orçamento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Realizamos uma análise gratuita das suas necessidades e apresentamos uma proposta personalizada com
                  custos transparentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal de Feedback */}
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal(prev => ({ ...prev, isOpen: false }))}
        title={modal.title}
        type={modal.type}
      >
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            {modal.message}
          </p>
          
          {modal.type === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Próximos passos:
                </span>
              </div>
              <ul className="mt-2 text-sm text-green-700 space-y-1 ml-7">
                <li>• Verificará o seu email em até 24 horas</li>
                <li>• Nossa equipe analisará as suas necessidades</li>
                <li>• Entraremos em contacto para agendar uma reunião</li>
              </ul>
            </div>
          )}
          
          {modal.type === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium text-red-800">
                  Contactos alternativos:
                </span>
              </div>
              <div className="mt-2 text-sm text-red-700 space-y-1 ml-7">
                <p>• Email: geral@safeq.ao</p>
                <p>• Telefone: +244 923304222</p>
              </div>
            </div>
          )}
        </div>
      </Modal>

     

      <Footer />
    </div>
  )
}
