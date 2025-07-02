import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SQ</span>
              </div>
              <span className="text-2xl font-bold">SafeQ</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em soluções SAP, oferecendo consultoria, implementação e treinamento para empresas que
              buscam excelência operacional e transformação digital.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.linkedin.com/company/safeq-ao/posts/?feedView=all" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a target="_blank" href="https://www.facebook.com/Safeq.ServicosFormacao" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" scroll={true} className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" scroll={true} className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" scroll={true} className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contactos" scroll={true} className="text-gray-300 hover:text-white transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-gray-300">+244 923304222</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span className="text-gray-300">geral@safeq.ao</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Luanda, Angola
                  <br />
                  Centralidade do Kilamba, Edifício H1 Apt 04, Piso 0
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SafeQ. Todos os direitos reservados. | Desenvolvido com excelência para soluções SAP.
          </p>
        </div>
      </div>
    </footer>
  )
}
