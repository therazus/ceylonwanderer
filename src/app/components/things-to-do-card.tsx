"use client"

import { useState } from "react"
import { Building2, Palmtree, Landmark } from "lucide-react"

interface ThingsToDoCardProps {
  name: string
  description: string
  image: string
  icon: string
  distance: string
}

const iconMap = {
  fort: Building2,
  beach: Palmtree,
  museum: Landmark,
}

export function ThingsToDoCard({ name, description, image, icon, distance }: ThingsToDoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[icon as keyof typeof iconMap] || Building2

  return (
    <div
      className="group relative h-[400px] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:opacity-60" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div
          className={`transform transition-all duration-700 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="mb-4">
            <Icon className="h-12 w-12 text-white mb-2" />
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-white/90 mb-4">{description}</p>
            <p className="text-xs tracking-wider">{distance}</p>
          </div>
          <button className="border-b border-white text-sm font-medium hover:border-primary hover:text-primary transition-colors">
            MORE INFO
          </button>
        </div>

        <div
          className={`transform transition-all duration-700 ${
            isHovered ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <Icon className="h-12 w-12 text-white mb-2" />
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-xs tracking-wider">{distance}</p>
        </div>
      </div>
    </div>
  )
}

