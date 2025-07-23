"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users, Zap, Target } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-tech-black text-tech-white py-16 mt-20 border-t-4 border-tech-gold relative">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1150px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className="w-16 h-16 bg-tech-gold border-2 border-tech-black flex items-center justify-center shadow-tech-glow group-hover:shadow-tech-red-glow transition-all duration-300">
                  <Image src="/portugal-flag-icon.webp" alt="Bandeira Portuguesa" width={32} height={32} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-portuguese-red"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-portuguese-green"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tech-heading">
                  <span className="text-portuguese-red">APOSTAS</span>
                  <span className="text-tech-white"> MELHORES</span>
                  <span className="text-portuguese-red"> SITES</span>
                  <span className="text-tech-white"> PORTUGUESES</span>
                </h3>
                <p className="text-sm text-tech-gray-400 tech-subheading">ANÁLISE DE APOSTAS LÍDER EM PORTUGAL</p>
              </div>
            </Link>
            <p className="text-tech-gray-300 leading-relaxed mb-6 tech-body">
              Análise algorítmica avançada das melhores plataformas de apostas portuguesas. Fornecemos análises técnicas
              abrangentes, verificação de dados em tempo real e recomendações de especialistas para otimizar a sua
              experiência de apostas.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-tech-gray-400">
              <div className="flex items-center gap-2 bg-tech-white/5 p-2 border border-tech-gold/20">
                <Users className="w-4 h-4 text-tech-gold" />
                <span className="tech-subheading">50.000+ UTILIZADORES VERIFICADOS</span>
              </div>
              <div className="flex items-center gap-2 bg-tech-white/5 p-2 border border-portuguese-red/20">
                <Award className="w-4 h-4 text-portuguese-red" />
                <span className="tech-subheading">ESPECIALISTA CERTIFICADO</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-tech-gold tech-heading flex items-center gap-2">
              <Target className="w-5 h-5" />
              ACESSO RÁPIDO
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-tech-gray-300 hover:text-tech-gold transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-tech-gold"></div>SOBRE A PLATAFORMA
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="text-tech-gray-300 hover:text-portuguese-red transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-portuguese-red"></div>
                  JOGO RESPONSÁVEL
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-tech-gray-300 hover:text-tech-gold transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-tech-gold"></div>
                  POLÍTICA DE COOKIES
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-tech-gray-300 hover:text-portuguese-red transition-colors duration-300 flex items-center gap-3 tech-subheading"
                >
                  <div className="w-2 h-2 bg-portuguese-red"></div>
                  POLÍTICA DE PRIVACIDADE
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h4 className="text-lg font-bold mb-6 tech-heading flex items-center gap-2 text-portuguese-red">
              <Shield className="w-5 h-5" />
              PROTOCOLO DE SEGURANÇA
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Shield className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">LICENCIADO & REGULAMENTADO</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-portuguese-red/20">
                <Clock className="w-4 h-4 text-portuguese-red" />
                <span className="text-sm tech-subheading">SEGURO & VERIFICADO</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-tech-gold/20">
                <Award className="w-4 h-4 text-tech-gold" />
                <span className="text-sm tech-subheading">VALIDADO POR ESPECIALISTAS</span>
              </div>
              <div className="flex items-center gap-3 text-tech-gray-300 bg-tech-white/5 p-3 border border-portuguese-red/20">
                <Zap className="w-4 h-4 text-portuguese-red" />
                <span className="text-sm tech-subheading">ATUALIZAÇÕES EM TEMPO REAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t-2 border-tech-gold/30 pt-12 mb-12">
          <h4 className="text-xl font-bold mb-8 text-center text-tech-gold tech-heading">PARCEIROS JOGO RESPONSÁVEL</h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-tech-white/10 border border-tech-gold/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-tech-gold hover:scale-105 group"
            >
              <img
                src="/srij.svg"
                alt="SRIJ"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-tech-white/10 border border-tech-gold/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-tech-gold hover:scale-105 group"
            >
              <img
                src="/icad.png"
                alt="SICAD"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-tech-white/10 border border-tech-gold/30 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-tech-gold hover:scale-105 group"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 md:h-10 w-auto object-contain filter brightness-90 group-hover:brightness-110"
              />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 pt-8 text-center border-portuguese-red/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-tech-gray-400 text-sm tech-body">
              © 2025 MELHORESSITESAPOSTASPORTUGUESES.PT | TODOS OS DIREITOS RESERVADOS
            </p>
            <div className="flex items-center gap-6 text-sm text-tech-gray-400">
              <span className="tech-subheading">DESENVOLVIDO EM PORTUGAL</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-tech-black bg-portuguese-red"></div>
                <div className="w-4 h-3 bg-portuguese-green border border-tech-black"></div>
                <div className="w-4 h-3 border border-tech-black bg-portuguese-red"></div>
              </div>
            </div>
          </div>
          <div className="border-2 border-portuguese-red p-6 relative bg-portuguese-red/10">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-portuguese-red"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-tech-gold"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-portuguese-red"></div>

            <p className="font-bold text-sm mb-2 tech-heading text-portuguese-red">
              🔞 18+ | JOGADORES PORTUGUESES APENAS | O JOGO PODE CAUSAR DEPENDÊNCIA — JOGUE COM SEGURANÇA
            </p>
            <p className="text-xs tech-body text-portuguese-red">
              SE VOCÊ OU ALGUÉM QUE CONHECE TEM UM PROBLEMA COM O JOGO, PROCURE AJUDA.
              <Link href="/responsible-gaming" className="underline hover:text-tech-white ml-2 tech-subheading">
                OBTER APOIO
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
