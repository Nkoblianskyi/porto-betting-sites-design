import Link from "next/link"
import { ArrowLeft, Shield, Award, TrendingUp, Users, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Início
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Sobre a Plataforma</h1>
          </div>
          <p className="text-blue-100 text-lg">A sua fonte confiável de informações e análises sobre apostas</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">A Nossa Missão</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fornecemos análises objetivas e aprofundadas das plataformas de apostas para ajudar os jogadores
                portugueses a tomar decisões informadas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">A Nossa Abordagem</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cada plataforma é avaliada minuciosamente segundo critérios de segurança, experiência do utilizador,
                qualidade das odds e atendimento ao cliente.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Critérios de Avaliação
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Segurança & Licença</h4>
                <p className="text-sm text-gray-600">Verificação de licenças e medidas de segurança</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Experiência do Utilizador</h4>
                <p className="text-sm text-gray-600">Navegação, design e funcionalidades</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Odds & Mercados</h4>
                <p className="text-sm text-gray-600">Odds competitivas e seleção de mercados</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Bónus</h4>
                <p className="text-sm text-gray-600">Valor e transparência das ofertas</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Pagamentos</h4>
                <p className="text-sm text-gray-600">Rapidez e segurança das transações</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Suporte</h4>
                <p className="text-sm text-gray-600">Disponibilidade e qualidade do atendimento ao cliente</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">O Nosso Compromisso</h3>
            </div>
            <p className="text-blue-800 mb-3">
              Mantemos padrões elevados de objetividade e transparência em todas as nossas avaliações e classificações.
            </p>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Avaliações independentes baseadas em testes reais</li>
              <li>• Atualizações regulares das informações</li>
              <li>• Foco nas necessidades dos jogadores portugueses</li>
              <li>• Promoção do jogo responsável</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-red-800">Informação Importante</h3>
            </div>
            <p className="text-red-700 mb-2">
              O jogo deve sempre permanecer um entretenimento. Nunca jogue com dinheiro que não pode permitir-se perder.
            </p>
            <p className="text-red-700 font-semibold">
              Se o jogo se tornar um problema, procure ajuda junto das organizações competentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
