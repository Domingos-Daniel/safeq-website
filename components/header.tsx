"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const getLinkClasses = (path: string) => {
    return `font-medium transition-colors ${
      isActive(path) ? "text-blue-900 border-b-2 border-blue-900 pb-1" : "text-gray-700 hover:text-blue-900"
    }`
  }

  const getMobileLinkClasses = (path: string) => {
    return `font-medium transition-colors ${
      isActive(path) ? "text-blue-900 bg-blue-50 px-3 py-2 rounded-lg" : "text-gray-700 hover:text-blue-900"
    }`
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/imagens/safeq-logo.png" alt="SafeQ Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" scroll={true} className={getLinkClasses("/")}>
              Início
            </Link>
            <Link href="/servicos" scroll={true} className={getLinkClasses("/servicos")}>
              Serviços
            </Link>
            <Link href="/sobre" scroll={true} className={getLinkClasses("/sobre")}>
              Sobre Nós
            </Link>
            <Link href="/contactos" scroll={true} className={getLinkClasses("/contactos")}>
              Contactos
            </Link>
            <Link href="/contactos" scroll={true}>
              <Button className="bg-blue-900 hover:bg-blue-800">Solicitar Orçamento</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" scroll={true} className={getMobileLinkClasses("/")} onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link
                href="/servicos"
                scroll={true}
                className={getMobileLinkClasses("/servicos")}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/sobre"
                scroll={true}
                className={getMobileLinkClasses("/sobre")}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/contactos"
                scroll={true}
                className={getMobileLinkClasses("/contactos")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contactos
              </Link>
              <Link href="/contactos" scroll={true} onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-blue-900 hover:bg-blue-800 w-fit">Solicitar Orçamento</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
