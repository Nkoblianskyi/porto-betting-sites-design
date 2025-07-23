import Link from "next/link"
import { ArrowLeft, Cookie, Shield, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold">Política de Cookies</h1>
          </div>
          <p className="text-blue-100 text-lg">Informações sobre a utilização de cookies na nossa plataforma</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-blue-900 font-bold text-xl">O que são Cookies?</h2>
            </div>
            <p className="text-blue-800">
              Os cookies são pequenos ficheiros de dados armazenados no seu dispositivo quando visita o nosso website.
              Ajudam-nos a melhorar a sua experiência e a fornecer conteúdo relevante.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Cookies Necessários</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Estes cookies são essenciais para as funções básicas do website.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Navegação e segurança</li>
                <li>• Definições e preferências</li>
                <li>• Gestão de sessão</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Cookies Funcionais</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Estes cookies melhoram as funcionalidades e personalização.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Definições de idioma</li>
                <li>• Interfaces de utilizador</li>
                <li>• Conteúdo personalizado</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Categorias de Cookies</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Sessão</h4>
                <p className="text-sm text-gray-600">
                  Cookies temporários eliminados quando fecha o seu navegador. Utilizados para manter a sua sessão
                  durante a navegação.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies Permanentes</h4>
                <p className="text-sm text-gray-600">
                  Permanecem no seu dispositivo durante um período determinado. Ajudam a lembrar as suas preferências em
                  futuras visitas.
                </p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Terceiros</h4>
                <p className="text-sm text-gray-600">
                  Cookies de serviços externos como análises e redes sociais. Ajudam-nos a compreender como o nosso site
                  é utilizado.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h3 className="text-green-800 font-bold mb-3">Gerir as suas Definições de Cookies</h3>
            <p className="text-green-700 mb-3">Tem controlo total sobre as definições de cookies no seu navegador:</p>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Ver todos os cookies armazenados</li>
              <li>• Eliminar cookies específicos ou todos os cookies</li>
              <li>• Bloquear cookies de sites específicos</li>
              <li>• Configurar eliminação automática</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-yellow-800 font-bold mb-3">O Seu Consentimento</h3>
            <p className="text-yellow-700">
              Ao continuar a utilizar o nosso website, aceita a nossa utilização de cookies conforme descrito nesta
              política. Pode modificar as suas preferências de cookies a qualquer momento através das definições do seu
              navegador.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
