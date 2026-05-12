"use client"

import { Download, Infinity, Film, Youtube, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const iconMap = {
  Download,
  Infinity,
  Film,
  Youtube,
}

export function FeaturedProduct() {
  const { featuredProduct } = siteConfig

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {featuredProduct.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {featuredProduct.name}
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{featuredProduct.status}</span>
          </div>
        </div>

        {/* Product Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
            {/* Product Preview */}
            <div className="aspect-video bg-gradient-to-br from-secondary via-muted to-secondary relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Film className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Preview Coming Soon</p>
                </div>
              </div>
              {/* Cinematic bars */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-10">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center leading-relaxed">
                {featuredProduct.description}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {featuredProduct.badges.map((badge, index) => {
                  const Icon = iconMap[badge.icon as keyof typeof iconMap] || Download
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-xs md:text-sm text-muted-foreground text-center">{badge.label}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                  disabled
                >
                  {featuredProduct.ctaButton}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {featuredProduct.ctaSubtext}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
