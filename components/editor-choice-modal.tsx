"use client"

import { useState, useEffect } from "react"
import { X, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BettingSite } from "@/data/mock-data"


interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

// Щоб TS не скаржився на глобальне оновлення параметрів
declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Показувати модалку через 8 секунд після завантаження
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Викликаємо оновлення лінків при відкритті модалки
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === 'function') {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  // Беремо тільки перший сайт
  const topSite = bettingSites[0]

  if (!topSite) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 w-10 h-10 p-0 bg-black/70 border-2 border-yellow-400 rounded-full shadow-tech-glow"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-sm mx-auto flex flex-col justify-center items-center h-full">
        {/* Header Banner */}
        <div className="text-center mb-6 px-2 flex-shrink-0">
          <div className="relative inline-block">
            <div className="bg-yellow-400 text-black font-bold py-3 px-8 relative border-2 border-black shadow-tech-strong">
              <div className="flex items-center gap-2 justify-center">
                <Award className="w-5 h-5" />
                <span className="text-lg font-black tracking-wide tech-heading">ESCOLHA DO EDITOR</span>
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Single Card - Vertical Layout */}
        <div className="tech-card overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col w-full max-w-[320px] h-[350px] border-4 border-yellow-400 shadow-tech-glow bg-white relative">

          {/* Logo section */}
          <div className="bg-black h-28 flex items-center justify-center p-4 border-b-2 border-black flex-shrink-0 relative">
            <img
              src={topSite.logo || "/placeholder.svg"}
              alt={topSite.name || "Site"}
              className="h-24 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-white text-black flex-1 flex flex-col p-4 text-center justify-between min-h-0 relative">


            <div className="flex flex-row items-center justify-center gap-4">
              {/* Rating Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Rating Score */}
              <div>
                <span className="font-bold tech-subheading text-lg text-green-800">
                  {topSite.rating.toFixed(1)}/10
                </span>
              </div>
            </div>

            {/* Bonus Amount */}
            <div className="flex-1 flex flex-col justify-center mb-2">
              <div className="text-sm text-gray-600 font-medium mb-2 tech-subheading">Bónus Exclusivo</div>
              <div className="text-xl font-bold leading-tight tech-heading text-black">
                200% até 10.000€
              </div>
              <div className="text-base font-bold leading-tight tech-heading text-black">
                + Aposta Grátis Onlywin 50% até 1000 EUR
              </div>

            </div>



            {/* CTA Button */}
            <div>
              <Link href={topSite.link || "#"} target="_blank" rel="noopener referrer">
                <Button
                  className="bg-green-800 hover:bg-green-700 text-white font-bold border-2 border-green-800 py-3 px-6 text-base w-full shadow-tech-medium transition-all duration-300 hover:scale-105 tech-subheading"
                  onClick={() => setIsOpen(false)}
                >
                  OBTER BÓNUS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 px-2 flex-shrink-0">
          <div className="bg-white/95 backdrop-blur-sm border-2 border-yellow-400 p-3 relative shadow-tech-strong">


            <p className="text-black text-xs font-bold mb-1 tech-subheading">
              18+ Apenas | srij.turismodeportugal.pt
            </p>
            <p className="text-gray-700 text-xs tech-body">
              Jogue com Responsabilidade | O Jogo Pode Causar Dependência
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

