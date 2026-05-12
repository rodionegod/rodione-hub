"use client"

import { 
  Layers, 
  Palette, 
  Music, 
  Zap, 
  FileVideo, 
  Type,
  Wand2,
  FolderOpen
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const iconMap = {
  Layers,
  Palette,
  Music,
  Zap,
  FileVideo,
  Type,
  Wand2,
  FolderOpen,
}

export function WhatsInside() {
  const { whatsInside } = siteConfig

  return (
    <section id="whats-inside" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {whatsInside.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {whatsInside.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {whatsInside.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatsInside.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Layers
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
