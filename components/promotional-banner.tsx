"use client"

import Link from "next/link"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import Image from "next/image"
import { Star } from "lucide-react"

interface PromotionalBannerProps {
  banner: HorizontalBannerType
}

export function PromotionalBanner({ banner }: PromotionalBannerProps) {
  return (
    <div className="mb-6 max-w-[1580px] mx-auto">
      <Link
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.01] transition-all duration-300"
      >
        <div className="relative overflow-hidden tech-card border-2 border-tech-black h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Background Image */}
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt="Fundo do Banner"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />

          {/* Tech overlay */}

          {/* Special Offer Flag */}
          <div className="absolute top-0 left-0 bg-portuguese-red text-tech-white px-4 py-2 text-xs font-bold z-10 shadow-tech-strong tech-subheading flex items-center gap-1">
            <Star className="w-3 h-3" />
            OFERTA ESPECIAL
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-tech-gold"></div>
          <div className="absolute bottom-0 left-4 w-4 h-4 bg-tech-gold"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-portuguese-red"></div>

          {/* Main Content */}
        </div>
      </Link>
    </div>
  )
}
