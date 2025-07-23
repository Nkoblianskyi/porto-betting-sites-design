"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">DIVULGAÇÃO PUBLICITÁRIA</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-tech-white hover:bg-tech-white/20 border border-tech-gold"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-tech-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                COMO GANHAMOS DINHEIRO
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Melhores Sites de Apostas Portugueses é um site de comparação independente que ajuda os utilizadores a
                encontrar os melhores sites de apostas em Portugal. Podemos receber compensação quando clica nos links
                para os sites de apostas apresentados no nosso website.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                O NOSSO COMPROMISSO CONSIGO
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Esta compensação não influencia os nossos rankings, análises ou recomendações. A nossa equipa editorial
                mantém independência completa na avaliação dos sites de apostas baseada em fatores como:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Licença e regulamentação</li>
                <li>Medidas de segurança e proteção</li>
                <li>Odds e mercados de apostas</li>
                <li>Bónus de boas-vindas e promoções</li>
                <li>Qualidade do atendimento ao cliente</li>
                <li>Métodos de pagamento e velocidades de levantamento</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TRANSPARÊNCIA</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Acreditamos na transparência completa com os nossos utilizadores. Todos os sites de apostas apresentados
                na nossa plataforma estão claramente marcados, e só recomendamos operadores que são licenciados e
                regulamentados em Portugal ou noutras jurisdições respeitáveis.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                A SUA RESPONSABILIDADE
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Embora nos esforcemos para fornecer informações precisas e atualizadas, é da sua responsabilidade
                verificar todos os termos e condições diretamente com o operador de apostas antes de fazer apostas.
                Aposte sempre de forma responsável e dentro das suas possibilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Apenas jogadores portugueses | O jogo pode causar dependência — Jogue com segurança.
          </p>
        </div>
      </div>
    </div>
  )
}
