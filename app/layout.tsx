import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MainSiteFooter } from "../components/main-site-footer"
import { MainSiteHeader } from "../components/main-site-header"

export const metadata: Metadata = {
  title: "Melhores Sites de Apostas Portugueses - Top Sites de Apostas Portugal 2025",
  description:
    "Descubra os melhores sites de apostas portugueses com análises de especialistas, bónus exclusivos e comparações completas. Encontre o seu bookmaker perfeito hoje.",
  keywords: "sites de apostas portugueses, bookmakers Portugal, bónus apostas, apostas desportivas Portugal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
