import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="bg-black/50 backdrop-blur-sm sticky top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-tech-gold"></div>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-tech-gold border border-tech-black flex items-center justify-center relative">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-portuguese-red"></div>
            </div>
            <div className="text-center">
              <h1 className="text-sm font-bold leading-tight">
                <span className="text-portuguese-red">Apostas</span>
                <span className="text-tech-white"> Melhores</span>
                <span className="text-portuguese-red"> Sites</span>
                <span className="text-tech-white"> Portugueses</span>
              </h1>
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-portuguese-red"></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3 max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-tech-gold border-2 border-tech-black flex items-center justify-center tech-scanner">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-8 h-8" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-tech-black bg-portuguese-red"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-portuguese-green border border-tech-black"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  <span className="text-portuguese-red">Apostas</span>
                  <span className="text-tech-white"> Melhores</span>
                  <span className="text-portuguese-red"> Sites</span>
                  <span className="text-tech-white"> Portugueses</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
