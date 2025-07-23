"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-tech-white border-2 border-tech-black shadow-tech-strong max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-tech-black text-tech-white p-4 sm:p-6 flex-shrink-0 border-b-2 border-tech-gold">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold tech-heading">TERMOS E CONDIÇÕES</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">TERMOS E CONDIÇÕES</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Ao utilizar Melhores Sites de Apostas Portugueses, concorda em cumprir e estar vinculado aos seguintes
                termos e condições. Estes termos aplicam-se a todos os utilizadores do nosso website e serviços.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">RESTRIÇÕES DE IDADE</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Deve ter pelo menos 18 anos para utilizar este website. Levamos a verificação de idade a sério e
                promovemos práticas de jogo responsável. Se tem menos de 18 anos, por favor abandone este website
                imediatamente.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">JOGO RESPONSÁVEL</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Comprometemo-nos a promover o jogo responsável. Por favor lembre-se:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>Aposte apenas com dinheiro que pode permitir-se perder</li>
                <li>Defina limites de tempo e gastos antes de começar</li>
                <li>Nunca persiga as suas perdas</li>
                <li>Faça pausas regulares do jogo</li>
                <li>Procure ajuda se o jogo se tornar um problema</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                PRECISÃO DAS INFORMAÇÕES
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Embora nos esforcemos para fornecer informações precisas e atualizadas sobre sites de apostas, bónus e
                promoções, não podemos garantir a exatidão de todo o conteúdo. Os termos e condições podem mudar sem
                aviso prévio.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">LINKS DE TERCEIROS</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                O nosso website contém links para sites de apostas de terceiros. Não somos responsáveis pelo conteúdo,
                condições ou práticas desses sites externos. Consulte sempre os seus termos e condições antes da
                utilização.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">
                LIMITAÇÃO DE RESPONSABILIDADE
              </h3>
              <p className="text-sm sm:text-base text-tech-gray-700 tech-body leading-relaxed">
                Melhores Sites de Apostas Portugueses não será responsável por quaisquer danos diretos, indiretos,
                incidentais ou consequenciais decorrentes da sua utilização deste website ou das informações nele
                contidas.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-tech-black tech-heading">AJUDA E APOIO</h3>
              <p className="text-sm sm:text-base text-tech-gray-700 mb-3 tech-body leading-relaxed">
                Se precisar de ajuda para vício do jogo, por favor contacte:
              </p>
              <ul className="text-sm sm:text-base text-tech-gray-700 list-disc list-inside space-y-2 tech-body">
                <li>
                  <strong>SICAD:</strong> www.sicad.pt
                </li>
                <li>
                  <strong>APAJO:</strong> www.apajo.pt
                </li>
                <li>
                  <strong>Linha Vida:</strong> 213 544 545
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-tech-red/10 border-t-2 border-tech-red p-3 sm:p-4 flex-shrink-0">
          <p className="text-tech-red font-semibold text-center text-sm tech-subheading">
            18+ | Termos e condições aplicam-se | Jogue com responsabilidade
          </p>
        </div>
      </div>
    </div>
  )
}
