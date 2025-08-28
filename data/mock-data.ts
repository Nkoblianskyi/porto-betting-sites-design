export interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  bonus: string
  description: string
  features: string[]
  welcomeOffer: string
  votes: number
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.8,
    bonus: "De Primeiro Depósito 100%  Até 100€",
    description: "Danmarks førende betting platform",
    features: ["Live Streaming", "Statistikker", "Cash Out"],
    welcomeOffer: " + CashBack 10% Até 500€",
    votes: 6124,
    link: "https://boomerang-bet.com",
  },
  {
    id: 2,
    name: "Lamabet",
    logo: "/lamabet.svg",
    rating: 9.7,
    bonus: "Aposta Grátis 10% Até 100€",
    description: "Danmarks favorit betting side",
    features: ["Konkurrencedygtige odds", "Cash Out", "Bet Builder"],
    welcomeOffer: " + BÓNUS Caça 100% Até 1500€",
    votes: 3893,
    link: "https://qualityboost.top/RRVJ1pcK",
  },
  {
    id: 3,
    name: "WinRolla",
    logo: "/winrolla.webp",
    rating: 9.6,
    bonus: "De Primeiro Depósito 100%",
    description: "Officiel dansk operatør",
    features: ["Dansk fokus", "Moderne interface", "Hurtige udbetalinger"],
    welcomeOffer: " + Até 500€",
    votes: 2551,
    link: "https://qualityboost.top/fVFy5hsx",
  },
  {
    id: 4,
    name: "RichRoyal",
    logo: "/rich-royal.webp",
    rating: 9.5,
    bonus: "De Primeiro Depósito 100% Até 100€",
    description: "Premium betting experience",
    features: ["VIP Program", "Fast Payouts", "Live Support"],
    welcomeOffer: "",
    votes: 4215,
    link: "https://richroyal1.com/pt/sport",
  },
  {
    id: 5,
    name: "Billybets",
    logo: "/billybets.webp",
    rating: 9.4,
    bonus: "De Primeiro Depósito 100%",
    description: "Bedste betting exchange",
    features: ["Betting Exchange", "Danske markeder", "Lokal support"],
    welcomeOffer: " + Até 100€",
    votes: 3579,
    link: "https://qualityboost.top/fVFy5hsx",
  },
  {
    id: 6,
    name: "Mr.Pacho",
    logo: "/mrpacho.svg",
    rating: 9.3,
    bonus: "De Primeiro Depósito 100% Até 100€",
    description: "Innovative betting platform",
    features: ["Modern Design", "Quick Deposits", "Mobile Optimized"],
    welcomeOffer: "",
    votes: 2847,
    link: "https://mrpacho3.com/pt/",
  },
]

export const bettingSitesSecond: BettingSite[] = [
  {
    id: 1,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.9,
    bonus: "700% OPPTIL 116 000 KR + 725 GRATISSPINN",
    description: "Test",
    features: ["Live Streaming", "Statistikker", "Cash Out"],
    welcomeOffer: "",
    votes: 7485,
    link: "https://qualityboost.top/FwbyzXcp",
  },
  {
    id: 2,
    name: "Betibet",
    logo: "/betibet.svg",
    rating: 9.7,
    bonus: "700% OPPTIL 116 000 KR + 725 GRATISSPINN",
    description: "Danmarks favorit betting side",
    features: ["Konkurrencedygtige odds", "Cash Out", "Bet Builder"],
    welcomeOffer: "",
    votes: 3893,
    link: "https://qualityboost.top/qCVKJsq9",
  },
]
