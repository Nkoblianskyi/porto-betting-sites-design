import Link from "next/link"
import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsibleGamingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Início
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Jogo Responsável</h1>
          </div>
          <p className="text-red-100 text-lg">A sua segurança e bem-estar são a nossa prioridade absoluta</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-red-800 font-bold text-xl">Mensagem Importante</h2>
            </div>
            <p className="text-red-700 mb-2">
              O jogo deve sempre permanecer divertido e entretenimento. Se as apostas deixarem de ser agradáveis ou
              começarem a causar problemas na sua vida, é hora de procurar ajuda.
            </p>
            <p className="text-red-700 font-semibold">
              Lembre-se: Nunca está sozinho, e a ajuda está sempre disponível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Defina Limites</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Decida o tempo e dinheiro antes de começar</li>
                <li>• Jogue apenas com dinheiro que pode permitir-se perder</li>
                <li>• Faça pausas regulares</li>
                <li>• Nunca peça dinheiro emprestado para jogar</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Ferramentas de Auto-Ajuda</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Limites de depósito</li>
                <li>• Limites de perda</li>
                <li>• Limites de tempo de sessão</li>
                <li>• Auto-exclusão</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sinais de Alerta</h2>
            <p className="text-gray-700 mb-4">
              É importante reconhecer quando o jogo pode tornar-se um problema. Fique atento a estes sinais:
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Passar mais tempo ou dinheiro do que planeado</li>
                <li>• Sentir ansiedade ou culpa sobre o jogo</li>
                <li>• Esconder atividades de jogo dos outros</li>
                <li>• Negligenciar o trabalho ou família</li>
                <li>• Pensar constantemente no jogo</li>
                <li>• Ser incapaz de parar</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">SRIJ</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                O Serviço de Regulação e Inspeção de Jogos português que regula e supervisiona o mercado do jogo.
              </p>
              <p className="text-sm text-gray-600">Oferece informações e conselhos sobre jogo responsável.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Linhas de Ajuda</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Apoio profissional e conselhos estão disponíveis para todos os que precisam de ajuda.
              </p>
              <p className="text-sm text-gray-600">Ajuda gratuita e confidencial 24h/dia.</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-yellow-800 font-bold mb-3">Para Família e Amigos</h3>
            <p className="text-yellow-700 mb-3">
              Os problemas de jogo não afetam apenas o jogador - também afetam famílias e amigos.
            </p>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Não ignore o problema</li>
              <li>• Encoraje a procurar ajuda profissional</li>
              <li>• Não empreste dinheiro ou pague dívidas de jogo</li>
              <li>• Cuide do seu próprio bem-estar</li>
            </ul>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lembre-se</h3>
            <p className="text-gray-700 mb-4">
              A dependência do jogo é uma condição médica, não um defeito moral. A recuperação é possível com o apoio e
              tratamento adequados.
            </p>
            <p className="text-lg font-semibold text-green-600">
              O primeiro passo é reconhecer o problema e pedir ajuda.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
