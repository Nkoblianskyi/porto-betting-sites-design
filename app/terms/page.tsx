import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Stadium+Background)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm text-white py-6">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold">Termos e Condições</h1>
            </div>
            <p className="text-emerald-200">
              Última atualização:{" "}
              {new Date().toLocaleDateString("pt-PT", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar Melhores Sites de Apostas Portugueses, aceita e consente estar vinculado pelos
                seguintes termos e condições. Estes termos aplicam-se a todos os utilizadores do nosso website e
                serviços.
              </p>

              <h2>2. Objetivo do Website</h2>
              <p>
                Este website fornece informações e análises sobre sites de apostas disponíveis em Portugal. Somos um
                serviço de comparação independente e não operamos nenhum serviço de jogo nós próprios.
              </p>

              <h2>3. Restrições de Idade</h2>
              <p>
                Deve ter pelo menos 18 anos para utilizar este website. O jogo é reservado apenas a adultos. Levamos a
                verificação de idade a sério e encorajamos o jogo responsável.
              </p>

              <h2>4. Precisão das Informações</h2>
              <p>
                Embora nos esforcemos para fornecer informações precisas e atualizadas, não podemos garantir a exatidão
                de todo o conteúdo. As odds de apostas, bónus e condições podem mudar sem aviso prévio.
              </p>

              <h2>5. Links de Terceiros</h2>
              <p>
                O nosso website contém links para sites de apostas de terceiros. Não somos responsáveis pelo conteúdo,
                condições ou práticas desses sites externos. Por favor consulte os seus termos e condições antes da
                utilização.
              </p>

              <h2>6. Jogo Responsável</h2>
              <p>Promovemos o jogo responsável e encorajamos os utilizadores a:</p>
              <ul>
                <li>Definir limites de tempo e dinheiro gasto no jogo</li>
                <li>Nunca jogar mais do que pode permitir-se perder</li>
                <li>Procurar ajuda se o jogo se tornar um problema</li>
                <li>Utilizar ferramentas de auto-exclusão se necessário</li>
              </ul>

              <h2>7. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo deste website, incluindo texto, gráficos, logótipos e imagens, é propriedade de Melhores
                Sites de Apostas Portugueses e está protegido pelas leis de direitos autorais.
              </p>

              <h2>8. Limitação de Responsabilidade</h2>
              <p>
                Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais
                decorrentes da sua utilização deste website ou das informações nele contidas.
              </p>

              <h2>9. Privacidade</h2>
              <p>
                A sua privacidade é importante para nós. Por favor consulte a nossa Política de Privacidade para
                compreender como recolhemos, utilizamos e protegemos as suas informações.
              </p>

              <h2>10. Modificações dos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor
                imediatamente após a sua publicação neste website.
              </p>

              <h2>11. Lei Aplicável</h2>
              <p>Estes termos serão regidos e interpretados de acordo com as leis portuguesas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
