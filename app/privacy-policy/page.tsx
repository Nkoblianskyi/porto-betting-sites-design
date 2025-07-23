import Link from "next/link"
import { ArrowLeft, Lock, Eye, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Início
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Política de Privacidade</h1>
          </div>
          <p className="text-purple-100 text-lg">Como protegemos e gerimos as suas informações pessoais</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Que Dados Recolhemos</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Informações básicas do utilizador</li>
                <li>• Informações sobre navegador e dispositivo</li>
                <li>• Estatísticas de utilização e preferências</li>
                <li>• Dados de interação na plataforma</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Como Utilizamos os Dados</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Melhorar as funcionalidades da plataforma</li>
                <li>• Fornecer conteúdo relevante</li>
                <li>• Analisar o comportamento dos utilizadores</li>
                <li>• Garantir a segurança da plataforma</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Princípios de Proteção de Dados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Minimização</h4>
                <p className="text-sm text-gray-600">
                  Recolhemos apenas os dados necessários ao funcionamento da plataforma
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
                <p className="text-sm text-gray-600">Todos os dados são protegidos por medidas de segurança modernas</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Transparência</h4>
                <p className="text-sm text-gray-600">Comunicação clara sobre a utilização dos seus dados</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-purple-900 font-bold text-xl">Os Seus Direitos</h3>
            </div>
            <p className="text-purple-800 mb-3">Tem os seguintes direitos relativos aos seus dados pessoais:</p>
            <ul className="text-purple-800 space-y-2 text-sm">
              <li>• Direito de acesso aos seus dados armazenados</li>
              <li>• Direito de retificação de informações incorretas</li>
              <li>• Direito ao apagamento dos seus dados</li>
              <li>• Direito à limitação do processamento de dados</li>
              <li>• Direito à portabilidade dos dados</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medidas de Segurança</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Implementamos medidas de segurança abrangentes para proteger as suas informações pessoais:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medidas Técnicas</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Encriptação de dados sensíveis</li>
                    <li>• Infraestruturas de servidor seguras</li>
                    <li>• Atualizações de segurança regulares</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medidas Organizacionais</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Acesso limitado aos dados</li>
                    <li>• Formação do pessoal em segurança de dados</li>
                    <li>• Revisões de segurança regulares</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">Atualizações da Política</h3>
            <p className="text-yellow-700">
              Podemos periodicamente atualizar esta política de privacidade para refletir mudanças nas nossas práticas
              ou requisitos legais. Mudanças importantes serão comunicadas claramente na plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
