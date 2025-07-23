"use client"

import Link from "next/link"

interface VerticalPromotionalBannerProps {
  position: "left" | "right"
  site: {
    id: number
    name: string
    logo: string
    welcomeOffer: string
    link: string
    backgroundImage: string
  }
}

export function VerticalPromotionalBanner({ position, site }: VerticalPromotionalBannerProps) {
  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-[700px] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${site.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content Container */}
        
      </div>
    </Link>
  )
}
