"use client"

import { Award, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="bg-white/70 shadow-lg max-w-[1115px] mx-auto rounded-lg">
          <div className="relative px-4 py-4">
            <div className="relative z-10 text-center">
              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-2xl xl:text-3xl font-bold mb-3 leading-tight text-portuguese-red uppercase">
                  Melhores <span className="text-portuguese-green">Sites de Apostas</span> Portugueses
                </h1>

                <div className="text-center mb-2">
                  <p className="text-xs text-portuguese-blue font-bold">Atualizado: {getCurrentMonthYear()}</p>
                </div>

                <h2 className="text-lg xl:text-lg font-medium mb-2 text-black">
                  Análises de Especialistas & Avaliações
                </h2>

                <div className="w-20 h-0.5 bg-green-600 mx-auto mb-4"></div>


                <p className="text-sm text-black max-w-3xl mx-auto leading-relaxed mb-4">
                  Existem inúmeras casas de apostas em Portugal que oferecem opções de apostas seguras e atractivas. As
                  melhores casas de apostas caracterizam-se por plataformas de fácil utilização, probabilidades
                  lucrativas e uma vasta gama de opções de apostas.
                </p>

                {/* Trust Indicators */}
                <div className="mt-8">
                  <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                      <span className="text-xs font-bold tech-subheading">Regulamentado PT</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <Award className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">100% Legal</span>
                    </div>
                    <div className="flex items-center gap-2 text-black px-3 py-2">
                      <TrendingUp className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold tech-subheading">Levantamentos Rápidos</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Hero */}
      <div className="lg:hidden mb-2"
      style={
        { backgroundImage: 'url("/bg-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }
      }
      >
        <div className="bg-white/60 shadow-lg max-w-[1150px] mx-auto rounded-lg">
          <div className="px-4 py-4 text-center">
            <h1 className="text-sm md:text-2xl font-bold text-portuguese-red uppercase">
              Melhores <span className="text-portuguese-green">Sites de Apostas</span> em Portugal
            </h1>

            <div className="mb-2 text-center">
              <p className="text-xs text-portuguese-green font-bold">{getCurrentMonthYear()}</p>
            </div>

            <div className="w-16 h-0.5 bg-green-600 mx-auto mb-2"></div>

            {/* <p className="text-sm md:text-base text-black mb-4 leading-relaxed max-w-2xl mx-auto">
              Existem inúmeras casas de apostas em Portugal que oferecem opções de apostas seguras e atractivas. As
              melhores casas de apostas caracterizam-se por plataformas de fácil utilização, probabilidades lucrativas e
              uma vasta gama de opções de apostas.
            </p> */}

            {/* Trust Indicators */}
            <div className="mt-2">
              <div className="flex justify-center items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Image src="/flag.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Regulamentado PT</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <Award className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">100% Legal</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-black px-1 sm:px-2 py-1 flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-black" />
                  <span className="text-[10px] sm:text-xs font-bold tech-subheading">Levantamentos Rápidos</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
