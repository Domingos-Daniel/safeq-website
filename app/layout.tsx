import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import BackToTop from "@/components/back-to-top"
import Loading from "@/components/loading"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SafeQ - Soluções SAP em Angola",
  description: "Especialistas em soluções SAP, oferecendo consultoria, implementação e treinamento para empresas em Angola.",
  generator: "Desenvolvido por SafeQ",
  keywords: ["SAP Angola", "Consultoria SAP", "Implementação SAP", "SAP S/4HANA", "ERP Angola", "Consultoria ERP", "SafeQ"],
  authors: [{ name: "SafeQ", url: "https://safeq-ao.ao" }],
  creator: "SafeQ",
  publisher: "SafeQ",
  robots: "index, follow",
  metadataBase: new URL("https://safeq-ao.ao"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-AO": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://safeq-ao.ao",
    title: "SafeQ - Soluções SAP em Angola",
    description: "Especialistas em soluções SAP, oferecendo consultoria, implementação e treinamento para empresas em Angola.",
    siteName: "SafeQ",
    images: [
      {
        url: "/imagens/safeq-logo.png",
        width: 800,
        height: 600,
        alt: "SafeQ Logo",
      },
    ],
    locale: "pt_AO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeQ - Soluções SAP em Angola",
    description: "Especialistas em soluções SAP, oferecendo consultoria, implementação e treinamento para empresas em Angola.",
    images: ["/imagens/safeq-logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "verificação-google", // Substitua pelo código real quando tiver
  },
  category: "Tecnologia",
  other: {
    "geo.region": "AO",
    "geo.placename": "Luanda",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/imagens/safeq-logo.png" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
