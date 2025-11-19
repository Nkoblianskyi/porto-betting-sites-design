"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1150px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                O Seu Guia Definitivo de <span className="text-brand-accent">Bookmakers Portugueses</span>
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Escolher o bookmaker perfeito requer conhecimento especializado e análise aprofundada. O nosso guia
                abrangente elimina as suposições com análises profissionais e comparações detalhadas.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Encontre o Seu Parceiro de Apostas Ideal</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Cada jogador tem preferências diferentes e necessidades específicas. Comece por determinar quais
                    modalidades desportivas e mercados de apostas mais lhe interessam, e depois confirme que os seus
                    fornecedores escolhidos oferecem cobertura abrangente nessas categorias.
                  </p>
                  <p>
                    Além disso, deve investigar cuidadosamente a estrutura de preços e taxas de retorno de cada
                    fornecedor. Odds melhoradas aumentam significativamente os seus potenciais retornos e desempenho
                    geral nas apostas.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Aproveite as Oportunidades de Bónus</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    O cenário competitivo das apostas de hoje leva os fornecedores a melhorar continuamente as suas
                    ofertas promocionais para atrair e reter clientes leais. Os pacotes de boas-vindas evoluíram
                    significativamente e oferecem valor excecional aos recém-chegados que dominam a arte da exploração
                    estratégica de bónus.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Compreenda as Regras de Jogo Portuguesas</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    O mercado de jogos português opera sob estruturas regulamentares rigorosas concebidas para proteger
                    os consumidores enquanto garantem fair play em todas as plataformas. Os operadores licenciados devem
                    cumprir diretrizes abrangentes que cobrem tudo desde segurança financeira até proteção de dados dos
                    clientes.
                  </p>
                  <p>
                    Esta supervisão regulamentar proporciona tranquilidade aos jogadores portugueses, sabendo que as
                    suas plataformas escolhidas cumprem os mais altos padrões da indústria.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-brand-accent">
                Porquê Escolher Bookmakers Licenciados Portugueses?
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Os bookmakers licenciados portugueses oferecem segurança e proteção ao consumidor incomparáveis. Com
                  supervisão regulamentar rigorosa do SRIJ, estas plataformas garantem fair play, transações seguras e
                  práticas de jogo responsável.
                </p>
                <p>
                  Além disso, os operadores portugueses oferecem suporte ao cliente localizado, métodos de pagamento
                  familiares e cobertura abrangente de modalidades desportivas portuguesas incluindo futebol, futsal e
                  ciclismo de eventos portugueses de destaque.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  ESTE MATERIAL ESTÁ PROTEGIDO POR DIREITOS AUTORAIS. TODOS OS SERVIÇOS E CAMPANHAS SÃO EXCLUSIVAMENTE
                  PARA CIDADÃOS PORTUGUESES COM 18 ANOS OU MAIS.
                </p>
                <p className="text-red-200 text-xs">
                  PODEM APLICAR-SE RESTRIÇÕES ADICIONAIS INCLUINDO VERIFICAÇÃO DE IDENTIDADE, RESTRIÇÕES DE LOCALIZAÇÃO
                  E REQUISITOS DE CIDADANIA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
